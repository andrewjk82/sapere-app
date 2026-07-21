import { db } from '../firebase/config.js';
import { collection, addDoc, getDocs, query, where, deleteDoc } from 'firebase/firestore';

export const allQuestions = [
  {
    "id": "09ug56WNhETeKwdAT2zl",
    "chapterId": "y7-20",
    "chapterTitle": "Chapter 20: Three-dimensional solids",
    "topicId": "y7-20a",
    "topicCode": "20A",
    "topicTitle": "Polyhedra",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "solution": "<div style=\"text-align: left;\"><p>Let's analyze these three complex polyhedra:</p><ul><li><strong>Shape E (House-like pentagonal prism):</strong> It has front and back walls that are congruent parallel pentagons, connected by rectangular side/roof panels. Its cross-section parallel to the front/back walls is completely uniform. Thus, it **is a prism**.</li><li><strong>Shape F (L-shaped block):</strong> It has two congruent, parallel L-shaped bases (top and bottom) connected by rectangular sides. Its cross-section parallel to the top/bottom is uniform. Thus, it **is a prism**.</li><li><strong>Shape G (U-channel / trenched block):</strong> Similar to Shape F, it has congruent parallel L/U-shaped bases (front and back walls) connected by rectangular sides. Its cross-section is uniform. Thus, it **is a prism**.</li></ul><p>Therefore, all three shapes (E, F, and G) are prisms.</p></div>",
    "createdAt": "2026-05-18T08:28:42.127Z",
    "answer": "0",
    "hint": "",
    "options": [
      {
        "text": "All three shapes (E, F, and G) are prisms",
        "imageUrl": ""
      },
      {
        "text": "Only Shapes E and F are prisms",
        "imageUrl": ""
      },
      {
        "text": "Only Shapes F and G are prisms",
        "imageUrl": ""
      },
      {
        "text": "Only Shape E is a prism",
        "imageUrl": ""
      }
    ],
    "requiresManualGrading": false,
    "updatedAt": {
      "_seconds": 1784357705,
      "_nanoseconds": 881000000
    },
    "isNew": false,
    "question": "Determine which of the following shapes are <strong>prisms</strong> (polyhedra with two congruent, parallel bases and flat rectangular connecting sides, maintaining a uniform cross-section):\n\n<div style=\"display: flex; justify-content: center; gap: 16px; margin: 16px 0; flex-wrap: wrap;\">\n  <div style=\"border: 1px solid #e2e8f0; padding: 12px; border-radius: 8px; background: white; display: flex; flex-direction: column; align-items: center; justify-content: center;\">\n    <svg viewBox=\"0 0 130 150\" xmlns=\"http://www.w3.org/2000/svg\" style=\"width: 100%; max-width: 110px; height: auto; background-color: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; box-shadow: 0 1px 3px rgba(0,0,0,0.02);\">\n  <defs>\n    <pattern id=\"grid\" width=\"16\" height=\"16\" patternUnits=\"userSpaceOnUse\">\n      <path d=\"M 16 0 L 0 0 0 16\" fill=\"none\" stroke=\"#f1f5f9\" stroke-width=\"1.2\" />\n    </pattern>\n  </defs>\n  <rect width=\"100%\" height=\"100%\" fill=\"url(#grid)\" />\n  \n  <!-- House-like pentagonal prism -->\n  <line x1=\"25\" y1=\"120\" x2=\"55\" y2=\"100\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"4\" stroke-linejoin=\"round\" stroke-linecap=\"round\" />\n  <line x1=\"55\" y1=\"100\" x2=\"115\" y2=\"100\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"4\" stroke-linejoin=\"round\" stroke-linecap=\"round\" />\n  <line x1=\"55\" y1=\"100\" x2=\"55\" y2=\"70\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"4\" stroke-linejoin=\"round\" stroke-linecap=\"round\" />\n\n  <polygon points=\"25,120 85,120 85,90 55,65 25,90\" stroke=\"#0f172a\" stroke-width=\"2.5\" stroke-linejoin=\"round\" stroke-linecap=\"round\" fill=\"#94a3b8\" />\n  <polygon points=\"25,90 55,65 85,45 55,70\" stroke=\"#0f172a\" stroke-width=\"2.5\" stroke-linejoin=\"round\" stroke-linecap=\"round\" fill=\"#cbd5e1\" />\n  <polygon points=\"55,65 85,90 115,70 85,45\" stroke=\"#0f172a\" stroke-width=\"2.5\" stroke-linejoin=\"round\" stroke-linecap=\"round\" fill=\"#cbd5e1\" />\n  <polygon points=\"85,90 85,120 115,100 115,70\" stroke=\"#0f172a\" stroke-width=\"2.5\" stroke-linejoin=\"round\" stroke-linecap=\"round\" fill=\"#64748b\" />\n  \n  <line x1=\"25\" y1=\"120\" x2=\"85\" y2=\"120\" stroke=\"#0f172a\" stroke-width=\"2.5\" stroke-linejoin=\"round\" stroke-linecap=\"round\" />\n  <line x1=\"85\" y1=\"120\" x2=\"115\" y2=\"100\" stroke=\"#0f172a\" stroke-width=\"2.5\" stroke-linejoin=\"round\" stroke-linecap=\"round\" />\n\n</svg>\n    <div style=\"text-align: center; font-weight: bold; font-size: 13px; margin-top: 6px;\">Shape E</div>\n  </div>\n  <div style=\"border: 1px solid #e2e8f0; padding: 12px; border-radius: 8px; background: white; display: flex; flex-direction: column; align-items: center; justify-content: center;\">\n    <svg viewBox=\"0 0 130 150\" xmlns=\"http://www.w3.org/2000/svg\" style=\"width: 100%; max-width: 110px; height: auto; background-color: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; box-shadow: 0 1px 3px rgba(0,0,0,0.02);\">\n  <defs>\n    <pattern id=\"grid\" width=\"16\" height=\"16\" patternUnits=\"userSpaceOnUse\">\n      <path d=\"M 16 0 L 0 0 0 16\" fill=\"none\" stroke=\"#f1f5f9\" stroke-width=\"1.2\" />\n    </pattern>\n  </defs>\n  <rect width=\"100%\" height=\"100%\" fill=\"url(#grid)\" />\n  \n  <!-- L-shaped block in 3D Oblique Projection -->\n  <!-- Hidden Back edges -->\n  <line x1=\"20\" y1=\"130\" x2=\"45\" y2=\"110\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"4\" stroke-linejoin=\"round\" stroke-linecap=\"round\" />\n  <line x1=\"45\" y1=\"110\" x2=\"45\" y2=\"50\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"4\" stroke-linejoin=\"round\" stroke-linecap=\"round\" />\n  <line x1=\"45\" y1=\"110\" x2=\"105\" y2=\"110\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"4\" stroke-linejoin=\"round\" stroke-linecap=\"round\" />\n\n  <!-- Faces -->\n  <polygon points=\"20,70 45,50 75,50 50,70\" stroke=\"#0f172a\" stroke-width=\"2.5\" stroke-linejoin=\"round\" stroke-linecap=\"round\" fill=\"#cbd5e1\" /> <!-- Top L-step 1 -->\n  <polygon points=\"50,100 75,80 105,80 80,100\" stroke=\"#0f172a\" stroke-width=\"2.5\" stroke-linejoin=\"round\" stroke-linecap=\"round\" fill=\"#cbd5e1\" /> <!-- Top L-step 2 -->\n  <polygon points=\"50,70 75,50 75,80 50,100\" stroke=\"#0f172a\" stroke-width=\"2.5\" stroke-linejoin=\"round\" stroke-linecap=\"round\" fill=\"#64748b\" /> <!-- Inner right face -->\n  <polygon points=\"80,100 105,80 105,110 80,130\" stroke=\"#0f172a\" stroke-width=\"2.5\" stroke-linejoin=\"round\" stroke-linecap=\"round\" fill=\"#64748b\" /> <!-- Outer right face -->\n  <polygon points=\"20,130 20,70 50,70 50,100 80,100 80,130\" stroke=\"#0f172a\" stroke-width=\"2.5\" stroke-linejoin=\"round\" stroke-linecap=\"round\" fill=\"#94a3b8\" /> <!-- Front L-face -->\n  \n  <!-- Outer borders connection -->\n  <line x1=\"20\" y1=\"70\" x2=\"45\" y2=\"50\" stroke=\"#0f172a\" stroke-width=\"2.5\" stroke-linejoin=\"round\" stroke-linecap=\"round\" />\n  <line x1=\"45\" y1=\"50\" x2=\"75\" y2=\"50\" stroke=\"#0f172a\" stroke-width=\"2.5\" stroke-linejoin=\"round\" stroke-linecap=\"round\" />\n  <line x1=\"75\" y1=\"50\" x2=\"75\" y2=\"80\" stroke=\"#0f172a\" stroke-width=\"2.5\" stroke-linejoin=\"round\" stroke-linecap=\"round\" />\n  <line x1=\"75\" y1=\"80\" x2=\"105\" y2=\"80\" stroke=\"#0f172a\" stroke-width=\"2.5\" stroke-linejoin=\"round\" stroke-linecap=\"round\" />\n  <line x1=\"105\" y1=\"80\" x2=\"105\" y2=\"110\" stroke=\"#0f172a\" stroke-width=\"2.5\" stroke-linejoin=\"round\" stroke-linecap=\"round\" />\n  <line x1=\"105\" y1=\"110\" x2=\"80\" y2=\"130\" stroke=\"#0f172a\" stroke-width=\"2.5\" stroke-linejoin=\"round\" stroke-linecap=\"round\" />\n\n</svg>\n    <div style=\"text-align: center; font-weight: bold; font-size: 13px; margin-top: 6px;\">Shape F</div>\n  </div>\n  <div style=\"border: 1px solid #e2e8f0; padding: 12px; border-radius: 8px; background: white; display: flex; flex-direction: column; align-items: center; justify-content: center;\">\n    <svg viewBox=\"0 0 130 150\" xmlns=\"http://www.w3.org/2000/svg\" style=\"width: 100%; max-width: 110px; height: auto; background-color: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; box-shadow: 0 1px 3px rgba(0,0,0,0.02);\">\n  <defs>\n    <pattern id=\"grid\" width=\"16\" height=\"16\" patternUnits=\"userSpaceOnUse\">\n      <path d=\"M 16 0 L 0 0 0 16\" fill=\"none\" stroke=\"#f1f5f9\" stroke-width=\"1.2\" />\n    </pattern>\n  </defs>\n  <rect width=\"100%\" height=\"100%\" fill=\"url(#grid)\" />\n  \n  <!-- U-channel block in 3D Oblique Projection -->\n  <!-- Hidden Back edges -->\n  <line x1=\"20\" y1=\"100\" x2=\"50\" y2=\"80\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"4\" stroke-linejoin=\"round\" stroke-linecap=\"round\" />\n  <line x1=\"50\" y1=\"80\" x2=\"50\" y2=\"40\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"4\" stroke-linejoin=\"round\" stroke-linecap=\"round\" />\n  <line x1=\"50\" y1=\"80\" x2=\"120\" y2=\"80\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"4\" stroke-linejoin=\"round\" stroke-linecap=\"round\" />\n  <line x1=\"100\" y1=\"60\" x2=\"100\" y2=\"40\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"4\" stroke-linejoin=\"round\" stroke-linecap=\"round\" />\n  <line x1=\"70\" y1=\"80\" x2=\"100\" y2=\"60\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"4\" stroke-linejoin=\"round\" stroke-linecap=\"round\" /> <!-- Inner-right trench bottom edge (Hidden behind the column!) -->\n\n  <!-- Visible Faces -->\n  <polygon points=\"20,60 50,40 70,40 40,60\" stroke=\"#0f172a\" stroke-width=\"2.5\" stroke-linejoin=\"round\" stroke-linecap=\"round\" fill=\"#cbd5e1\" /> <!-- Top left column -->\n  <polygon points=\"70,60 100,40 120,40 90,60\" stroke=\"#0f172a\" stroke-width=\"2.5\" stroke-linejoin=\"round\" stroke-linecap=\"round\" fill=\"#cbd5e1\" /> <!-- Top right column -->\n  <polygon points=\"40,80 70,60 100,60 70,80\" stroke=\"#0f172a\" stroke-width=\"2.5\" stroke-linejoin=\"round\" stroke-linecap=\"round\" fill=\"#cbd5e1\" /> <!-- Trench bottom -->\n  <polygon points=\"40,60 70,40 70,60 40,80\" stroke=\"#0f172a\" stroke-width=\"2.5\" stroke-linejoin=\"round\" stroke-linecap=\"round\" fill=\"#64748b\" /> <!-- Trench inner-left wall -->\n  <polygon points=\"90,60 120,40 120,80 90,100\" stroke=\"#0f172a\" stroke-width=\"2.5\" stroke-linejoin=\"round\" stroke-linecap=\"round\" fill=\"#64748b\" /> <!-- Outer right face -->\n  <polygon points=\"20,100 20,60 40,60 40,80 70,80 70,60 90,60 90,100\" stroke=\"#0f172a\" stroke-width=\"2.5\" stroke-linejoin=\"round\" stroke-linecap=\"round\" fill=\"#94a3b8\" /> <!-- Front U-face -->\n\n  <!-- Connection lines -->\n  <line x1=\"20\" y1=\"60\" x2=\"50\" y2=\"40\" stroke=\"#0f172a\" stroke-width=\"2.5\" stroke-linejoin=\"round\" stroke-linecap=\"round\" />\n  <line x1=\"40\" y1=\"60\" x2=\"70\" y2=\"40\" stroke=\"#0f172a\" stroke-width=\"2.5\" stroke-linejoin=\"round\" stroke-linecap=\"round\" />\n  <line x1=\"70\" y1=\"60\" x2=\"100\" y2=\"40\" stroke=\"#0f172a\" stroke-width=\"2.5\" stroke-linejoin=\"round\" stroke-linecap=\"round\" />\n  <line x1=\"90\" y1=\"60\" x2=\"120\" y2=\"40\" stroke=\"#0f172a\" stroke-width=\"2.5\" stroke-linejoin=\"round\" stroke-linecap=\"round\" />\n  <line x1=\"120\" y1=\"40\" x2=\"120\" y2=\"80\" stroke=\"#0f172a\" stroke-width=\"2.5\" stroke-linejoin=\"round\" stroke-linecap=\"round\" />\n  <line x1=\"120\" y1=\"80\" x2=\"90\" y2=\"100\" stroke=\"#0f172a\" stroke-width=\"2.5\" stroke-linejoin=\"round\" stroke-linecap=\"round\" />\n  <line x1=\"40\" y1=\"80\" x2=\"70\" y2=\"60\" stroke=\"#0f172a\" stroke-width=\"2.5\" stroke-linejoin=\"round\" stroke-linecap=\"round\" />\n  <line x1=\"70\" y1=\"40\" x2=\"70\" y2=\"60\" stroke=\"#0f172a\" stroke-width=\"2.5\" stroke-linejoin=\"round\" stroke-linecap=\"round\" />\n\n</svg>\n    <div style=\"text-align: center; font-weight: bold; font-size: 13px; margin-top: 6px;\">Shape G</div>\n  </div>\n</div>",
    "solutionSteps": [
      {
        "explanation": "Identify what the question is asking and note the given information. Choose the appropriate method (calculate, simplify, convert, or list elements).",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "Carry out the calculation or algebraic rearrangement step by step. Watch signs, place value, and order of operations.",
        "workingOut": "<div style=\"text-align: left;\"><p>Let's analyze these three complex polyhedra:</p><ul><li><strong>Shape E (House-like pentagonal prism):</strong> It has front and back walls that are congruent parallel pentagons, connected by rectangular side/roof panels. Its cross-section parallel to the front/back walls is completely uniform. Thus, it <strong>is a prism</strong>.</li><li><strong>Shape F (L-shaped block):</strong> It has two congruent, parallel L-shaped bases (top and bottom) connected by rectangular sides. Its cross-section parallel to the top/bottom is uniform. Thus, it <strong>is a prism</strong>.</li><li><strong>Shape G (U-channel / trenched block):</strong> Similar to Shape F, it has congruent parallel L/U-shaped bases (front and back walls) connected by rectangular sides. Its cross-section is uniform. Thus, it <strong>is a prism</strong>.</li></ul><p>Therefore, all three shapes (E, F, and G) are prisms.</p></div>",
        "graphData": null
      },
      {
        "explanation": "State the final simplified answer and match it to the correct option.",
        "workingOut": "All three shapes (E, F, and G) are prisms",
        "graphData": null
      }
    ]
  },
  {
    "id": "2TiEa0S7802kxnSK04Pv",
    "chapterId": "y7-20",
    "chapterTitle": "Chapter 20: Three-dimensional solids",
    "topicId": "y7-20a",
    "topicCode": "20A",
    "topicTitle": "Polyhedra",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "createdAt": "2026-05-18T08:28:42.127Z",
    "answer": "0",
    "solution": "<div style=\"text-align: left;\"><p>Let's count the features of this skewed rectangular prism (parallelepiped):</p><ul><li><strong>Faces (F):</strong> It has 6 rectangular/parallelogram faces (top, bottom, and 4 sides). <br />\\(F = 6\\)\\(.</li><li><strong>Edges (E):</strong> It has 4 edges on the bottom base, 4 on the top base, and 4 vertical connecting edges. <br />\\)\\(E = 12\\)\\(.</li><li><strong>Vertices (V):</strong> It has 4 corners on the bottom base and 4 corners on the top base. <br />\\)\\(V = 8\\)\\(.</li></ul><p>Notice that Euler's formula holds true: \\)\\(V - E + F = 8 - 12 + 6 = 2\\).</p></div>",
    "hint": "",
    "options": [
      {
        "text": "\\(F = 6, E = 12, V = 8\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(F = 6, E = 8, V = 12\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(F = 5, E = 9, V = 6\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(F = 8, E = 12, V = 6\\)",
        "imageUrl": ""
      }
    ],
    "requiresManualGrading": false,
    "updatedAt": {
      "_seconds": 1784357705,
      "_nanoseconds": 881000000
    },
    "isNew": false,
    "question": "Find the number of faces (\\(F\\)), edges (\\(E\\)) and vertices (\\(V\\)) of the skewed rectangular prism shown below:\n\n<div style=\"text-align: center; margin: 16px 0; display: flex; justify-content: center;\">\n  <svg viewBox=\"0 0 140 150\" xmlns=\"http://www.w3.org/2000/svg\" style=\"width: 100%; max-width: 120px; height: auto; background-color: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; box-shadow: 0 1px 3px rgba(0,0,0,0.02);\">\n  <defs>\n    <pattern id=\"grid\" width=\"16\" height=\"16\" patternUnits=\"userSpaceOnUse\">\n      <path d=\"M 16 0 L 0 0 0 16\" fill=\"none\" stroke=\"#f1f5f9\" stroke-width=\"1.2\" />\n    </pattern>\n  </defs>\n  <rect width=\"100%\" height=\"100%\" fill=\"url(#grid)\" />\n  \n  <!-- Skewed Rectangular Prism -->\n  <line x1=\"20\" y1=\"120\" x2=\"50\" y2=\"105\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"4\" stroke-linejoin=\"round\" stroke-linecap=\"round\" />\n  <line x1=\"100\" y1=\"115\" x2=\"50\" y2=\"105\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"4\" stroke-linejoin=\"round\" stroke-linecap=\"round\" />\n  <line x1=\"50\" y1=\"105\" x2=\"70\" y2=\"35\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"4\" stroke-linejoin=\"round\" stroke-linecap=\"round\" />\n  <polygon points=\"20,120 70,125 90,55 40,50\" stroke=\"#0f172a\" stroke-width=\"2.5\" stroke-linejoin=\"round\" stroke-linecap=\"round\" fill=\"#e2e8f0\" />\n  <polygon points=\"70,125 100,115 120,45 90,55\" stroke=\"#0f172a\" stroke-width=\"2.5\" stroke-linejoin=\"round\" stroke-linecap=\"round\" fill=\"#cbd5e1\" />\n  <polygon points=\"40,50 90,55 120,45 70,40\" stroke=\"#0f172a\" stroke-width=\"2.5\" stroke-linejoin=\"round\" stroke-linecap=\"round\" fill=\"#f8fafc\" />\n  <line x1=\"20\" y1=\"120\" x2=\"70\" y2=\"125\" stroke=\"#0f172a\" stroke-width=\"2.5\" stroke-linejoin=\"round\" stroke-linecap=\"round\" />\n  <line x1=\"70\" y1=\"125\" x2=\"100\" y2=\"115\" stroke=\"#0f172a\" stroke-width=\"2.5\" stroke-linejoin=\"round\" stroke-linecap=\"round\" />\n\n</svg>\n</div>",
    "solutionSteps": [
      {
        "explanation": "Identify what the question is asking and note the given information. Choose the appropriate method (calculate, simplify, convert, or list elements).",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "Carry out the calculation or algebraic rearrangement step by step. Watch signs, place value, and order of operations.",
        "workingOut": "<div style=\"text-align: left;\"><p>Let's count the features of this skewed rectangular prism (parallelepiped):</p><ul><li><strong>Faces (F):</strong> It has 6 rectangular/parallelogram faces (top, bottom, and 4 sides). <br />\\(F = 6\\).</li><li><strong>Edges (E):</strong> It has 4 edges on the bottom base, 4 on the top base, and 4 vertical connecting edges. <br />\\(E = 12\\).</li><li><strong>Vertices (V):</strong> It has 4 corners on the bottom base and 4 corners on the top base. <br />\\(V = 8\\).</li></ul><p>Notice that Euler's formula holds true: \\(V - E + F = 8 - 12 + 6 = 2\\).</p></div>",
        "graphData": null
      },
      {
        "explanation": "State the final simplified answer and match it to the correct option.",
        "workingOut": "F = 6, E = 12, V = 8",
        "graphData": null
      }
    ]
  },
  {
    "id": "6G0ff89neJ2uLLRf8h2L",
    "chapterId": "y7-20",
    "chapterTitle": "Chapter 20: Three-dimensional solids",
    "topicId": "y7-20a",
    "topicCode": "20A",
    "topicTitle": "Polyhedra",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "hard",
    "isActive": true,
    "isManual": true,
    "createdAt": "2026-05-18T08:28:42.127Z",
    "answer": "0",
    "question": "Complete the Platonic solids features table and solve part (b):\n\n<div style=\"display: flex; justify-content: center; margin: 16px 0;\">\n  <table style=\"width: 100%; max-width: 500px; border-collapse: collapse; font-family: inherit; font-size: 14px; text-align: center; border: 1px solid #cbd5e1; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);\">\n    <thead>\n      <tr style=\"background: #6b21a8; color: white;\">\n        <th style=\"padding: 10px 12px; font-weight: 600; border: 1px solid #cbd5e1;\">Platonic solid</th>\n        <th style=\"padding: 10px 12px; font-weight: 600; border: 1px solid #cbd5e1;\">Faces (F)</th>\n        <th style=\"padding: 10px 12px; font-weight: 600; border: 1px solid #cbd5e1;\">Edges (E)</th>\n        <th style=\"padding: 10px 12px; font-weight: 600; border: 1px solid #cbd5e1;\">Vertices (V)</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr style=\"background: #f8fafc;\"><td style=\"padding: 8px 12px; border: 1px solid #cbd5e1; font-weight: 500; text-align: left;\">Cube</td><td style=\"padding: 8px 12px; border: 1px solid #cbd5e1; color: #475569;\">?</td><td style=\"padding: 8px 12px; border: 1px solid #cbd5e1; color: #475569;\">?</td><td style=\"padding: 8px 12px; border: 1px solid #cbd5e1; color: #475569;\">?</td></tr>\n      <tr><td style=\"padding: 8px 12px; border: 1px solid #cbd5e1; font-weight: 500; text-align: left;\">Tetrahedron</td><td style=\"padding: 8px 12px; border: 1px solid #cbd5e1; color: #475569;\">?</td><td style=\"padding: 8px 12px; border: 1px solid #cbd5e1; color: #475569;\">?</td><td style=\"padding: 8px 12px; border: 1px solid #cbd5e1; color: #475569;\">?</td></tr>\n      <tr style=\"background: #f8fafc;\"><td style=\"padding: 8px 12px; border: 1px solid #cbd5e1; font-weight: 500; text-align: left;\">Octahedron</td><td style=\"padding: 8px 12px; border: 1px solid #cbd5e1; color: #475569;\">?</td><td style=\"padding: 8px 12px; border: 1px solid #cbd5e1; color: #475569;\">?</td><td style=\"padding: 8px 12px; border: 1px solid #cbd5e1; color: #475569;\">?</td></tr>\n      <tr><td style=\"padding: 8px 12px; border: 1px solid #cbd5e1; font-weight: 500; text-align: left;\">Dodecahedron</td><td style=\"padding: 8px 12px; border: 1px solid #cbd5e1; color: #475569;\">?</td><td style=\"padding: 8px 12px; border: 1px solid #cbd5e1; color: #475569;\">?</td><td style=\"padding: 8px 12px; border: 1px solid #cbd5e1; color: #475569;\">?</td></tr>\n      <tr style=\"background: #f8fafc;\"><td style=\"padding: 8px 12px; border: 1px solid #cbd5e1; font-weight: 500; text-align: left;\">Icosahedron</td><td style=\"padding: 8px 12px; border: 1px solid #cbd5e1; color: #475569;\">?</td><td style=\"padding: 8px 12px; border: 1px solid #cbd5e1; color: #475569;\">?</td><td style=\"padding: 8px 12px; border: 1px solid #cbd5e1; color: #475569;\">?</td></tr>\n    </tbody>\n  </table>\n</div>\n\nAnalyze the features and select the correct option summarizing part (b):\n* **b** For each of the five Platonic solids, evaluate the value of \\(V - E + F\\).",
    "solution": "<div style=\"text-align: left;\"><p>Let's find the values of \\(F\\), \\(E\\), and \\(V\\) for each Platonic solid and evaluate \\(V - E + F\\)\\(:</p><ul><li><strong>Cube (Hexahedron):</strong> \\)F = 6\\(, \\)E = 12\\(, \\)V = 8\\(. <br />\\)\\(V - E + F = 8 - 12 + 6 = 2\\)\\(.</li><li><strong>Tetrahedron:</strong> \\)F = 4\\(, \\)E = 6\\(, \\)V = 4\\(. <br />\\)\\(V - E + F = 4 - 6 + 4 = 2\\)\\(.</li><li><strong>Octahedron:</strong> \\)F = 8\\(, \\)E = 12\\(, \\)V = 6\\(. <br />\\)\\(V - E + F = 6 - 12 + 8 = 2\\)\\(.</li><li><strong>Dodecahedron (12 pentagonal faces):</strong> \\)F = 12\\(, \\)E = 30\\(, \\)V = 20\\(. <br />\\)\\(V - E + F = 20 - 30 + 12 = 2\\)\\(.</li><li><strong>Icosahedron (20 triangular faces):</strong> \\)F = 20\\(, \\)E = 30\\(, \\)V = 12\\(. <br />\\)\\(V - E + F = 12 - 30 + 20 = 2\\)\\(.</li></ul><p>Therefore, \\)\\(V - E + F = 2\\) holds perfectly for all five Platonic solids! This is known as <strong>Euler's formula</strong> for convex polyhedra.</p></div>",
    "hint": "",
    "options": [
      {
        "text": "\\(V - E + F = 2 for all five Platonic solids (Euler's formula).\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(V - E + F = 1 for all five Platonic solids.\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(V - E + F = 0 for all five Platonic solids.\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(V - E + F = 3 for all five Platonic solids.\\)",
        "imageUrl": ""
      }
    ],
    "requiresManualGrading": false,
    "updatedAt": {
      "_seconds": 1784357705,
      "_nanoseconds": 881000000
    },
    "isNew": false,
    "solutionSteps": [
      {
        "explanation": "Identify what the question is asking and note the given information. Choose the appropriate method (calculate, simplify, convert, or list elements).",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "Carry out the calculation or algebraic rearrangement step by step. Watch signs, place value, and order of operations.",
        "workingOut": "<div style=\"text-align: left;\"><p>Let's find the values of \\(F\\), \\(E\\), and \\(V\\) for each Platonic solid and evaluate \\(V - E + F\\):</p><ul><li><strong>Cube (Hexahedron):</strong> \\(F = 6\\), \\(E = 12\\), \\(V = 8\\). <br />\\(V - E + F = 8 - 12 + 6 = 2\\).</li><li><strong>Tetrahedron:</strong> \\(F = 4\\), \\(E = 6\\), \\(V = 4\\). <br />\\(V - E + F = 4 - 6 + 4 = 2\\).</li><li><strong>Octahedron:</strong> \\(F = 8\\), \\(E = 12\\), \\(V = 6\\). <br />\\(V - E + F = 6 - 12 + 8 = 2\\).</li><li><strong>Dodecahedron (12 pentagonal faces):</strong> \\(F = 12\\), \\(E = 30\\), \\(V = 20\\). <br />\\(V - E + F = 20 - 30 + 12 = 2\\).</li><li><strong>Icosahedron (20 triangular faces):</strong> \\(F = 20\\), \\(E = 30\\), \\(V = 12\\). <br />\\(V - E + F = 12 - 30 + 20 = 2\\).</li></ul><p>Therefore, \\(V - E + F = 2\\) holds perfectly for all five Platonic solids! This is known as <strong>Euler's formula</strong> for convex polyhedra.</p></div>",
        "graphData": null
      },
      {
        "explanation": "State the final simplified answer and match it to the correct option.",
        "workingOut": "V - E + F = 2 for all five Platonic solids (Euler's formula).",
        "graphData": null
      }
    ]
  },
  {
    "id": "DbMgjwpZtTWYgX0yHLxY",
    "chapterId": "y7-20",
    "chapterTitle": "Chapter 20: Three-dimensional solids",
    "topicId": "y7-20a",
    "topicCode": "20A",
    "topicTitle": "Polyhedra",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "createdAt": "2026-05-18T08:28:42.127Z",
    "answer": "0",
    "solution": "<div style=\"text-align: left;\"><p>Let's count the features of this triangular pyramid (tetrahedron):</p><ul><li><strong>Faces (F):</strong> It has 1 triangular base and 3 triangular sides that meet at the top apex. <br />\\(F = 4\\)\\(.</li><li><strong>Edges (E):</strong> It has 3 edges bounding the base triangle and 3 slant edges going up to the apex. <br />\\)\\(E = 6\\)\\(.</li><li><strong>Vertices (V):</strong> It has 3 corners at the base and 1 apex corner at the top. <br />\\)\\(V = 4\\)\\(.</li></ul><p>Checking Euler's formula: \\)\\(V - E + F = 4 - 6 + 4 = 2\\).</p></div>",
    "hint": "",
    "options": [
      {
        "text": "\\(F = 4, E = 6, V = 4\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(F = 4, E = 4, V = 6\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(F = 5, E = 8, V = 5\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(F = 5, E = 6, V = 5\\)",
        "imageUrl": ""
      }
    ],
    "requiresManualGrading": false,
    "updatedAt": {
      "_seconds": 1784357705,
      "_nanoseconds": 881000000
    },
    "isNew": false,
    "question": "Find the number of faces (\\(F\\)), edges (\\(E\\)) and vertices (\\(V\\)) of the triangular pyramid (tetrahedron) shown below:\n\n<div style=\"text-align: center; margin: 16px 0; display: flex; justify-content: center;\">\n  <svg viewBox=\"0 0 130 150\" xmlns=\"http://www.w3.org/2000/svg\" style=\"width: 100%; max-width: 120px; height: auto; background-color: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; box-shadow: 0 1px 3px rgba(0,0,0,0.02);\">\n  <defs>\n    <pattern id=\"grid\" width=\"16\" height=\"16\" patternUnits=\"userSpaceOnUse\">\n      <path d=\"M 16 0 L 0 0 0 16\" fill=\"none\" stroke=\"#f1f5f9\" stroke-width=\"1.2\" />\n    </pattern>\n  </defs>\n  <rect width=\"100%\" height=\"100%\" fill=\"url(#grid)\" />\n  \n  <!-- Tetrahedron -->\n  <line x1=\"20\" y1=\"110\" x2=\"90\" y2=\"100\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"4\" stroke-linejoin=\"round\" stroke-linecap=\"round\" />\n  <polygon points=\"55,30 20,110 65,120\" stroke=\"#0f172a\" stroke-width=\"2.5\" stroke-linejoin=\"round\" stroke-linecap=\"round\" fill=\"#e2e8f0\" />\n  <polygon points=\"55,30 65,120 90,100\" stroke=\"#0f172a\" stroke-width=\"2.5\" stroke-linejoin=\"round\" stroke-linecap=\"round\" fill=\"#cbd5e1\" />\n  <line x1=\"20\" y1=\"110\" x2=\"65\" y2=\"120\" stroke=\"#0f172a\" stroke-width=\"2.5\" stroke-linejoin=\"round\" stroke-linecap=\"round\" />\n\n</svg>\n</div>",
    "solutionSteps": [
      {
        "explanation": "Identify what the question is asking and note the given information. Choose the appropriate method (calculate, simplify, convert, or list elements).",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "Carry out the calculation or algebraic rearrangement step by step. Watch signs, place value, and order of operations.",
        "workingOut": "<div style=\"text-align: left;\"><p>Let's count the features of a triangular pyramid (tetrahedron):</p><ul><li><strong>Faces (F):</strong> It has 4 triangular faces (1 base + 3 sides). <br> \\(F = 4\\).</li><li><strong>Edges (E):</strong> It has 3 edges on the triangular base and 3 slanted edges. <br> \\(E = 6\\).</li><li><strong>Vertices (V):</strong> It has 3 corners on the base and 1 apex vertex. <br> \\(V = 4\\).</li></ul><p>Notice that Euler's formula holds true: \\(V - E + F = 4 - 6 + 4 = 2\\).</p></div>",
        "graphData": null
      },
      {
        "explanation": "State the final simplified answer and match it to the correct option.",
        "workingOut": "F = 4, E = 6, V = 4",
        "graphData": null
      }
    ]
  },
  {
    "id": "FOUcpbqIUgjOBIS0FpMe",
    "chapterId": "y7-20",
    "chapterTitle": "Chapter 20: Three-dimensional solids",
    "topicId": "y7-20a",
    "topicCode": "20A",
    "topicTitle": "Polyhedra",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "createdAt": "2026-05-18T08:28:42.127Z",
    "answer": "0",
    "solution": "<div style=\"text-align: left;\"><p>Let's count the features of this right triangular prism:</p><ul><li><strong>Faces (F):</strong> It has 2 triangular bases (top and bottom) and 3 rectangular sides. <br />\\(F = 5\\)\\(.</li><li><strong>Edges (E):</strong> It has 3 edges on the bottom triangle, 3 on the top triangle, and 3 vertical edges. <br />\\)\\(E = 9\\)\\(.</li><li><strong>Vertices (V):</strong> It has 3 corner points on the bottom base and 3 on the top base. <br />\\)\\(V = 6\\)\\(.</li></ul><p>Checking Euler's formula: \\)\\(V - E + F = 6 - 9 + 5 = 2\\).</p></div>",
    "hint": "",
    "options": [
      {
        "text": "\\(F = 5, E = 9, V = 6\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(F = 5, E = 6, V = 9\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(F = 6, E = 9, V = 5\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(F = 4, E = 6, V = 4\\)",
        "imageUrl": ""
      }
    ],
    "requiresManualGrading": false,
    "updatedAt": {
      "_seconds": 1784357705,
      "_nanoseconds": 881000000
    },
    "isNew": false,
    "question": "Find the number of faces (\\(F\\)), edges (\\(E\\)) and vertices (\\(V\\)) of the right triangular prism shown below:\n\n<div style=\"text-align: center; margin: 16px 0; display: flex; justify-content: center;\">\n  <svg viewBox=\"0 0 130 150\" xmlns=\"http://www.w3.org/2000/svg\" style=\"width: 100%; max-width: 110px; height: auto; background-color: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; box-shadow: 0 1px 3px rgba(0,0,0,0.02);\">\n  <defs>\n    <pattern id=\"grid\" width=\"16\" height=\"16\" patternUnits=\"userSpaceOnUse\">\n      <path d=\"M 16 0 L 0 0 0 16\" fill=\"none\" stroke=\"#f1f5f9\" stroke-width=\"1.2\" />\n    </pattern>\n  </defs>\n  <rect width=\"100%\" height=\"100%\" fill=\"url(#grid)\" />\n  \n  <!-- Right Triangular Prism -->\n  <!-- Hidden Back Edges -->\n  <line x1=\"25\" y1=\"105\" x2=\"60\" y2=\"85\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"4\" stroke-linejoin=\"round\" stroke-linecap=\"round\" />\n  <line x1=\"60\" y1=\"85\" x2=\"60\" y2=\"25\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"4\" stroke-linejoin=\"round\" stroke-linecap=\"round\" />\n  <line x1=\"60\" y1=\"85\" x2=\"110\" y2=\"85\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"4\" stroke-linejoin=\"round\" stroke-linecap=\"round\" />\n\n  <!-- Faces -->\n  <polygon points=\"25,45 25,105 75,105\" stroke=\"#0f172a\" stroke-width=\"2.5\" stroke-linejoin=\"round\" stroke-linecap=\"round\" fill=\"#94a3b8\" /> <!-- Front Triangle -->\n  <polygon points=\"25,45 75,105 110,85 60,25\" stroke=\"#0f172a\" stroke-width=\"2.5\" stroke-linejoin=\"round\" stroke-linecap=\"round\" fill=\"#cbd5e1\" /> <!-- Top Slanted Rectangle -->\n  \n  <!-- Outer borders -->\n  <line x1=\"25\" y1=\"45\" x2=\"60\" y2=\"25\" stroke=\"#0f172a\" stroke-width=\"2.5\" stroke-linejoin=\"round\" stroke-linecap=\"round\" />\n  <line x1=\"60\" y1=\"25\" x2=\"110\" y2=\"85\" stroke=\"#0f172a\" stroke-width=\"2.5\" stroke-linejoin=\"round\" stroke-linecap=\"round\" />\n  <line x1=\"110\" y1=\"85\" x2=\"75\" y2=\"105\" stroke=\"#0f172a\" stroke-width=\"2.5\" stroke-linejoin=\"round\" stroke-linecap=\"round\" />\n\n</svg>\n</div>",
    "solutionSteps": [
      {
        "explanation": "Identify what the question is asking and note the given information. Choose the appropriate method (calculate, simplify, convert, or list elements).",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "Carry out the calculation or algebraic rearrangement step by step. Watch signs, place value, and order of operations.",
        "workingOut": "<div style=\"text-align: left;\"><p>Let's count the features of this right triangular prism:</p><ul><li><strong>Faces (F):</strong> It has 2 triangular bases (top and bottom) and 3 rectangular sides. <br />\\(F = 5\\).</li><li><strong>Edges (E):</strong> It has 3 edges on the bottom triangle, 3 on the top triangle, and 3 vertical edges. <br />\\(E = 9\\).</li><li><strong>Vertices (V):</strong> It has 3 corner points on the bottom base and 3 on the top base. <br />\\(V = 6\\).</li></ul><p>Checking Euler's formula: \\(V - E + F = 6 - 9 + 5 = 2\\).</p></div>",
        "graphData": null
      },
      {
        "explanation": "State the final simplified answer and match it to the correct option.",
        "workingOut": "F = 5, E = 9, V = 6",
        "graphData": null
      }
    ]
  },
  {
    "id": "aBuzYSXQxy1GI3jzUHdl",
    "chapterId": "y7-20",
    "chapterTitle": "Chapter 20: Three-dimensional solids",
    "topicId": "y7-20a",
    "topicCode": "20A",
    "topicTitle": "Polyhedra",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "createdAt": "2026-05-18T08:28:42.127Z",
    "answer": "0",
    "solution": "<div style=\"text-align: left;\"><p>Let's count the features of this pentagonal pyramid:</p><ul><li><strong>Faces (F):</strong> It has 1 pentagonal base and 5 triangular sides meeting at the top. <br />\\(F = 6\\)\\(.</li><li><strong>Edges (E):</strong> It has 5 edges on the base pentagon and 5 slant edges meeting at the top. <br />\\)\\(E = 10\\)\\(.</li><li><strong>Vertices (V):</strong> It has 5 corners around the base pentagon and 1 apex corner at the top. <br />\\)\\(V = 6\\)\\(.</li></ul><p>Checking Euler's formula: \\)\\(V - E + F = 6 - 10 + 6 = 2\\).</p></div>",
    "hint": "",
    "options": [
      {
        "text": "\\(F = 6, E = 10, V = 6\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(F = 6, E = 6, V = 10\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(F = 5, E = 10, V = 5\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(F = 7, E = 12, V = 7\\)",
        "imageUrl": ""
      }
    ],
    "requiresManualGrading": false,
    "updatedAt": {
      "_seconds": 1784357705,
      "_nanoseconds": 881000000
    },
    "isNew": false,
    "question": "Find the number of faces (\\(F\\)), edges (\\(E\\)) and vertices (\\(V\\)) of the pentagonal pyramid shown below:\n\n<div style=\"text-align: center; margin: 16px 0; display: flex; justify-content: center;\">\n  <svg viewBox=\"0 0 130 150\" xmlns=\"http://www.w3.org/2000/svg\" style=\"width: 100%; max-width: 120px; height: auto; background-color: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; box-shadow: 0 1px 3px rgba(0,0,0,0.02);\">\n  <defs>\n    <pattern id=\"grid\" width=\"16\" height=\"16\" patternUnits=\"userSpaceOnUse\">\n      <path d=\"M 16 0 L 0 0 0 16\" fill=\"none\" stroke=\"#f1f5f9\" stroke-width=\"1.2\" />\n    </pattern>\n  </defs>\n  <rect width=\"100%\" height=\"100%\" fill=\"url(#grid)\" />\n  \n  <!-- Pentagonal Pyramid -->\n  <line x1=\"20\" y1=\"105\" x2=\"45\" y2=\"90\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"4\" stroke-linejoin=\"round\" stroke-linecap=\"round\" />\n  <line x1=\"100\" y1=\"95\" x2=\"45\" y2=\"90\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"4\" stroke-linejoin=\"round\" stroke-linecap=\"round\" />\n  <line x1=\"60\" y1=\"30\" x2=\"45\" y2=\"90\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"4\" stroke-linejoin=\"round\" stroke-linecap=\"round\" />\n  <polygon points=\"60,30 20,105 55,120\" stroke=\"#0f172a\" stroke-width=\"2.5\" stroke-linejoin=\"round\" stroke-linecap=\"round\" fill=\"#f1f5f9\" />\n  <polygon points=\"60,30 55,120 90,115\" stroke=\"#0f172a\" stroke-width=\"2.5\" stroke-linejoin=\"round\" stroke-linecap=\"round\" fill=\"#e2e8f0\" />\n  <polygon points=\"60,30 90,115 100,95\" stroke=\"#0f172a\" stroke-width=\"2.5\" stroke-linejoin=\"round\" stroke-linecap=\"round\" fill=\"#cbd5e1\" />\n  <line x1=\"20\" y1=\"105\" x2=\"55\" y2=\"120\" stroke=\"#0f172a\" stroke-width=\"2.5\" stroke-linejoin=\"round\" stroke-linecap=\"round\" />\n  <line x1=\"55\" y1=\"120\" x2=\"90\" y2=\"115\" stroke=\"#0f172a\" stroke-width=\"2.5\" stroke-linejoin=\"round\" stroke-linecap=\"round\" />\n  <line x1=\"90\" y1=\"115\" x2=\"100\" y2=\"95\" stroke=\"#0f172a\" stroke-width=\"2.5\" stroke-linejoin=\"round\" stroke-linecap=\"round\" />\n\n</svg>\n</div>",
    "solutionSteps": [
      {
        "explanation": "Identify what the question is asking and note the given information. Choose the appropriate method (calculate, simplify, convert, or list elements).",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "Carry out the calculation or algebraic rearrangement step by step. Watch signs, place value, and order of operations.",
        "workingOut": "<div style=\"text-align: left;\"><p>Let's count the features of the pentagonal pyramid:</p><ul><li><strong>Faces (F):</strong> It has 6 faces (1 pentagonal base + 5 triangular sides). <br> \\(F = 6\\).</li><li><strong>Edges (E):</strong> It has 5 edges on the base and 5 slanted edges. <br> \\(E = 10\\).</li><li><strong>Vertices (V):</strong> It has 5 corners on the base and 1 apex vertex. <br> \\(V = 6\\).</li></ul><p>Notice that Euler's formula holds true: \\(V - E + F = 6 - 10 + 6 = 2\\).</p></div>",
        "graphData": null
      },
      {
        "explanation": "State the final simplified answer and match it to the correct option.",
        "workingOut": "F = 6, E = 10, V = 6",
        "graphData": null
      }
    ]
  },
  {
    "id": "gYW84ugbPXo3yUw7GGUv",
    "chapterId": "y7-20",
    "chapterTitle": "Chapter 20: Three-dimensional solids",
    "topicId": "y7-20a",
    "topicCode": "20A",
    "topicTitle": "Polyhedra",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isActive": true,
    "isManual": true,
    "solution": "<div style=\"text-align: left;\"><p>Let's analyze each shape based on the definition of a <strong>polyhedron</strong>:</p><ul><li><strong>Shape D (Hollow rectangular block with compartments):</strong> Although it has internal cut-outs, every single surface is a flat rectangle, and all boundaries are straight lines. Thus, Shape D **is a polyhedron**.</li><li><strong>Shape E (L-shaped block):</strong> All faces are flat polygons (L-shapes or rectangles) and all edges are straight. Thus, Shape E **is a polyhedron**.</li><li><strong>Shape F (Cylinder):</strong> It has a curved cylindrical lateral face. Since it contains a curved surface, Shape F **is not a polyhedron**.</li></ul><p>Therefore, Shapes D and E are polyhedra.</p></div>",
    "createdAt": "2026-05-18T08:28:42.127Z",
    "answer": "0",
    "hint": "",
    "options": [
      {
        "text": "Shapes D and E are polyhedra",
        "imageUrl": ""
      },
      {
        "text": "Only Shape E is a polyhedron",
        "imageUrl": ""
      },
      {
        "text": "Shapes E and F are polyhedra",
        "imageUrl": ""
      },
      {
        "text": "All three shapes are polyhedra",
        "imageUrl": ""
      }
    ],
    "requiresManualGrading": false,
    "updatedAt": {
      "_seconds": 1784357705,
      "_nanoseconds": 881000000
    },
    "isNew": false,
    "question": "Determine which of the following shapes are <strong>polyhedra</strong> (solids bounded by flat polygonal faces, showing no curved surfaces):\n\n<div style=\"display: flex; justify-content: center; gap: 16px; margin: 16px 0; flex-wrap: wrap;\">\n  <div style=\"border: 1px solid #e2e8f0; padding: 12px; border-radius: 8px; background: white; display: flex; flex-direction: column; align-items: center; justify-content: center;\">\n    <svg viewBox=\"0 0 130 150\" xmlns=\"http://www.w3.org/2000/svg\" style=\"width: 100%; max-width: 110px; height: auto; background-color: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; box-shadow: 0 1px 3px rgba(0,0,0,0.02);\">\n  <defs>\n    <pattern id=\"grid\" width=\"16\" height=\"16\" patternUnits=\"userSpaceOnUse\">\n      <path d=\"M 16 0 L 0 0 0 16\" fill=\"none\" stroke=\"#f1f5f9\" stroke-width=\"1.2\" />\n    </pattern>\n  </defs>\n  <rect width=\"100%\" height=\"100%\" fill=\"url(#grid)\" />\n  \n  <!-- Regular Solid Rectangular Block (Removed middle partition lines) -->\n  <polygon points=\"20,70 50,45 105,45 75,70\" stroke=\"#0f172a\" stroke-width=\"2.5\" stroke-linejoin=\"round\" stroke-linecap=\"round\" fill=\"#cbd5e1\" />\n  <polygon points=\"20,70 75,70 75,130 20,130\" stroke=\"#0f172a\" stroke-width=\"2.5\" stroke-linejoin=\"round\" stroke-linecap=\"round\" fill=\"#94a3b8\" />\n  <polygon points=\"75,70 105,45 105,105 75,130\" stroke=\"#0f172a\" stroke-width=\"2.5\" stroke-linejoin=\"round\" stroke-linecap=\"round\" fill=\"#64748b\" />\n\n</svg>\n    <div style=\"text-align: center; font-weight: bold; font-size: 13px; margin-top: 6px;\">Shape D</div>\n  </div>\n  <div style=\"border: 1px solid #e2e8f0; padding: 12px; border-radius: 8px; background: white; display: flex; flex-direction: column; align-items: center; justify-content: center;\">\n    <svg viewBox=\"0 0 130 150\" xmlns=\"http://www.w3.org/2000/svg\" style=\"width: 100%; max-width: 110px; height: auto; background-color: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; box-shadow: 0 1px 3px rgba(0,0,0,0.02);\">\n  <defs>\n    <pattern id=\"grid\" width=\"16\" height=\"16\" patternUnits=\"userSpaceOnUse\">\n      <path d=\"M 16 0 L 0 0 0 16\" fill=\"none\" stroke=\"#f1f5f9\" stroke-width=\"1.2\" />\n    </pattern>\n  </defs>\n  <rect width=\"100%\" height=\"100%\" fill=\"url(#grid)\" />\n  \n  <!-- L-shaped block in 3D Oblique Projection -->\n  <!-- Hidden Back edges -->\n  <line x1=\"20\" y1=\"130\" x2=\"45\" y2=\"110\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"4\" stroke-linejoin=\"round\" stroke-linecap=\"round\" />\n  <line x1=\"45\" y1=\"110\" x2=\"45\" y2=\"50\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"4\" stroke-linejoin=\"round\" stroke-linecap=\"round\" />\n  <line x1=\"45\" y1=\"110\" x2=\"105\" y2=\"110\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"4\" stroke-linejoin=\"round\" stroke-linecap=\"round\" />\n\n  <!-- Faces -->\n  <polygon points=\"20,70 45,50 75,50 50,70\" stroke=\"#0f172a\" stroke-width=\"2.5\" stroke-linejoin=\"round\" stroke-linecap=\"round\" fill=\"#cbd5e1\" /> <!-- Top L-step 1 -->\n  <polygon points=\"50,100 75,80 105,80 80,100\" stroke=\"#0f172a\" stroke-width=\"2.5\" stroke-linejoin=\"round\" stroke-linecap=\"round\" fill=\"#cbd5e1\" /> <!-- Top L-step 2 -->\n  <polygon points=\"50,70 75,50 75,80 50,100\" stroke=\"#0f172a\" stroke-width=\"2.5\" stroke-linejoin=\"round\" stroke-linecap=\"round\" fill=\"#64748b\" /> <!-- Inner right face -->\n  <polygon points=\"80,100 105,80 105,110 80,130\" stroke=\"#0f172a\" stroke-width=\"2.5\" stroke-linejoin=\"round\" stroke-linecap=\"round\" fill=\"#64748b\" /> <!-- Outer right face -->\n  <polygon points=\"20,130 20,70 50,70 50,100 80,100 80,130\" stroke=\"#0f172a\" stroke-width=\"2.5\" stroke-linejoin=\"round\" stroke-linecap=\"round\" fill=\"#94a3b8\" /> <!-- Front L-face -->\n  \n  <!-- Outer borders connection -->\n  <line x1=\"20\" y1=\"70\" x2=\"45\" y2=\"50\" stroke=\"#0f172a\" stroke-width=\"2.5\" stroke-linejoin=\"round\" stroke-linecap=\"round\" />\n  <line x1=\"45\" y1=\"50\" x2=\"75\" y2=\"50\" stroke=\"#0f172a\" stroke-width=\"2.5\" stroke-linejoin=\"round\" stroke-linecap=\"round\" />\n  <line x1=\"75\" y1=\"50\" x2=\"75\" y2=\"80\" stroke=\"#0f172a\" stroke-width=\"2.5\" stroke-linejoin=\"round\" stroke-linecap=\"round\" />\n  <line x1=\"75\" y1=\"80\" x2=\"105\" y2=\"80\" stroke=\"#0f172a\" stroke-width=\"2.5\" stroke-linejoin=\"round\" stroke-linecap=\"round\" />\n  <line x1=\"105\" y1=\"80\" x2=\"105\" y2=\"110\" stroke=\"#0f172a\" stroke-width=\"2.5\" stroke-linejoin=\"round\" stroke-linecap=\"round\" />\n  <line x1=\"105\" y1=\"110\" x2=\"80\" y2=\"130\" stroke=\"#0f172a\" stroke-width=\"2.5\" stroke-linejoin=\"round\" stroke-linecap=\"round\" />\n\n</svg>\n    <div style=\"text-align: center; font-weight: bold; font-size: 13px; margin-top: 6px;\">Shape E</div>\n  </div>\n  <div style=\"border: 1px solid #e2e8f0; padding: 12px; border-radius: 8px; background: white; display: flex; flex-direction: column; align-items: center; justify-content: center;\">\n    <svg viewBox=\"0 0 130 150\" xmlns=\"http://www.w3.org/2000/svg\" style=\"width: 100%; max-width: 110px; height: auto; background-color: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; box-shadow: 0 1px 3px rgba(0,0,0,0.02);\">\n  <defs>\n    <pattern id=\"grid\" width=\"16\" height=\"16\" patternUnits=\"userSpaceOnUse\">\n      <path d=\"M 16 0 L 0 0 0 16\" fill=\"none\" stroke=\"#f1f5f9\" stroke-width=\"1.2\" />\n    </pattern>\n  </defs>\n  <rect width=\"100%\" height=\"100%\" fill=\"url(#grid)\" />\n  \n  <!-- Cylinder -->\n  <path d=\"M 25,60 L 25,120 A 35,12 0 0 0 95,120 L 95,60 Z\" stroke=\"#0f172a\" stroke-width=\"2.5\" stroke-linejoin=\"round\" stroke-linecap=\"round\" fill=\"#94a3b8\" />\n  <ellipse cx=\"60\" cy=\"60\" rx=\"35\" ry=\"12\" stroke=\"#0f172a\" stroke-width=\"2.5\" stroke-linejoin=\"round\" stroke-linecap=\"round\" fill=\"#cbd5e1\" />\n  <path d=\"M 25,120 A 35,12 0 0 0 95,120\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"4\" stroke-linejoin=\"round\" stroke-linecap=\"round\" />\n\n</svg>\n    <div style=\"text-align: center; font-weight: bold; font-size: 13px; margin-top: 6px;\">Shape F</div>\n  </div>\n</div>",
    "solutionSteps": [
      {
        "explanation": "Identify what the question is asking and note the given information. Choose the appropriate method (calculate, simplify, convert, or list elements).",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "Carry out the calculation or algebraic rearrangement step by step. Watch signs, place value, and order of operations.",
        "workingOut": "<div style=\"text-align: left;\"><p>Let's analyze each shape based on the definition of a <strong>polyhedron</strong>:</p><ul><li><strong>Shape D (Hollow rectangular block with compartments):</strong> Although it has internal cut-outs, every single surface is a flat rectangle, and all boundaries are straight lines. Thus, Shape D <strong>is a polyhedron</strong>.</li><li><strong>Shape E (L-shaped block):</strong> All faces are flat polygons (L-shapes or rectangles) and all edges are straight. Thus, Shape E <strong>is a polyhedron</strong>.</li><li><strong>Shape F (Cylinder):</strong> It has a curved cylindrical lateral face. Since it contains a curved surface, Shape F <strong>is not a polyhedron</strong>.</li></ul><p>Therefore, Shapes D and E are polyhedra.</p></div>",
        "graphData": null
      },
      {
        "explanation": "State the final simplified answer and match it to the correct option.",
        "workingOut": "Shapes D and E are polyhedra",
        "graphData": null
      }
    ]
  },
  {
    "id": "jkiMfvyVa969omFCA7CS",
    "chapterId": "y7-20",
    "chapterTitle": "Chapter 20: Three-dimensional solids",
    "topicId": "y7-20a",
    "topicCode": "20A",
    "topicTitle": "Polyhedra",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "createdAt": "2026-05-18T08:28:42.127Z",
    "answer": "0",
    "solution": "<div style=\"text-align: left;\"><p>Let's count the features of this square pyramid:</p><ul><li><strong>Faces (F):</strong> It has 1 square base and 4 triangular lateral faces meeting at the apex. <br />\\(F = 5\\)\\(.</li><li><strong>Edges (E):</strong> It has 4 edges around the square base and 4 slant edges connecting to the apex. <br />\\)\\(E = 8\\)\\(.</li><li><strong>Vertices (V):</strong> It has 4 corners at the base and 1 apex corner at the top. <br />\\)\\(V = 5\\)\\(.</li></ul><p>Checking Euler's formula: \\)\\(V - E + F = 5 - 8 + 5 = 2\\).</p></div>",
    "hint": "",
    "options": [
      {
        "text": "\\(F = 5, E = 8, V = 5\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(F = 5, E = 5, V = 8\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(F = 6, E = 10, V = 6\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(F = 4, E = 6, V = 4\\)",
        "imageUrl": ""
      }
    ],
    "requiresManualGrading": false,
    "updatedAt": {
      "_seconds": 1784357705,
      "_nanoseconds": 881000000
    },
    "isNew": false,
    "question": "Find the number of faces (\\(F\\)), edges (\\(E\\)) and vertices (\\(V\\)) of the square pyramid shown below:\n\n<div style=\"text-align: center; margin: 16px 0; display: flex; justify-content: center;\">\n  <svg viewBox=\"0 0 130 150\" xmlns=\"http://www.w3.org/2000/svg\" style=\"width: 100%; max-width: 120px; height: auto; background-color: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; box-shadow: 0 1px 3px rgba(0,0,0,0.02);\">\n  <defs>\n    <pattern id=\"grid\" width=\"16\" height=\"16\" patternUnits=\"userSpaceOnUse\">\n      <path d=\"M 16 0 L 0 0 0 16\" fill=\"none\" stroke=\"#f1f5f9\" stroke-width=\"1.2\" />\n    </pattern>\n  </defs>\n  <rect width=\"100%\" height=\"100%\" fill=\"url(#grid)\" />\n  \n  <!-- Square Pyramid -->\n  <line x1=\"20\" y1=\"110\" x2=\"75\" y2=\"95\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"4\" stroke-linejoin=\"round\" stroke-linecap=\"round\" />\n  <line x1=\"110\" y1=\"110\" x2=\"75\" y2=\"95\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"4\" stroke-linejoin=\"round\" stroke-linecap=\"round\" />\n  <line x1=\"65\" y1=\"30\" x2=\"75\" y2=\"95\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"4\" stroke-linejoin=\"round\" stroke-linecap=\"round\" />\n  <polygon points=\"65,30 20,110 65,120\" stroke=\"#0f172a\" stroke-width=\"2.5\" stroke-linejoin=\"round\" stroke-linecap=\"round\" fill=\"#e2e8f0\" />\n  <polygon points=\"65,30 65,120 110,110\" stroke=\"#0f172a\" stroke-width=\"2.5\" stroke-linejoin=\"round\" stroke-linecap=\"round\" fill=\"#cbd5e1\" />\n  <line x1=\"20\" y1=\"110\" x2=\"65\" y2=\"120\" stroke=\"#0f172a\" stroke-width=\"2.5\" stroke-linejoin=\"round\" stroke-linecap=\"round\" />\n  <line x1=\"65\" y1=\"120\" x2=\"110\" y2=\"110\" stroke=\"#0f172a\" stroke-width=\"2.5\" stroke-linejoin=\"round\" stroke-linecap=\"round\" />\n\n</svg>\n</div>",
    "solutionSteps": [
      {
        "explanation": "Identify what the question is asking and note the given information. Choose the appropriate method (calculate, simplify, convert, or list elements).",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "Carry out the calculation or algebraic rearrangement step by step. Watch signs, place value, and order of operations.",
        "workingOut": "<div style=\"text-align: left;\"><p>Let's count the features of this square pyramid:</p><ul><li><strong>Faces (F):</strong> It has 1 square base and 4 triangular lateral faces meeting at the apex. <br />\\(F = 5\\).</li><li><strong>Edges (E):</strong> It has 4 edges around the square base and 4 slant edges connecting to the apex. <br />\\(E = 8\\).</li><li><strong>Vertices (V):</strong> It has 4 corners at the base and 1 apex corner at the top. <br />\\(V = 5\\).</li></ul><p>Checking Euler's formula: \\(V - E + F = 5 - 8 + 5 = 2\\).</p></div>",
        "graphData": null
      },
      {
        "explanation": "State the final simplified answer and match it to the correct option.",
        "workingOut": "F = 5, E = 8, V = 5",
        "graphData": null
      }
    ]
  },
  {
    "id": "mDl4TBZ2YDy1kcoWQyQH",
    "chapterId": "y7-20",
    "chapterTitle": "Chapter 20: Three-dimensional solids",
    "topicId": "y7-20a",
    "topicCode": "20A",
    "topicTitle": "Polyhedra",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isActive": true,
    "isManual": true,
    "solution": "<div style=\"text-align: left;\"><p>Let's analyze each shape based on the definition of a <strong>polyhedron</strong> (a 3D solid bounded only by flat polygonal faces):</p><ul><li><strong>Shape A (Slanted triangular prism):</strong> All faces are flat rectangles or triangles, and all edges are straight. Thus, Shape A **is a polyhedron**.</li><li><strong>Shape B (Cone):</strong> It has a curved lateral surface. Because not all of its faces are flat polygons, Shape B **is not a polyhedron**.</li><li><strong>Shape C (Hemisphere):</strong> It has a curved dome surface. Because it contains a curved face, Shape C **is not a polyhedron**.</li></ul><p>Therefore, only Shape A is a polyhedron.</p></div>",
    "createdAt": "2026-05-18T08:28:42.120Z",
    "answer": "0",
    "hint": "",
    "options": [
      {
        "text": "Only Shape A is a polyhedron",
        "imageUrl": ""
      },
      {
        "text": "Only Shape B is a polyhedron",
        "imageUrl": ""
      },
      {
        "text": "Shapes A and B are polyhedra",
        "imageUrl": ""
      },
      {
        "text": "All three shapes are polyhedra",
        "imageUrl": ""
      }
    ],
    "requiresManualGrading": false,
    "updatedAt": {
      "_seconds": 1784357705,
      "_nanoseconds": 881000000
    },
    "isNew": false,
    "question": "Determine which of the following shapes are <strong>polyhedra</strong> (solids bounded by flat polygonal faces, showing no curved surfaces):\n\n<div style=\"display: flex; justify-content: center; gap: 16px; margin: 16px 0; flex-wrap: wrap;\">\n  <div style=\"border: 1px solid #e2e8f0; padding: 12px; border-radius: 8px; background: white; display: flex; flex-direction: column; align-items: center; justify-content: center;\">\n    <svg viewBox=\"0 0 130 150\" xmlns=\"http://www.w3.org/2000/svg\" style=\"width: 100%; max-width: 110px; height: auto; background-color: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; box-shadow: 0 1px 3px rgba(0,0,0,0.02);\">\n  <defs>\n    <pattern id=\"grid\" width=\"16\" height=\"16\" patternUnits=\"userSpaceOnUse\">\n      <path d=\"M 16 0 L 0 0 0 16\" fill=\"none\" stroke=\"#f1f5f9\" stroke-width=\"1.2\" />\n    </pattern>\n  </defs>\n  <rect width=\"100%\" height=\"100%\" fill=\"url(#grid)\" />\n  \n  <!-- Slanted Triangular Prism -->\n  <line x1=\"20\" y1=\"125\" x2=\"90\" y2=\"110\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"4\" stroke-linejoin=\"round\" stroke-linecap=\"round\" />\n  <line x1=\"90\" y1=\"110\" x2=\"110\" y2=\"40\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"4\" stroke-linejoin=\"round\" stroke-linecap=\"round\" />\n  \n  <polygon points=\"20,125 60,130 80,60 40,55\" stroke=\"#0f172a\" stroke-width=\"2.5\" stroke-linejoin=\"round\" stroke-linecap=\"round\" fill=\"#94a3b8\" />\n  <polygon points=\"60,130 90,115 110,45 80,60\" stroke=\"#0f172a\" stroke-width=\"2.5\" stroke-linejoin=\"round\" stroke-linecap=\"round\" fill=\"#64748b\" />\n  <polygon points=\"40,55 80,60 110,45\" stroke=\"#0f172a\" stroke-width=\"2.5\" stroke-linejoin=\"round\" stroke-linecap=\"round\" fill=\"#cbd5e1\" />\n  \n  <line x1=\"20\" y1=\"125\" x2=\"60\" y2=\"130\" stroke=\"#0f172a\" stroke-width=\"2.5\" stroke-linejoin=\"round\" stroke-linecap=\"round\" />\n  <line x1=\"60\" y1=\"130\" x2=\"90\" y2=\"115\" stroke=\"#0f172a\" stroke-width=\"2.5\" stroke-linejoin=\"round\" stroke-linecap=\"round\" />\n\n</svg>\n    <div style=\"text-align: center; font-weight: bold; font-size: 13px; margin-top: 6px;\">Shape A</div>\n  </div>\n  <div style=\"border: 1px solid #e2e8f0; padding: 12px; border-radius: 8px; background: white; display: flex; flex-direction: column; align-items: center; justify-content: center;\">\n    <svg viewBox=\"0 0 130 150\" xmlns=\"http://www.w3.org/2000/svg\" style=\"width: 100%; max-width: 110px; height: auto; background-color: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; box-shadow: 0 1px 3px rgba(0,0,0,0.02);\">\n  <defs>\n    <pattern id=\"grid\" width=\"16\" height=\"16\" patternUnits=\"userSpaceOnUse\">\n      <path d=\"M 16 0 L 0 0 0 16\" fill=\"none\" stroke=\"#f1f5f9\" stroke-width=\"1.2\" />\n    </pattern>\n  </defs>\n  <rect width=\"100%\" height=\"100%\" fill=\"url(#grid)\" />\n  \n  <!-- Cone -->\n  <path d=\"M 25,110 L 60,35 L 95,110 Z\" stroke=\"#0f172a\" stroke-width=\"2.5\" stroke-linejoin=\"round\" stroke-linecap=\"round\" fill=\"#94a3b8\" />\n  <ellipse cx=\"60\" cy=\"110\" rx=\"35\" ry=\"12\" stroke=\"#0f172a\" stroke-width=\"2.5\" stroke-linejoin=\"round\" stroke-linecap=\"round\" fill=\"#cbd5e1\" />\n\n</svg>\n    <div style=\"text-align: center; font-weight: bold; font-size: 13px; margin-top: 6px;\">Shape B</div>\n  </div>\n  <div style=\"border: 1px solid #e2e8f0; padding: 12px; border-radius: 8px; background: white; display: flex; flex-direction: column; align-items: center; justify-content: center;\">\n    <svg viewBox=\"0 0 130 150\" xmlns=\"http://www.w3.org/2000/svg\" style=\"width: 100%; max-width: 110px; height: auto; background-color: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; box-shadow: 0 1px 3px rgba(0,0,0,0.02);\">\n  <defs>\n    <pattern id=\"grid\" width=\"16\" height=\"16\" patternUnits=\"userSpaceOnUse\">\n      <path d=\"M 16 0 L 0 0 0 16\" fill=\"none\" stroke=\"#f1f5f9\" stroke-width=\"1.2\" />\n    </pattern>\n  </defs>\n  <rect width=\"100%\" height=\"100%\" fill=\"url(#grid)\" />\n  \n  <!-- Hemisphere -->\n  <path d=\"M 25,80 A 35,35 0 0 1 95,80 Z\" stroke=\"#0f172a\" stroke-width=\"2.5\" stroke-linejoin=\"round\" stroke-linecap=\"round\" fill=\"#94a3b8\" />\n  <ellipse cx=\"60\" cy=\"80\" rx=\"35\" ry=\"12\" stroke=\"#0f172a\" stroke-width=\"2.5\" stroke-linejoin=\"round\" stroke-linecap=\"round\" fill=\"#cbd5e1\" />\n\n</svg>\n    <div style=\"text-align: center; font-weight: bold; font-size: 13px; margin-top: 6px;\">Shape C</div>\n  </div>\n</div>",
    "solutionSteps": [
      {
        "explanation": "Identify what the question is asking and note the given information. Choose the appropriate method (calculate, simplify, convert, or list elements).",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "Carry out the calculation or algebraic rearrangement step by step. Watch signs, place value, and order of operations.",
        "workingOut": "<div style=\"text-align: left;\"><p>Let's analyze each shape based on the definition of a <strong>polyhedron</strong> (a 3D solid bounded only by flat polygonal faces):</p><ul><li><strong>Shape A (Slanted triangular prism):</strong> All faces are flat rectangles or triangles, and all edges are straight. Thus, Shape A <strong>is a polyhedron</strong>.</li><li><strong>Shape B (Cone):</strong> It has a curved lateral surface. Because not all of its faces are flat polygons, Shape B <strong>is not a polyhedron</strong>.</li><li><strong>Shape C (Hemisphere):</strong> It has a curved dome surface. Because it contains a curved face, Shape C <strong>is not a polyhedron</strong>.</li></ul><p>Therefore, only Shape A is a polyhedron.</p></div>",
        "graphData": null
      },
      {
        "explanation": "State the final simplified answer and match it to the correct option.",
        "workingOut": "Only Shape A is a polyhedron",
        "graphData": null
      }
    ]
  },
  {
    "id": "nCKo52mDIP3LflkqCgSY",
    "chapterId": "y7-20",
    "chapterTitle": "Chapter 20: Three-dimensional solids",
    "topicId": "y7-20a",
    "topicCode": "20A",
    "topicTitle": "Polyhedra",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "solution": "<div style=\"text-align: left;\"><p>Let's analyze each shape based on the criteria for a <strong>prism</strong>:</p><ul><li><strong>Shape A (Beveled cube):</strong> One corner is cut off. Because the cross-section parallel to the top/bottom faces is not uniform, it **is not a prism**.</li><li><strong>Shape B (Curved shield-like shape):</strong> Since it has curved edges/surfaces, it is not even a polyhedron. Thus, it **is not a prism**.</li><li><strong>Shape C (Hexagonal pyramid):</strong> It tapers to a single vertex (apex). The cross-sections shrink as we move upwards, so it **is not a prism**.</li><li><strong>Shape D (Slanted triangular prism):</strong> It has two congruent, parallel triangular bases, and flat rectangular lateral faces. Since its cross-section parallel to the bases is completely uniform, it **is a prism**.</li></ul><p>Therefore, only Shape D is a prism.</p></div>",
    "createdAt": "2026-05-18T08:28:42.127Z",
    "answer": "0",
    "hint": "",
    "options": [
      {
        "text": "Only Shape D is a prism",
        "imageUrl": ""
      },
      {
        "text": "Shapes A and D are prisms",
        "imageUrl": ""
      },
      {
        "text": "Shapes C and D are prisms",
        "imageUrl": ""
      },
      {
        "text": "None of the shapes are prisms",
        "imageUrl": ""
      }
    ],
    "requiresManualGrading": false,
    "updatedAt": {
      "_seconds": 1784357705,
      "_nanoseconds": 881000000
    },
    "isNew": false,
    "question": "Determine which of the following shapes are <strong>prisms</strong> (polyhedra with two congruent, parallel bases and flat rectangular connecting sides, maintaining a uniform cross-section):\n\n<div style=\"display: flex; justify-content: center; gap: 16px; margin: 16px 0; flex-wrap: wrap;\">\n  <div style=\"border: 1px solid #e2e8f0; padding: 12px; border-radius: 8px; background: white; display: flex; flex-direction: column; align-items: center; justify-content: center;\">\n    <svg viewBox=\"0 0 130 150\" xmlns=\"http://www.w3.org/2000/svg\" style=\"width: 100%; max-width: 110px; height: auto; background-color: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; box-shadow: 0 1px 3px rgba(0,0,0,0.02);\">\n  <defs>\n    <pattern id=\"grid\" width=\"16\" height=\"16\" patternUnits=\"userSpaceOnUse\">\n      <path d=\"M 16 0 L 0 0 0 16\" fill=\"none\" stroke=\"#f1f5f9\" stroke-width=\"1.2\" />\n    </pattern>\n  </defs>\n  <rect width=\"100%\" height=\"100%\" fill=\"url(#grid)\" />\n  \n  <!-- Beveled Cube -->\n  <polygon points=\"20,80 50,50 90,50 90,70 60,80 20,80\" stroke=\"#0f172a\" stroke-width=\"2.5\" stroke-linejoin=\"round\" stroke-linecap=\"round\" fill=\"#f8fafc\" />\n  <polygon points=\"80,140 110,110 110,70 90,70 80,100\" stroke=\"#0f172a\" stroke-width=\"2.5\" stroke-linejoin=\"round\" stroke-linecap=\"round\" fill=\"#94a3b8\" />\n  <polygon points=\"20,140 80,140 80,100 60,80 20,80\" stroke=\"#0f172a\" stroke-width=\"2.5\" stroke-linejoin=\"round\" stroke-linecap=\"round\" fill=\"#e2e8f0\" />\n  <polygon points=\"60,80 90,70 80,100\" stroke=\"#0f172a\" stroke-width=\"2.5\" stroke-linejoin=\"round\" stroke-linecap=\"round\" fill=\"#fca5a5\" />\n\n</svg>\n    <div style=\"text-align: center; font-weight: bold; font-size: 13px; margin-top: 6px;\">Shape A</div>\n  </div>\n  <div style=\"border: 1px solid #e2e8f0; padding: 12px; border-radius: 8px; background: white; display: flex; flex-direction: column; align-items: center; justify-content: center;\">\n    <svg viewBox=\"0 0 130 150\" xmlns=\"http://www.w3.org/2000/svg\" style=\"width: 100%; max-width: 110px; height: auto; background-color: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; box-shadow: 0 1px 3px rgba(0,0,0,0.02);\">\n  <defs>\n    <pattern id=\"grid\" width=\"16\" height=\"16\" patternUnits=\"userSpaceOnUse\">\n      <path d=\"M 16 0 L 0 0 0 16\" fill=\"none\" stroke=\"#f1f5f9\" stroke-width=\"1.2\" />\n    </pattern>\n  </defs>\n  <rect width=\"100%\" height=\"100%\" fill=\"url(#grid)\" />\n  \n  <!-- Cylinder -->\n  <path d=\"M 25,60 L 25,120 A 35,12 0 0 0 95,120 L 95,60 Z\" stroke=\"#0f172a\" stroke-width=\"2.5\" stroke-linejoin=\"round\" stroke-linecap=\"round\" fill=\"#e2e8f0\" />\n  <ellipse cx=\"60\" cy=\"60\" rx=\"35\" ry=\"12\" stroke=\"#0f172a\" stroke-width=\"2.5\" stroke-linejoin=\"round\" stroke-linecap=\"round\" fill=\"#f8fafc\" />\n  <path d=\"M 25,120 A 35,12 0 0 0 95,120\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"4\" stroke-linejoin=\"round\" stroke-linecap=\"round\" />\n\n</svg>\n    <div style=\"text-align: center; font-weight: bold; font-size: 13px; margin-top: 6px;\">Shape B</div>\n  </div>\n  <div style=\"border: 1px solid #e2e8f0; padding: 12px; border-radius: 8px; background: white; display: flex; flex-direction: column; align-items: center; justify-content: center;\">\n    <svg viewBox=\"0 0 130 150\" xmlns=\"http://www.w3.org/2000/svg\" style=\"width: 100%; max-width: 110px; height: auto; background-color: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; box-shadow: 0 1px 3px rgba(0,0,0,0.02);\">\n  <defs>\n    <pattern id=\"grid\" width=\"16\" height=\"16\" patternUnits=\"userSpaceOnUse\">\n      <path d=\"M 16 0 L 0 0 0 16\" fill=\"none\" stroke=\"#f1f5f9\" stroke-width=\"1.2\" />\n    </pattern>\n  </defs>\n  <rect width=\"100%\" height=\"100%\" fill=\"url(#grid)\" />\n  \n  <!-- Hexagonal Pyramid -->\n  <line x1=\"20\" y1=\"110\" x2=\"40\" y2=\"95\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"4\" stroke-linejoin=\"round\" stroke-linecap=\"round\" />\n  <line x1=\"40\" y1=\"95\" x2=\"80\" y2=\"95\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"4\" stroke-linejoin=\"round\" stroke-linecap=\"round\" />\n  <line x1=\"100\" y1=\"110\" x2=\"80\" y2=\"95\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"4\" stroke-linejoin=\"round\" stroke-linecap=\"round\" />\n  <line x1=\"60\" y1=\"40\" x2=\"40\" y2=\"95\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"4\" stroke-linejoin=\"round\" stroke-linecap=\"round\" />\n  <line x1=\"60\" y1=\"40\" x2=\"80\" y2=\"95\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"4\" stroke-linejoin=\"round\" stroke-linecap=\"round\" />\n  \n  <polygon points=\"60,40 20,110 45,125\" stroke=\"#0f172a\" stroke-width=\"2.5\" stroke-linejoin=\"round\" stroke-linecap=\"round\" fill=\"#f1f5f9\" />\n  <polygon points=\"60,40 45,125 80,125\" stroke=\"#0f172a\" stroke-width=\"2.5\" stroke-linejoin=\"round\" stroke-linecap=\"round\" fill=\"#e2e8f0\" />\n  <polygon points=\"60,40 80,125 100,110\" stroke=\"#0f172a\" stroke-width=\"2.5\" stroke-linejoin=\"round\" stroke-linecap=\"round\" fill=\"#cbd5e1\" />\n  \n  <line x1=\"20\" y1=\"110\" x2=\"45\" y2=\"125\" stroke=\"#0f172a\" stroke-width=\"2.5\" stroke-linejoin=\"round\" stroke-linecap=\"round\" />\n  <line x1=\"45\" y1=\"125\" x2=\"80\" y2=\"125\" stroke=\"#0f172a\" stroke-width=\"2.5\" stroke-linejoin=\"round\" stroke-linecap=\"round\" />\n  <line x1=\"80\" y1=\"125\" x2=\"100\" y2=\"110\" stroke=\"#0f172a\" stroke-width=\"2.5\" stroke-linejoin=\"round\" stroke-linecap=\"round\" />\n\n</svg>\n    <div style=\"text-align: center; font-weight: bold; font-size: 13px; margin-top: 6px;\">Shape C</div>\n  </div>\n  <div style=\"border: 1px solid #e2e8f0; padding: 12px; border-radius: 8px; background: white; display: flex; flex-direction: column; align-items: center; justify-content: center;\">\n    <svg viewBox=\"0 0 130 150\" xmlns=\"http://www.w3.org/2000/svg\" style=\"width: 100%; max-width: 110px; height: auto; background-color: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; box-shadow: 0 1px 3px rgba(0,0,0,0.02);\">\n  <defs>\n    <pattern id=\"grid\" width=\"16\" height=\"16\" patternUnits=\"userSpaceOnUse\">\n      <path d=\"M 16 0 L 0 0 0 16\" fill=\"none\" stroke=\"#f1f5f9\" stroke-width=\"1.2\" />\n    </pattern>\n  </defs>\n  <rect width=\"100%\" height=\"100%\" fill=\"url(#grid)\" />\n  \n  <!-- Slanted Triangular Prism -->\n  <line x1=\"20\" y1=\"125\" x2=\"90\" y2=\"110\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"4\" stroke-linejoin=\"round\" stroke-linecap=\"round\" />\n  <line x1=\"90\" y1=\"110\" x2=\"110\" y2=\"40\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"4\" stroke-linejoin=\"round\" stroke-linecap=\"round\" />\n  \n  <polygon points=\"20,125 60,130 80,60 40,55\" stroke=\"#0f172a\" stroke-width=\"2.5\" stroke-linejoin=\"round\" stroke-linecap=\"round\" fill=\"#e2e8f0\" />\n  <polygon points=\"60,130 90,115 110,45 80,60\" stroke=\"#0f172a\" stroke-width=\"2.5\" stroke-linejoin=\"round\" stroke-linecap=\"round\" fill=\"#cbd5e1\" />\n  <polygon points=\"40,55 80,60 110,45\" stroke=\"#0f172a\" stroke-width=\"2.5\" stroke-linejoin=\"round\" stroke-linecap=\"round\" fill=\"#f8fafc\" />\n  \n  <line x1=\"20\" y1=\"125\" x2=\"60\" y2=\"130\" stroke=\"#0f172a\" stroke-width=\"2.5\" stroke-linejoin=\"round\" stroke-linecap=\"round\" />\n  <line x1=\"60\" y1=\"130\" x2=\"90\" y2=\"115\" stroke=\"#0f172a\" stroke-width=\"2.5\" stroke-linejoin=\"round\" stroke-linecap=\"round\" />\n\n</svg>\n    <div style=\"text-align: center; font-weight: bold; font-size: 13px; margin-top: 6px;\">Shape D</div>\n  </div>\n</div>",
    "solutionSteps": [
      {
        "explanation": "Identify what the question is asking and note the given information. Choose the appropriate method (calculate, simplify, convert, or list elements).",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "Carry out the calculation or algebraic rearrangement step by step. Watch signs, place value, and order of operations.",
        "workingOut": "<div style=\"text-align: left;\"><p>Let's analyze each shape based on the criteria for a <strong>prism</strong>:</p><ul><li><strong>Shape A (Beveled cube):</strong> One corner is cut off. Because the cross-section parallel to the top/bottom faces is not uniform, it <strong>is not a prism</strong>.</li><li><strong>Shape B (Curved shield-like shape):</strong> Since it has curved edges/surfaces, it is not even a polyhedron. Thus, it <strong>is not a prism</strong>.</li><li><strong>Shape C (Hexagonal pyramid):</strong> It tapers to a single vertex (apex). The cross-sections shrink as we move upwards, so it <strong>is not a prism</strong>.</li><li><strong>Shape D (Slanted triangular prism):</strong> It has two congruent, parallel triangular bases, and flat rectangular lateral faces. Since its cross-section parallel to the bases is completely uniform, it <strong>is a prism</strong>.</li></ul><p>Therefore, only Shape D is a prism.</p></div>",
        "graphData": null
      },
      {
        "explanation": "State the final simplified answer and match it to the correct option.",
        "workingOut": "Only Shape D is a prism",
        "graphData": null
      }
    ]
  },
  {
    "id": "noMuAGc7hT6Y0SOgvxSO",
    "chapterId": "y7-20",
    "chapterTitle": "Chapter 20: Three-dimensional solids",
    "topicId": "y7-20a",
    "topicCode": "20A",
    "topicTitle": "Polyhedra",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "hard",
    "isActive": true,
    "isManual": true,
    "createdAt": "2026-05-18T08:28:42.127Z",
    "answer": "0",
    "solution": "<div style=\"text-align: left;\"><p>Let's systematically construct the relationships for pyramids:</p><ul><li><strong>Part (a) Completed Table:</strong><ul><li><strong>Triangular (3-sided):</strong> \\(F = 3+1=4\\), \\(E = 2\\times3=6\\), \\(V = 3+1=4\\). <br />Evaluating: \\(V - E + F = 4 - 6 + 4 = 2\\).</li><li><strong>Rectangular (4-sided):</strong> \\(F = 4+1=5\\), \\(E = 2\\times4=8\\), \\(V = 4+1=5\\). <br />Evaluating: \\(V - E + F = 5 - 8 + 5 = 2\\).</li><li><strong>Pentagonal (5-sided):</strong> \\(F = 5+1=6\\), \\(E = 2\\times5=10\\), \\(V = 5+1=6\\). <br />Evaluating: \\(V - E + F = 6 - 10 + 6 = 2\\).</li><li><strong>Hexagonal (6-sided):</strong> \\(F = 6+1=7\\), \\(E = 2\\times6=12\\), \\(V = 6+1=7\\). <br />Evaluating: \\(V - E + F = 7 - 12 + 7 = 2\\).</li></ul></li><li><strong>Part (b):</strong> For each of these pyramids, the calculation \\(V - E + F\\)\\( is exactly equal to **2**.</li><li><strong>Part (c) General Formulas in terms of \\)n\\(:</strong><ul><li><strong>i. Faces (F):</strong> A pyramid has 1 polygonal base plus \\)n\\( triangular sides meeting at the top. <br />\\)\\(F = n + 1\\)\\(.</li><li><strong>ii. Edges (E):</strong> A pyramid has \\)n\\( edges around the base polygon and \\)n\\( slant edges meeting at the top. <br />\\)\\(E = 2n\\)\\(.</li><li><strong>iii. Vertices (V):</strong> A pyramid has \\)n\\( corner points on the base plus 1 apex corner point at the top. <br />\\)\\(V = n + 1\\)\\(.</li></ul></li><li><strong>Part (d) Substitution & Simplification:</strong><br />\\)\\(V - E + F = (n + 1) - (2n) + (n + 1)\\)\\(<br />\\)\\(V - E + F = n + 1 - 2n + n + 1 = 2\\)\\(.</li></ul><p>Once again, we verify that Euler's formula \\)\\(V - E + F = 2\\) holds universal for all pyramids as well!</p></div>",
    "hint": "",
    "options": [
      {
        "text": "\\((b) V - E + F = 2; (c) F = n + 1, E = 2n, V = n + 1; (d) V - E + F = (n + 1) - 2n + (n + 1) = 2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\((b) V - E + F = 2; (c) F = n + 2, E = 3n, V = n + 1; (d) V - E + F = 1\\)",
        "imageUrl": ""
      },
      {
        "text": "\\((b) V - E + F = 0; (c) F = n + 1, E = n, V = n + 1; (d) V - E + F = 0\\)",
        "imageUrl": ""
      },
      {
        "text": "\\((b) V - E + F = 2; (c) F = 2n, E = 2n, V = n + 1; (d) V - E + F = 3\\)",
        "imageUrl": ""
      }
    ],
    "requiresManualGrading": false,
    "updatedAt": {
      "_seconds": 1784357705,
      "_nanoseconds": 881000000
    },
    "isNew": false,
    "solutionSteps": [
      {
        "explanation": "Identify what the question is asking and note the given information. Choose the appropriate method (calculate, simplify, convert, or list elements).",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "Carry out the calculation or algebraic rearrangement step by step. Watch signs, place value, and order of operations.",
        "workingOut": "<div style=\"text-align: left;\"><p>Let's systematically construct the relationships for pyramids:</p><ul><li><strong>Part (a) Completed Table:</strong><ul><li><strong>Triangular (3-sided):</strong> \\(F = 3+1=4\\), \\(E = 2\\times3=6\\), \\(V = 3+1=4\\). <br />Evaluating: \\(V - E + F = 4 - 6 + 4 = 2\\).</li><li><strong>Rectangular (4-sided):</strong> \\(F = 4+1=5\\), \\(E = 2\\times4=8\\), \\(V = 4+1=5\\). <br />Evaluating: \\(V - E + F = 5 - 8 + 5 = 2\\).</li><li><strong>Pentagonal (5-sided):</strong> \\(F = 5+1=6\\), \\(E = 2\\times5=10\\), \\(V = 5+1=6\\). <br />Evaluating: \\(V - E + F = 6 - 10 + 6 = 2\\).</li><li><strong>Hexagonal (6-sided):</strong> \\(F = 6+1=7\\), \\(E = 2\\times6=12\\), \\(V = 6+1=7\\). <br />Evaluating: \\(V - E + F = 7 - 12 + 7 = 2\\).</li></ul></li><li><strong>Part (b):</strong> For each of these pyramids, the calculation \\(V - E + F\\) is exactly equal to <strong>2</strong>.</li><li><strong>Part (c) General Formulas in terms of \\(n\\):</strong><ul><li><strong>i. Faces (F):</strong> A pyramid has 1 polygonal base plus \\(n\\) triangular sides meeting at the top. <br />\\(F = n + 1\\).</li><li><strong>ii. Edges (E):</strong> A pyramid has \\(n\\) edges around the base polygon and \\(n\\) slant edges meeting at the top. <br />\\(E = 2n\\).</li><li><strong>iii. Vertices (V):</strong> A pyramid has \\(n\\) corner points on the base plus 1 apex corner point at the top. <br />\\(V = n + 1\\).</li></ul></li><li><strong>Part (d) Substitution & Simplification:</strong><br />\\(V - E + F = (n + 1) - (2n) + (n + 1)\\)<br />\\(V - E + F = n + 1 - 2n + n + 1 = 2\\).</li></ul><p>Once again, we verify that Euler's formula \\(V - E + F = 2\\) holds universal for all pyramids as well!</p></div>",
        "graphData": null
      },
      {
        "explanation": "State the final simplified answer and match it to the correct option.",
        "workingOut": "(b) V - E + F = 2; (c) F = n + 1, E = 2n, V = n + 1; (d) V - E + F = (n + 1) - 2n + (n + 1) = 2",
        "graphData": null
      }
    ],
    "question": "For a pyramid with an \\(n\\)-sided polygonal base, complete the features table and solve parts (b) to (d):\n\n<div style=\"text-align: center; margin: 20px 0; display: flex; justify-content: center;\"><svg viewBox=\"0 0 520 160\" xmlns=\"http://www.w3.org/2000/svg\" style=\"width: 100%; max-width: 480px; height: auto; background-color: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; box-shadow: 0 1px 3px rgba(0,0,0,0.02);\">\n  <defs>\n    <pattern id=\"grid\" width=\"16\" height=\"16\" patternUnits=\"userSpaceOnUse\">\n      <path d=\"M 16 0 L 0 0 0 16\" fill=\"none\" stroke=\"#f1f5f9\" stroke-width=\"1.2\" />\n    </pattern>\n  </defs>\n  <rect width=\"100%\" height=\"100%\" fill=\"url(#grid)\" />\n\n  <!-- 1. Triangular Pyramid -->\n  <g transform=\"translate(0, 0)\">\n    <line x1=\"25\" y1=\"110\" x2=\"105\" y2=\"100\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"4\" stroke-linejoin=\"round\" stroke-linecap=\"round\" />\n    <polygon points=\"65,30 25,110 75,120\" stroke=\"#0f172a\" stroke-width=\"2.5\" stroke-linejoin=\"round\" stroke-linecap=\"round\" fill=\"#fca5a5\" />\n    <polygon points=\"65,30 75,120 105,100\" stroke=\"#0f172a\" stroke-width=\"2.5\" stroke-linejoin=\"round\" stroke-linecap=\"round\" fill=\"#ef4444\" />\n    <line x1=\"25\" y1=\"110\" x2=\"75\" y2=\"120\" stroke=\"#0f172a\" stroke-width=\"2.5\" stroke-linejoin=\"round\" stroke-linecap=\"round\" />\n    <text x=\"65\" y=\"145\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#0f172a\" font-family=\"system-ui\">Triangular</text>\n  </g>\n\n  <!-- 2. Rectangular Pyramid -->\n  <g transform=\"translate(130, 0)\">\n    <line x1=\"20\" y1=\"110\" x2=\"75\" y2=\"95\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"4\" stroke-linejoin=\"round\" stroke-linecap=\"round\" />\n    <line x1=\"110\" y1=\"110\" x2=\"75\" y2=\"95\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"4\" stroke-linejoin=\"round\" stroke-linecap=\"round\" />\n    <line x1=\"65\" y1=\"30\" x2=\"75\" y2=\"95\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"4\" stroke-linejoin=\"round\" stroke-linecap=\"round\" />\n    <polygon points=\"65,30 20,110 65,120\" stroke=\"#0f172a\" stroke-width=\"2.5\" stroke-linejoin=\"round\" stroke-linecap=\"round\" fill=\"#fca5a5\" />\n    <polygon points=\"65,30 65,120 110,110\" stroke=\"#0f172a\" stroke-width=\"2.5\" stroke-linejoin=\"round\" stroke-linecap=\"round\" fill=\"#ef4444\" />\n    <line x1=\"20\" y1=\"110\" x2=\"65\" y2=\"120\" stroke=\"#0f172a\" stroke-width=\"2.5\" stroke-linejoin=\"round\" stroke-linecap=\"round\" />\n    <line x1=\"65\" y1=\"120\" x2=\"110\" y2=\"110\" stroke=\"#0f172a\" stroke-width=\"2.5\" stroke-linejoin=\"round\" stroke-linecap=\"round\" />\n    <text x=\"65\" y=\"145\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#0f172a\" font-family=\"system-ui\">Rectangular</text>\n  </g>\n\n  <!-- 3. Pentagonal Pyramid -->\n  <g transform=\"translate(260, 0)\">\n    <line x1=\"20\" y1=\"105\" x2=\"45\" y2=\"90\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"4\" stroke-linejoin=\"round\" stroke-linecap=\"round\" />\n    <line x1=\"100\" y1=\"95\" x2=\"45\" y2=\"90\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"4\" stroke-linejoin=\"round\" stroke-linecap=\"round\" />\n    <line x1=\"60\" y1=\"30\" x2=\"45\" y2=\"90\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"4\" stroke-linejoin=\"round\" stroke-linecap=\"round\" />\n    <polygon points=\"60,30 20,105 55,120\" stroke=\"#0f172a\" stroke-width=\"2.5\" stroke-linejoin=\"round\" stroke-linecap=\"round\" fill=\"#fee2e2\" />\n    <polygon points=\"60,30 55,120 90,115\" stroke=\"#0f172a\" stroke-width=\"2.5\" stroke-linejoin=\"round\" stroke-linecap=\"round\" fill=\"#fca5a5\" />\n    <polygon points=\"60,30 90,115 100,95\" stroke=\"#0f172a\" stroke-width=\"2.5\" stroke-linejoin=\"round\" stroke-linecap=\"round\" fill=\"#ef4444\" />\n    <line x1=\"20\" y1=\"105\" x2=\"55\" y2=\"120\" stroke=\"#0f172a\" stroke-width=\"2.5\" stroke-linejoin=\"round\" stroke-linecap=\"round\" />\n    <line x1=\"55\" y1=\"120\" x2=\"90\" y2=\"115\" stroke=\"#0f172a\" stroke-width=\"2.5\" stroke-linejoin=\"round\" stroke-linecap=\"round\" />\n    <line x1=\"90\" y1=\"115\" x2=\"100\" y2=\"95\" stroke=\"#0f172a\" stroke-width=\"2.5\" stroke-linejoin=\"round\" stroke-linecap=\"round\" />\n    <text x=\"60\" y=\"145\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#0f172a\" font-family=\"system-ui\">Pentagonal</text>\n  </g>\n\n  <!-- 4. Hexagonal Pyramid -->\n  <g transform=\"translate(390, 0)\">\n    <line x1=\"20\" y1=\"105\" x2=\"40\" y2=\"90\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"4\" stroke-linejoin=\"round\" stroke-linecap=\"round\" />\n    <line x1=\"40\" y1=\"90\" x2=\"80\" y2=\"90\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"4\" stroke-linejoin=\"round\" stroke-linecap=\"round\" />\n    <line x1=\"100\" y1=\"105\" x2=\"80\" y2=\"90\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"4\" stroke-linejoin=\"round\" stroke-linecap=\"round\" />\n    <line x1=\"60\" y1=\"30\" x2=\"40\" y2=\"90\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"4\" stroke-linejoin=\"round\" stroke-linecap=\"round\" />\n    <line x1=\"60\" y1=\"30\" x2=\"80\" y2=\"90\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"4\" stroke-linejoin=\"round\" stroke-linecap=\"round\" />\n    <polygon points=\"60,30 20,105 40,120\" stroke=\"#0f172a\" stroke-width=\"2.5\" stroke-linejoin=\"round\" stroke-linecap=\"round\" fill=\"#fee2e2\" />\n    <polygon points=\"60,30 40,120 80,120\" stroke=\"#0f172a\" stroke-width=\"2.5\" stroke-linejoin=\"round\" stroke-linecap=\"round\" fill=\"#fca5a5\" />\n    <polygon points=\"60,30 80,120 100,105\" stroke=\"#0f172a\" stroke-width=\"2.5\" stroke-linejoin=\"round\" stroke-linecap=\"round\" fill=\"#ef4444\" />\n    <line x1=\"20\" y1=\"105\" x2=\"40\" y2=\"120\" stroke=\"#0f172a\" stroke-width=\"2.5\" stroke-linejoin=\"round\" stroke-linecap=\"round\" />\n    <line x1=\"40\" y1=\"120\" x2=\"80\" y2=\"120\" stroke=\"#0f172a\" stroke-width=\"2.5\" stroke-linejoin=\"round\" stroke-linecap=\"round\" />\n    <line x1=\"80\" y1=\"120\" x2=\"100\" y2=\"105\" stroke=\"#0f172a\" stroke-width=\"2.5\" stroke-linejoin=\"round\" stroke-linecap=\"round\" />\n    <text x=\"60\" y=\"145\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#0f172a\" font-family=\"system-ui\">Hexagonal</text>\n  </g>\n</svg></div>\n\n<div style=\"display: flex; justify-content: center; margin: 16px 0;\">\n  <table style=\"width: 100%; max-width: 500px; border-collapse: collapse; font-family: inherit; font-size: 14px; text-align: center; border: 1px solid #cbd5e1; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);\">\n    <thead>\n      <tr style=\"background: #dc2626; color: white;\">\n        <th style=\"padding: 10px 12px; font-weight: 600; border: 1px solid #cbd5e1;\">Type of base</th>\n        <th style=\"padding: 10px 12px; font-weight: 600; border: 1px solid #cbd5e1;\">Faces (F)</th>\n        <th style=\"padding: 10px 12px; font-weight: 600; border: 1px solid #cbd5e1;\">Edges (E)</th>\n        <th style=\"padding: 10px 12px; font-weight: 600; border: 1px solid #cbd5e1;\">Vertices (V)</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr style=\"background: #f8fafc;\"><td style=\"padding: 8px 12px; border: 1px solid #cbd5e1; font-weight: 500; text-align: left;\">Triangular (3-sided)</td><td style=\"padding: 8px 12px; border: 1px solid #cbd5e1; color: #475569;\">?</td><td style=\"padding: 8px 12px; border: 1px solid #cbd5e1; color: #475569;\">?</td><td style=\"padding: 8px 12px; border: 1px solid #cbd5e1; color: #475569;\">?</td></tr>\n      <tr><td style=\"padding: 8px 12px; border: 1px solid #cbd5e1; font-weight: 500; text-align: left;\">Rectangular (4-sided)</td><td style=\"padding: 8px 12px; border: 1px solid #cbd5e1; color: #475569;\">?</td><td style=\"padding: 8px 12px; border: 1px solid #cbd5e1; color: #475569;\">?</td><td style=\"padding: 8px 12px; border: 1px solid #cbd5e1; color: #475569;\">?</td></tr>\n      <tr style=\"background: #f8fafc;\"><td style=\"padding: 8px 12px; border: 1px solid #cbd5e1; font-weight: 500; text-align: left;\">Pentagonal (5-sided)</td><td style=\"padding: 8px 12px; border: 1px solid #cbd5e1; color: #475569;\">?</td><td style=\"padding: 8px 12px; border: 1px solid #cbd5e1; color: #475569;\">?</td><td style=\"padding: 8px 12px; border: 1px solid #cbd5e1; color: #475569;\">?</td></tr>\n      <tr><td style=\"padding: 8px 12px; border: 1px solid #cbd5e1; font-weight: 500; text-align: left;\">Hexagonal (6-sided)</td><td style=\"padding: 8px 12px; border: 1px solid #cbd5e1; color: #475569;\">?</td><td style=\"padding: 8px 12px; border: 1px solid #cbd5e1; color: #475569;\">?</td><td style=\"padding: 8px 12px; border: 1px solid #cbd5e1; color: #475569;\">?</td></tr>\n    </tbody>\n  </table>\n</div>\n\nAnalyze the structural characteristics and select the correct set of results for parts (b), (c), and (d):\n* **a** Complete the table above by finding the missing values for \\(F\\), \\(E\\), and \\(V\\).\n* **b** For each pyramid in the table, evaluate \\(V - E + F\\).\n* **c** If the polygonal base of a pyramid has \\(n\\) sides, find formulas in terms of \\(n\\) for:\n  * **i** the number of faces (\\(F\\))\n  * **ii** the number of edges (\\(E\\))\n  * **iii** the number of vertices (\\(V\\))\n* **d** Simplify \\(V - E + F\\) using your formulas from part (c)."
  },
  {
    "id": "wmxAxsAKLuFECkgVTxTR",
    "chapterId": "y7-20",
    "chapterTitle": "Chapter 20: Three-dimensional solids",
    "topicId": "y7-20a",
    "topicCode": "20A",
    "topicTitle": "Polyhedra",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "hard",
    "isActive": true,
    "isManual": true,
    "createdAt": "2026-05-18T08:28:42.127Z",
    "answer": "0",
    "solution": "<div style=\"text-align: left;\"><p>Let's systematically construct the relationships for prisms:</p><ul><li><strong>Part (a) Completed Table:</strong><ul><li><strong>Triangular (3-sided):</strong> \\(F = 3+2=5\\), \\(E = 3\\times3=9\\), \\(V = 2\\times3=6\\). <br />Evaluating: \\(V - E + F = 6 - 9 + 5 = 2\\).</li><li><strong>Rectangular (4-sided):</strong> \\(F = 4+2=6\\), \\(E = 3\\times4=12\\), \\(V = 2\\times4=8\\). <br />Evaluating: \\(V - E + F = 8 - 12 + 6 = 2\\).</li><li><strong>Pentagonal (5-sided):</strong> \\(F = 5+2=7\\), \\(E = 3\\times5=15\\), \\(V = 2\\times5=10\\). <br />Evaluating: \\(V - E + F = 10 - 15 + 7 = 2\\).</li><li><strong>Hexagonal (6-sided):</strong> \\(F = 6+2=8\\), \\(E = 3\\times6=18\\), \\(V = 2\\times6=12\\). <br />Evaluating: \\(V - E + F = 12 - 18 + 8 = 2\\).</li></ul></li><li><strong>Part (b):</strong> For each of these prisms, the calculation \\(V - E + F\\)\\( is exactly equal to **2**.</li><li><strong>Part (c) General Formulas in terms of \\)n\\(:</strong><ul><li><strong>i. Faces (F):</strong> A prism has 2 polygonal bases plus \\)n\\( rectangular sides. <br />\\)\\(F = n + 2\\)\\(.</li><li><strong>ii. Edges (E):</strong> A prism has \\)n\\( edges on the top base, \\)n\\( on the bottom base, and \\)n\\( vertical side edges. <br />\\)\\(E = 3n\\)\\(.</li><li><strong>iii. Vertices (V):</strong> A prism has \\)n\\( corner points on the top base and \\)n\\( on the bottom base. <br />\\)\\(V = 2n\\)\\(.</li></ul></li><li><strong>Part (d) Substitution & Simplification:</strong><br />\\)\\(V - E + F = (2n) - (3n) + (n + 2)\\)\\(<br />\\)\\(V - E + F = 2n - 3n + n + 2 = 2\\)\\(.</li></ul><p>This universal relation \\)\\(V - E + F = 2\\) is known as <strong>Euler's formula</strong>.</p></div>",
    "hint": "",
    "options": [
      {
        "text": "\\((b) V - E + F = 2; (c) F = n + 2, E = 3n, V = 2n; (d) V - E + F = 2n - 3n + (n + 2) = 2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\((b) V - E + F = 2; (c) F = 2n, E = 3n, V = n + 2; (d) V - E + F = 1\\)",
        "imageUrl": ""
      },
      {
        "text": "\\((b) V - E + F = 0; (c) F = n + 1, E = 2n, V = 2n; (d) V - E + F = 0\\)",
        "imageUrl": ""
      },
      {
        "text": "\\((b) V - E + F = 2; (c) F = n + 2, E = 2n, V = 3n; (d) V - E + F = 3\\)",
        "imageUrl": ""
      }
    ],
    "requiresManualGrading": false,
    "updatedAt": {
      "_seconds": 1784357705,
      "_nanoseconds": 881000000
    },
    "isNew": false,
    "solutionSteps": [
      {
        "explanation": "Identify what the question is asking and note the given information. Choose the appropriate method (calculate, simplify, convert, or list elements).",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "Carry out the calculation or algebraic rearrangement step by step. Watch signs, place value, and order of operations.",
        "workingOut": "<div style=\"text-align: left;\"><p>Let's systematically construct the relationships for prisms:</p><ul><li><strong>Part (a) Completed Table:</strong><ul><li><strong>Triangular (3-sided):</strong> \\(F = 3+2=5\\), \\(E = 3\\times3=9\\), \\(V = 2\\times3=6\\). <br />Evaluating: \\(V - E + F = 6 - 9 + 5 = 2\\).</li><li><strong>Rectangular (4-sided):</strong> \\(F = 4+2=6\\), \\(E = 3\\times4=12\\), \\(V = 2\\times4=8\\). <br />Evaluating: \\(V - E + F = 8 - 12 + 6 = 2\\).</li><li><strong>Pentagonal (5-sided):</strong> \\(F = 5+2=7\\), \\(E = 3\\times5=15\\), \\(V = 2\\times5=10\\). <br />Evaluating: \\(V - E + F = 10 - 15 + 7 = 2\\).</li><li><strong>Hexagonal (6-sided):</strong> \\(F = 6+2=8\\), \\(E = 3\\times6=18\\), \\(V = 2\\times6=12\\). <br />Evaluating: \\(V - E + F = 12 - 18 + 8 = 2\\).</li></ul></li><li><strong>Part (b):</strong> For each of these prisms, the calculation \\(V - E + F\\) is exactly equal to <strong>2</strong>.</li><li><strong>Part (c) General Formulas in terms of \\(n\\):</strong><ul><li><strong>i. Faces (F):</strong> A prism has 2 polygonal bases plus \\(n\\) rectangular sides. <br />\\(F = n + 2\\).</li><li><strong>ii. Edges (E):</strong> A prism has \\(n\\) edges on the top base, \\(n\\) on the bottom base, and \\(n\\) vertical side edges. <br />\\(E = 3n\\).</li><li><strong>iii. Vertices (V):</strong> A prism has \\(n\\) corner points on the top base and \\(n\\) on the bottom base. <br />\\(V = 2n\\).</li></ul></li><li><strong>Part (d) Substitution & Simplification:</strong><br />\\(V - E + F = (2n) - (3n) + (n + 2)\\)<br />\\(V - E + F = 2n - 3n + n + 2 = 2\\).</li></ul><p>This universal relation \\(V - E + F = 2\\) is known as <strong>Euler's formula</strong>.</p></div>",
        "graphData": null
      },
      {
        "explanation": "State the final simplified answer and match it to the correct option.",
        "workingOut": "(b) V - E + F = 2; (c) F = n + 2, E = 3n, V = 2n; (d) V - E + F = 2n - 3n + (n + 2) = 2",
        "graphData": null
      }
    ],
    "question": "For a prism with an \\(n\\)-sided polygonal cross-section, complete the features table and solve parts (b) to (d):\n\n<div style=\"text-align: center; margin: 20px 0; display: flex; justify-content: center;\"><svg viewBox=\"0 0 520 160\" xmlns=\"http://www.w3.org/2000/svg\" style=\"width: 100%; max-width: 480px; height: auto; background-color: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; box-shadow: 0 1px 3px rgba(0,0,0,0.02);\">\n  <defs>\n    <pattern id=\"grid\" width=\"16\" height=\"16\" patternUnits=\"userSpaceOnUse\">\n      <path d=\"M 16 0 L 0 0 0 16\" fill=\"none\" stroke=\"#f1f5f9\" stroke-width=\"1.2\" />\n    </pattern>\n  </defs>\n  <rect width=\"100%\" height=\"100%\" fill=\"url(#grid)\" />\n\n  <!-- 1. Triangular Prism -->\n  <g transform=\"translate(0, 0)\">\n    <line x1=\"20\" y1=\"120\" x2=\"90\" y2=\"105\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"4\" stroke-linejoin=\"round\" stroke-linecap=\"round\" />\n    <line x1=\"90\" y1=\"105\" x2=\"90\" y2=\"35\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"4\" stroke-linejoin=\"round\" stroke-linecap=\"round\" />\n    <polygon points=\"20,120 60,125 60,55 20,50\" stroke=\"#0f172a\" stroke-width=\"2.5\" stroke-linejoin=\"round\" stroke-linecap=\"round\" fill=\"#e2e8f0\" />\n    <polygon points=\"60,125 90,110 90,40 60,55\" stroke=\"#0f172a\" stroke-width=\"2.5\" stroke-linejoin=\"round\" stroke-linecap=\"round\" fill=\"#cbd5e1\" />\n    <polygon points=\"20,50 60,55 90,40\" stroke=\"#0f172a\" stroke-width=\"2.5\" stroke-linejoin=\"round\" stroke-linecap=\"round\" fill=\"#f8fafc\" />\n    <line x1=\"20\" y1=\"120\" x2=\"60\" y2=\"125\" stroke=\"#0f172a\" stroke-width=\"2.5\" stroke-linejoin=\"round\" stroke-linecap=\"round\" />\n    <line x1=\"60\" y1=\"125\" x2=\"90\" y2=\"110\" stroke=\"#0f172a\" stroke-width=\"2.5\" stroke-linejoin=\"round\" stroke-linecap=\"round\" />\n    <text x=\"55\" y=\"145\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#0f172a\" font-family=\"system-ui\">Triangular</text>\n  </g>\n\n  <!-- 2. Rectangular Prism -->\n  <g transform=\"translate(130, 0)\">\n    <line x1=\"20\" y1=\"120\" x2=\"55\" y2=\"110\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"4\" stroke-linejoin=\"round\" stroke-linecap=\"round\" />\n    <line x1=\"100\" y1=\"115\" x2=\"55\" y2=\"110\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"4\" stroke-linejoin=\"round\" stroke-linecap=\"round\" />\n    <line x1=\"55\" y1=\"110\" x2=\"55\" y2=\"40\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"4\" stroke-linejoin=\"round\" stroke-linecap=\"round\" />\n    <polygon points=\"20,120 65,125 65,55 20,50\" stroke=\"#0f172a\" stroke-width=\"2.5\" stroke-linejoin=\"round\" stroke-linecap=\"round\" fill=\"#e2e8f0\" />\n    <polygon points=\"65,125 100,115 100,45 65,55\" stroke=\"#0f172a\" stroke-width=\"2.5\" stroke-linejoin=\"round\" stroke-linecap=\"round\" fill=\"#cbd5e1\" />\n    <polygon points=\"20,50 65,55 100,45 55,40\" stroke=\"#0f172a\" stroke-width=\"2.5\" stroke-linejoin=\"round\" stroke-linecap=\"round\" fill=\"#f8fafc\" />\n    <line x1=\"20\" y1=\"120\" x2=\"65\" y2=\"125\" stroke=\"#0f172a\" stroke-width=\"2.5\" stroke-linejoin=\"round\" stroke-linecap=\"round\" />\n    <line x1=\"65\" y1=\"125\" x2=\"100\" y2=\"115\" stroke=\"#0f172a\" stroke-width=\"2.5\" stroke-linejoin=\"round\" stroke-linecap=\"round\" />\n    <text x=\"60\" y=\"145\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#0f172a\" font-family=\"system-ui\">Rectangular</text>\n  </g>\n\n  <!-- 3. Pentagonal Prism -->\n  <g transform=\"translate(260, 0)\">\n    <line x1=\"20\" y1=\"115\" x2=\"45\" y2=\"100\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"4\" stroke-linejoin=\"round\" stroke-linecap=\"round\" />\n    <line x1=\"95\" y1=\"105\" x2=\"45\" y2=\"100\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"4\" stroke-linejoin=\"round\" stroke-linecap=\"round\" />\n    <line x1=\"45\" y1=\"100\" x2=\"45\" y2=\"30\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"4\" stroke-linejoin=\"round\" stroke-linecap=\"round\" />\n    <polygon points=\"20,115 50,125 50,55 20,45\" stroke=\"#0f172a\" stroke-width=\"2.5\" stroke-linejoin=\"round\" stroke-linecap=\"round\" fill=\"#f1f5f9\" />\n    <polygon points=\"50,125 85,120 85,50 50,55\" stroke=\"#0f172a\" stroke-width=\"2.5\" stroke-linejoin=\"round\" stroke-linecap=\"round\" fill=\"#e2e8f0\" />\n    <polygon points=\"85,120 95,105 95,35 85,50\" stroke=\"#0f172a\" stroke-width=\"2.5\" stroke-linejoin=\"round\" stroke-linecap=\"round\" fill=\"#cbd5e1\" />\n    <polygon points=\"20,45 50,55 85,50 95,35 45,30\" stroke=\"#0f172a\" stroke-width=\"2.5\" stroke-linejoin=\"round\" stroke-linecap=\"round\" fill=\"#f8fafc\" />\n    <line x1=\"20\" y1=\"115\" x2=\"50\" y2=\"125\" stroke=\"#0f172a\" stroke-width=\"2.5\" stroke-linejoin=\"round\" stroke-linecap=\"round\" />\n    <line x1=\"50\" y1=\"125\" x2=\"85\" y2=\"120\" stroke=\"#0f172a\" stroke-width=\"2.5\" stroke-linejoin=\"round\" stroke-linecap=\"round\" />\n    <line x1=\"85\" y1=\"120\" x2=\"95\" y2=\"105\" stroke=\"#0f172a\" stroke-width=\"2.5\" stroke-linejoin=\"round\" stroke-linecap=\"round\" />\n    <text x=\"58\" y=\"145\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#0f172a\" font-family=\"system-ui\">Pentagonal</text>\n  </g>\n\n  <!-- 4. Hexagonal Prism -->\n  <g transform=\"translate(390, 0)\">\n    <line x1=\"20\" y1=\"115\" x2=\"40\" y2=\"105\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"4\" stroke-linejoin=\"round\" stroke-linecap=\"round\" />\n    <line x1=\"40\" y1=\"105\" x2=\"75\" y2=\"105\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"4\" stroke-linejoin=\"round\" stroke-linecap=\"round\" />\n    <line x1=\"95\" y1=\"115\" x2=\"75\" y2=\"105\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"4\" stroke-linejoin=\"round\" stroke-linecap=\"round\" />\n    <line x1=\"40\" y1=\"105\" x2=\"40\" y2=\"35\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"4\" stroke-linejoin=\"round\" stroke-linecap=\"round\" />\n    <line x1=\"75\" y1=\"105\" x2=\"75\" y2=\"35\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"4\" stroke-linejoin=\"round\" stroke-linecap=\"round\" />\n    <polygon points=\"20,115 40,125 40,55 20,45\" stroke=\"#0f172a\" stroke-width=\"2.5\" stroke-linejoin=\"round\" stroke-linecap=\"round\" fill=\"#f1f5f9\" />\n    <polygon points=\"40,125 75,125 75,55 40,55\" stroke=\"#0f172a\" stroke-width=\"2.5\" stroke-linejoin=\"round\" stroke-linecap=\"round\" fill=\"#e2e8f0\" />\n    <polygon points=\"75,125 95,115 95,45 75,55\" stroke=\"#0f172a\" stroke-width=\"2.5\" stroke-linejoin=\"round\" stroke-linecap=\"round\" fill=\"#cbd5e1\" />\n    <polygon points=\"20,45 40,55 75,55 95,45 75,35 40,35\" stroke=\"#0f172a\" stroke-width=\"2.5\" stroke-linejoin=\"round\" stroke-linecap=\"round\" fill=\"#f8fafc\" />\n    <line x1=\"20\" y1=\"115\" x2=\"40\" y2=\"125\" stroke=\"#0f172a\" stroke-width=\"2.5\" stroke-linejoin=\"round\" stroke-linecap=\"round\" />\n    <line x1=\"40\" y1=\"125\" x2=\"75\" y2=\"125\" stroke=\"#0f172a\" stroke-width=\"2.5\" stroke-linejoin=\"round\" stroke-linecap=\"round\" />\n    <line x1=\"75\" y1=\"125\" x2=\"95\" y2=\"115\" stroke=\"#0f172a\" stroke-width=\"2.5\" stroke-linejoin=\"round\" stroke-linecap=\"round\" />\n    <text x=\"58\" y=\"145\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#0f172a\" font-family=\"system-ui\">Hexagonal</text>\n  </g>\n</svg></div>\n\n<div style=\"display: flex; justify-content: center; margin: 16px 0;\">\n  <table style=\"width: 100%; max-width: 500px; border-collapse: collapse; font-family: inherit; font-size: 14px; text-align: center; border: 1px solid #cbd5e1; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);\">\n    <thead>\n      <tr style=\"background: #2563eb; color: white;\">\n        <th style=\"padding: 10px 12px; font-weight: 600; border: 1px solid #cbd5e1;\">Type of cross-section</th>\n        <th style=\"padding: 10px 12px; font-weight: 600; border: 1px solid #cbd5e1;\">Faces (F)</th>\n        <th style=\"padding: 10px 12px; font-weight: 600; border: 1px solid #cbd5e1;\">Edges (E)</th>\n        <th style=\"padding: 10px 12px; font-weight: 600; border: 1px solid #cbd5e1;\">Vertices (V)</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr style=\"background: #f8fafc;\"><td style=\"padding: 8px 12px; border: 1px solid #cbd5e1; font-weight: 500; text-align: left;\">Triangular (3-sided)</td><td style=\"padding: 8px 12px; border: 1px solid #cbd5e1; color: #475569;\">?</td><td style=\"padding: 8px 12px; border: 1px solid #cbd5e1; color: #475569;\">?</td><td style=\"padding: 8px 12px; border: 1px solid #cbd5e1; color: #475569;\">?</td></tr>\n      <tr><td style=\"padding: 8px 12px; border: 1px solid #cbd5e1; font-weight: 500; text-align: left;\">Rectangular (4-sided)</td><td style=\"padding: 8px 12px; border: 1px solid #cbd5e1; color: #475569;\">?</td><td style=\"padding: 8px 12px; border: 1px solid #cbd5e1; color: #475569;\">?</td><td style=\"padding: 8px 12px; border: 1px solid #cbd5e1; color: #475569;\">?</td></tr>\n      <tr style=\"background: #f8fafc;\"><td style=\"padding: 8px 12px; border: 1px solid #cbd5e1; font-weight: 500; text-align: left;\">Pentagonal (5-sided)</td><td style=\"padding: 8px 12px; border: 1px solid #cbd5e1; color: #475569;\">?</td><td style=\"padding: 8px 12px; border: 1px solid #cbd5e1; color: #475569;\">?</td><td style=\"padding: 8px 12px; border: 1px solid #cbd5e1; color: #475569;\">?</td></tr>\n      <tr><td style=\"padding: 8px 12px; border: 1px solid #cbd5e1; font-weight: 500; text-align: left;\">Hexagonal (6-sided)</td><td style=\"padding: 8px 12px; border: 1px solid #cbd5e1; color: #475569;\">?</td><td style=\"padding: 8px 12px; border: 1px solid #cbd5e1; color: #475569;\">?</td><td style=\"padding: 8px 12px; border: 1px solid #cbd5e1; color: #475569;\">?</td></tr>\n    </tbody>\n  </table>\n</div>\n\nAnalyze the structural characteristics and select the correct set of results for parts (b), (c), and (d):\n* **a** Complete the table above by finding the missing values for \\(F\\), \\(E\\), and \\(V\\).\n* **b** For each prism in the table, evaluate \\(V - E + F\\).\n* **c** If the polygonal cross-section of a prism has \\(n\\) sides, find formulas in terms of \\(n\\) for:\n  * **i** the number of faces (\\(F\\))\n  * **ii** the number of edges (\\(E\\))\n  * **iii** the number of vertices (\\(V\\))\n* **d** Simplify \\(V - E + F\\) using your formulas from part (c)."
  }
];

export const importYear7Ch20A = async (forceReset = false) => {
  console.log('[Ch20A Year 7 Import] STARTING PHYSICAL SYNC...');
  let importedCount = 0;
  try {
    const qRef = collection(db, 'questions');
    
    if (forceReset) {
      console.log('Force reset enabled. Deleting existing Y7 Ch20 (20a) questions...');
      const topicsToDelete = ['y7-20a'];
      for (const tId of topicsToDelete) {
        const existingSnap = await getDocs(query(qRef, where('topicId', '==', tId)));
        for (const doc of existingSnap.docs) {
          await deleteDoc(doc.ref);
        }
      }
      console.log('Deleted existing Ch19 topic questions.');
    }

    const existingQuestions = new Set();
    const topicsToCheck = ['y7-20a'];
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
