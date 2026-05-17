import { db } from '../firebase/config.js';
import { collection, addDoc, getDocs, query, where, deleteDoc } from 'firebase/firestore';

export const allQuestions = [
  {
    "chapterId": "y7-12",
    "chapterTitle": "Chapter 12: Triangles and constructions",
    "topicId": "y7-12a",
    "topicCode": "12A",
    "topicTitle": "Angles in triangles",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isActive": true,
    "isManual": true,
    "question": "What is the sum of the three interior angles of any triangle?",
    "options": [
      "$180^\\circ$",
      "$90^\\circ$",
      "$360^\\circ$",
      "$270^\\circ$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n    <p><strong>Interior Angle Sum Theorem:</strong></p>\n    <p>The sum of the interior angles of any triangle is always constant and equals exactly $180^\\circ$.</p>\n    <p>$$\\angle A + \\angle B + \\angle C = 180^\\circ$$</p>\n  </div>",
    "createdAt": "2026-05-17T13:07:42.972Z"
  },
  {
    "chapterId": "y7-12",
    "chapterTitle": "Chapter 12: Triangles and constructions",
    "topicId": "y7-12a",
    "topicCode": "12A",
    "topicTitle": "Angles in triangles",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isActive": true,
    "isManual": true,
    "question": "According to the exterior angle theorem, the exterior angle of a triangle is equal to...",
    "options": [
      "The sum of the two opposite interior angles.",
      "The difference between the two opposite interior angles.",
      "The sum of all three interior angles.",
      "Exactly $180^\\circ$ minus the opposite interior angle."
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n    <p><strong>Exterior Angle Theorem:</strong></p>\n    <p>An exterior angle of a triangle is equal to the sum of the two opposite (non-adjacent) interior angles.</p>\n    <p>$$\\text{Exterior Angle} = \\text{Interior Angle 1} + \\text{Interior Angle 2}$$</p>\n  </div>",
    "createdAt": "2026-05-17T13:07:42.974Z"
  },
  {
    "chapterId": "y7-12",
    "chapterTitle": "Chapter 12: Triangles and constructions",
    "topicId": "y7-12a",
    "topicCode": "12A",
    "topicTitle": "Angles in triangles",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isActive": true,
    "isManual": true,
    "question": "Use the interior angle sum of a triangle to find the value of $\\alpha$ in the diagram below:\n  <div style=\"display: flex; justify-content: center; margin: 16px 0;\">\n    <svg viewBox=\"10 10 190 130\" width=\"100%\" style=\"max-width: 280px; height: auto;\" xmlns=\"http://www.w3.org/2000/svg\">\n      <!-- Grid/Background (Optional subtle style) -->\n      <defs>\n        <marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"5\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n          <path d=\"M 0 0 L 10 5 L 0 10 z\" fill=\"#475569\" />\n        </marker>\n      </defs>\n      \n      <!-- Triangle Path -->\n      <polygon points=\"100,30 30,120 180,120\" stroke=\"#1e293b\" stroke-width=\"2.5\" fill=\"#f8fafc\" stroke-linejoin=\"round\" />\n      \n      \n      \n\n      <!-- Angle Indicators (Arcs) -->\n      <!-- Vertex A Arc -->\n      <!-- Vertex B Arc -->\n      <!-- Vertex C Arc -->\n\n      <!-- Text Labels for Vertices -->\n      <text x=\"100\" y=\"20\" font-family=\"Outfit, Inter, sans-serif\" font-size=\"14\" font-weight=\"bold\" fill=\"#0f172a\" text-anchor=\"middle\">A</text>\n      <text x=\"18\" y=\"136\" font-family=\"Outfit, Inter, sans-serif\" font-size=\"14\" font-weight=\"bold\" fill=\"#0f172a\" text-anchor=\"middle\">B</text>\n      <text x=\"192\" y=\"136\" font-family=\"Outfit, Inter, sans-serif\" font-size=\"14\" font-weight=\"bold\" fill=\"#0f172a\" text-anchor=\"middle\">C</text>\n\n      <!-- Angle Values -->\n      <text x=\"100\" y=\"55\" font-family=\"Outfit, Inter, sans-serif\" font-size=\"13\" fill=\"#2563eb\" font-weight=\"600\" text-anchor=\"middle\">\\alpha</text>\n      <text x=\"55\" y=\"110\" font-family=\"Outfit, Inter, sans-serif\" font-size=\"13\" fill=\"#2563eb\" font-weight=\"600\" text-anchor=\"middle\">75^\\circ</text>\n      <text x=\"155\" y=\"110\" font-family=\"Outfit, Inter, sans-serif\" font-size=\"13\" fill=\"#2563eb\" font-weight=\"600\" text-anchor=\"middle\">35^\\circ</text>\n    </svg>\n  </div>",
    "options": [
      "$70^\\circ$",
      "$80^\\circ$",
      "$60^\\circ$",
      "$90^\\circ$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n    <p><strong>Step-by-step breakdown:</strong></p>\n    <p><strong>Step 1:</strong> The sum of all interior angles of a triangle is $180^\\circ$:</p>\n    <p>$$\\alpha + 75^\\circ + 35^\\circ = 180^\\circ$$</p>\n    <p><strong>Step 2:</strong> Add the known interior angles:</p>\n    <p>$$75^\\circ + 35^\\circ = 110^\\circ$$</p>\n    <p><strong>Step 3:</strong> Subtract this sum from $180^\\circ$ to find $\\alpha$:</p>\n    <p>$$\\alpha = 180^\\circ - 110^\\circ = 70^\\circ$$</p>\n  </div>",
    "createdAt": "2026-05-17T13:07:42.974Z"
  },
  {
    "chapterId": "y7-12",
    "chapterTitle": "Chapter 12: Triangles and constructions",
    "topicId": "y7-12a",
    "topicCode": "12A",
    "topicTitle": "Angles in triangles",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "Use the interior angle sum of a triangle to find the value of $\\beta$ in the diagram below:\n  <div style=\"display: flex; justify-content: center; margin: 16px 0;\">\n    <svg viewBox=\"0 20 240 110\" width=\"100%\" style=\"max-width: 280px; height: auto;\" xmlns=\"http://www.w3.org/2000/svg\">\n      <!-- Grid/Background (Optional subtle style) -->\n      <defs>\n        <marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"5\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n          <path d=\"M 0 0 L 10 5 L 0 10 z\" fill=\"#475569\" />\n        </marker>\n      </defs>\n      \n      <!-- Triangle Path -->\n      <polygon points=\"120,40 20,110 220,110\" stroke=\"#1e293b\" stroke-width=\"2.5\" fill=\"#f8fafc\" stroke-linejoin=\"round\" />\n      \n      \n      \n\n      <!-- Angle Indicators (Arcs) -->\n      <!-- Vertex A Arc -->\n      <!-- Vertex B Arc -->\n      <!-- Vertex C Arc -->\n\n      <!-- Text Labels for Vertices -->\n      <text x=\"120\" y=\"30\" font-family=\"Outfit, Inter, sans-serif\" font-size=\"14\" font-weight=\"bold\" fill=\"#0f172a\" text-anchor=\"middle\">I</text>\n      <text x=\"8\" y=\"126\" font-family=\"Outfit, Inter, sans-serif\" font-size=\"14\" font-weight=\"bold\" fill=\"#0f172a\" text-anchor=\"middle\">B</text>\n      <text x=\"232\" y=\"126\" font-family=\"Outfit, Inter, sans-serif\" font-size=\"14\" font-weight=\"bold\" fill=\"#0f172a\" text-anchor=\"middle\">T</text>\n\n      <!-- Angle Values -->\n      <text x=\"120\" y=\"65\" font-family=\"Outfit, Inter, sans-serif\" font-size=\"13\" fill=\"#2563eb\" font-weight=\"600\" text-anchor=\"middle\">20^\\circ</text>\n      <text x=\"45\" y=\"100\" font-family=\"Outfit, Inter, sans-serif\" font-size=\"13\" fill=\"#2563eb\" font-weight=\"600\" text-anchor=\"middle\">\\beta</text>\n      <text x=\"195\" y=\"100\" font-family=\"Outfit, Inter, sans-serif\" font-size=\"13\" fill=\"#2563eb\" font-weight=\"600\" text-anchor=\"middle\">20^\\circ</text>\n    </svg>\n  </div>",
    "options": [
      "$140^\\circ$",
      "$130^\\circ$",
      "$150^\\circ$",
      "$120^\\circ$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n    <p><strong>Step-by-step breakdown:</strong></p>\n    <p><strong>Step 1:</strong> The sum of all interior angles of a triangle is $180^\\circ$:</p>\n    <p>$$\\beta + 20^\\circ + 20^\\circ = 180^\\circ$$</p>\n    <p><strong>Step 2:</strong> Add the known interior angles:</p>\n    <p>$$20^\\circ + 20^\\circ = 40^\\circ$$</p>\n    <p><strong>Step 3:</strong> Subtract this sum from $180^\\circ$ to find $\\beta$:</p>\n    <p>$$\\beta = 180^\\circ - 40^\\circ = 140^\\circ$$</p>\n  </div>",
    "createdAt": "2026-05-17T13:07:42.974Z"
  },
  {
    "chapterId": "y7-12",
    "chapterTitle": "Chapter 12: Triangles and constructions",
    "topicId": "y7-12a",
    "topicCode": "12A",
    "topicTitle": "Angles in triangles",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isActive": true,
    "isManual": true,
    "question": "Find the value of $\\gamma$ in the right-angled triangle below:\n  <div style=\"display: flex; justify-content: center; margin: 16px 0;\">\n    <svg viewBox=\"10 10 160 130\" width=\"100%\" style=\"max-width: 280px; height: auto;\" xmlns=\"http://www.w3.org/2000/svg\">\n      <!-- Grid/Background (Optional subtle style) -->\n      <defs>\n        <marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"5\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n          <path d=\"M 0 0 L 10 5 L 0 10 z\" fill=\"#475569\" />\n        </marker>\n      </defs>\n      \n      <!-- Triangle Path -->\n      <polygon points=\"30,30 150,120 30,120\" stroke=\"#1e293b\" stroke-width=\"2.5\" fill=\"#f8fafc\" stroke-linejoin=\"round\" />\n      \n      <path d=\"M 42 120 L 42 108 L 30 108\" stroke=\"#475569\" stroke-width=\"1.5\" fill=\"none\" />\n      \n\n      <!-- Angle Indicators (Arcs) -->\n      <!-- Vertex A Arc -->\n      <!-- Vertex B Arc -->\n      <!-- Vertex C Arc -->\n\n      <!-- Text Labels for Vertices -->\n      <text x=\"30\" y=\"20\" font-family=\"Outfit, Inter, sans-serif\" font-size=\"14\" font-weight=\"bold\" fill=\"#0f172a\" text-anchor=\"middle\">C</text>\n      <text x=\"138\" y=\"136\" font-family=\"Outfit, Inter, sans-serif\" font-size=\"14\" font-weight=\"bold\" fill=\"#0f172a\" text-anchor=\"middle\">U</text>\n      <text x=\"42\" y=\"136\" font-family=\"Outfit, Inter, sans-serif\" font-size=\"14\" font-weight=\"bold\" fill=\"#0f172a\" text-anchor=\"middle\">T</text>\n\n      <!-- Angle Values -->\n      <text x=\"30\" y=\"55\" font-family=\"Outfit, Inter, sans-serif\" font-size=\"13\" fill=\"#2563eb\" font-weight=\"600\" text-anchor=\"middle\">\\gamma</text>\n      <text x=\"175\" y=\"110\" font-family=\"Outfit, Inter, sans-serif\" font-size=\"13\" fill=\"#2563eb\" font-weight=\"600\" text-anchor=\"middle\">40^\\circ</text>\n      \n    </svg>\n  </div>",
    "options": [
      "$50^\\circ$",
      "$40^\\circ$",
      "$60^\\circ$",
      "$45^\\circ$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n    <p><strong>Step-by-step breakdown:</strong></p>\n    <p><strong>Step 1:</strong> A right angle (at vertex $T$) is exactly $90^\\circ$:</p>\n    <p>$$\\gamma + 40^\\circ + 90^\\circ = 180^\\circ$$</p>\n    <p><strong>Step 2:</strong> Add the known interior angles:</p>\n    <p>$$40^\\circ + 90^\\circ = 130^\\circ$$</p>\n    <p><strong>Step 3:</strong> Subtract this sum from $180^\\circ$ to find $\\gamma$:</p>\n    <p>$$\\gamma = 180^\\circ - 130^\\circ = 50^\\circ$$</p>\n  </div>",
    "createdAt": "2026-05-17T13:07:42.974Z"
  },
  {
    "chapterId": "y7-12",
    "chapterTitle": "Chapter 12: Triangles and constructions",
    "topicId": "y7-12a",
    "topicCode": "12A",
    "topicTitle": "Angles in triangles",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isActive": true,
    "isManual": true,
    "question": "Find the value of $\\theta$ in the triangle below:\n  <div style=\"display: flex; justify-content: center; margin: 16px 0;\">\n    <svg viewBox=\"20 10 160 130\" width=\"100%\" style=\"max-width: 280px; height: auto;\" xmlns=\"http://www.w3.org/2000/svg\">\n      <!-- Grid/Background (Optional subtle style) -->\n      <defs>\n        <marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"5\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n          <path d=\"M 0 0 L 10 5 L 0 10 z\" fill=\"#475569\" />\n        </marker>\n      </defs>\n      \n      <!-- Triangle Path -->\n      <polygon points=\"100,30 40,120 160,120\" stroke=\"#1e293b\" stroke-width=\"2.5\" fill=\"#f8fafc\" stroke-linejoin=\"round\" />\n      \n      \n      \n\n      <!-- Angle Indicators (Arcs) -->\n      <!-- Vertex A Arc -->\n      <!-- Vertex B Arc -->\n      <!-- Vertex C Arc -->\n\n      <!-- Text Labels for Vertices -->\n      <text x=\"100\" y=\"20\" font-family=\"Outfit, Inter, sans-serif\" font-size=\"14\" font-weight=\"bold\" fill=\"#0f172a\" text-anchor=\"middle\">J</text>\n      <text x=\"28\" y=\"136\" font-family=\"Outfit, Inter, sans-serif\" font-size=\"14\" font-weight=\"bold\" fill=\"#0f172a\" text-anchor=\"middle\">A</text>\n      <text x=\"172\" y=\"136\" font-family=\"Outfit, Inter, sans-serif\" font-size=\"14\" font-weight=\"bold\" fill=\"#0f172a\" text-anchor=\"middle\">B</text>\n\n      <!-- Angle Values -->\n      <text x=\"100\" y=\"55\" font-family=\"Outfit, Inter, sans-serif\" font-size=\"13\" fill=\"#2563eb\" font-weight=\"600\" text-anchor=\"middle\">\\theta</text>\n      <text x=\"65\" y=\"110\" font-family=\"Outfit, Inter, sans-serif\" font-size=\"13\" fill=\"#2563eb\" font-weight=\"600\" text-anchor=\"middle\">80^\\circ</text>\n      <text x=\"135\" y=\"110\" font-family=\"Outfit, Inter, sans-serif\" font-size=\"13\" fill=\"#2563eb\" font-weight=\"600\" text-anchor=\"middle\">82^\\circ</text>\n    </svg>\n  </div>",
    "options": [
      "$18^\\circ$",
      "$28^\\circ$",
      "$8^\\circ$",
      "$38^\\circ$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n    <p><strong>Step-by-step breakdown:</strong></p>\n    <p><strong>Step 1:</strong> The sum of all interior angles of a triangle is $180^\\circ$:</p>\n    <p>$$\\theta + 80^\\circ + 82^\\circ = 180^\\circ$$</p>\n    <p><strong>Step 2:</strong> Add the known interior angles:</p>\n    <p>$$80^\\circ + 82^\\circ = 162^\\circ$$</p>\n    <p><strong>Step 3:</strong> Subtract from $180^\\circ$:</p>\n    <p>$$\\theta = 180^\\circ - 162^\\circ = 18^\\circ$$</p>\n  </div>",
    "createdAt": "2026-05-17T13:07:42.974Z"
  },
  {
    "chapterId": "y7-12",
    "chapterTitle": "Chapter 12: Triangles and constructions",
    "topicId": "y7-12a",
    "topicCode": "12A",
    "topicTitle": "Angles in triangles",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "hard",
    "isActive": true,
    "isManual": true,
    "question": "In the diagram below, lines $QP$ and $MN$ are parallel. Find the value of $\\alpha$.\n  <div style=\"display: flex; justify-content: center; margin: 16px 0;\">\n    <svg viewBox=\"0 0 200 160\" width=\"100%\" style=\"max-width: 250px; height: auto;\" xmlns=\"http://www.w3.org/2000/svg\">\n      <!-- Parallel arrowheads -->\n      <polygon points=\"30,120 170,120 100,70 30,20 170,20\" stroke=\"#1e293b\" stroke-width=\"2\" fill=\"none\"/>\n      <text x=\"30\" y=\"15\" font-size=\"12\" font-weight=\"bold\">M</text>\n      <text x=\"170\" y=\"15\" font-size=\"12\" font-weight=\"bold\">N</text>\n      <text x=\"100\" y=\"65\" font-size=\"12\" font-weight=\"bold\">O</text>\n      <text x=\"30\" y=\"135\" font-size=\"12\" font-weight=\"bold\">Q</text>\n      <text x=\"170\" y=\"135\" font-size=\"12\" font-weight=\"bold\">P</text>\n      \n      <!-- Labeled angles -->\n      <text x=\"40\" y=\"115\" font-size=\"11\" fill=\"#2563eb\" font-weight=\"bold\">40°</text>\n      <text x=\"145\" y=\"115\" font-size=\"11\" fill=\"#2563eb\" font-weight=\"bold\">75°</text>\n      <text x=\"45\" y=\"35\" font-size=\"11\" fill=\"#2563eb\" font-weight=\"bold\">α</text>\n    </svg>\n  </div>",
    "options": [
      "$40^\\circ$",
      "$75^\\circ$",
      "$65^\\circ$",
      "$80^\\circ$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n    <p><strong>Step-by-step breakdown:</strong></p>\n    <p><strong>Step 1:</strong> Identify the alternate interior angles formed by the parallel lines $MN \\parallel QP$ and transversal line $MQ$:</p>\n    <p>$$\\angle NMO = \\angle OQP$$</p>\n    <p><strong>Step 2:</strong> Since $\\angle OQP = 40^\\circ$, we have:</p>\n    <p>$$\\alpha = 40^\\circ$$</p>\n  </div>",
    "createdAt": "2026-05-17T13:07:42.974Z"
  },
  {
    "chapterId": "y7-12",
    "chapterTitle": "Chapter 12: Triangles and constructions",
    "topicId": "y7-12a",
    "topicCode": "12A",
    "topicTitle": "Angles in triangles",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "In the diagram below, two lines intersect at $K$. Find the value of $\\beta$.\n  <div style=\"display: flex; justify-content: center; margin: 16px 0;\">\n    <svg viewBox=\"0 0 200 140\" width=\"100%\" style=\"max-width: 250px; height: auto;\" xmlns=\"http://www.w3.org/2000/svg\">\n      <line x1=\"20\" y1=\"20\" x2=\"180\" y2=\"120\" stroke=\"#1e293b\" stroke-width=\"2\" />\n      <line x1=\"20\" y1=\"120\" x2=\"180\" y2=\"20\" stroke=\"#1e293b\" stroke-width=\"2\" />\n      <line x1=\"20\" y1=\"20\" x2=\"20\" y2=\"120\" stroke=\"#1e293b\" stroke-width=\"2\" />\n      <line x1=\"180\" y1=\"20\" x2=\"180\" y2=\"120\" stroke=\"#1e293b\" stroke-width=\"2\" />\n      <text x=\"15\" y=\"15\" font-size=\"12\" font-weight=\"bold\">B</text>\n      <text x=\"15\" y=\"135\" font-size=\"12\" font-weight=\"bold\">R</text>\n      <text x=\"185\" y=\"15\" font-size=\"12\" font-weight=\"bold\">T</text>\n      <text x=\"185\" y=\"135\" font-size=\"12\" font-weight=\"bold\">E</text>\n      <text x=\"105\" y=\"65\" font-size=\"12\" font-weight=\"bold\">K</text>\n      \n      <text x=\"30\" y=\"35\" font-size=\"11\" fill=\"#2563eb\" font-weight=\"bold\">β</text>\n      <text x=\"30\" y=\"110\" font-size=\"11\" fill=\"#2563eb\" font-weight=\"bold\">35°</text>\n      <text x=\"110\" y=\"82\" font-size=\"11\" fill=\"#2563eb\" font-weight=\"bold\">105°</text>\n    </svg>\n  </div>",
    "options": [
      "$40^\\circ$",
      "$45^\\circ$",
      "$35^\\circ$",
      "$50^\\circ$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n    <p><strong>Step-by-step breakdown:</strong></p>\n    <p><strong>Step 1:</strong> Identify the vertically opposite angles at the intersection $K$:</p>\n    <p>$$\\angle BKR = \\angle TKE = 105^\\circ$$</p>\n    <p><strong>Step 2:</strong> In triangle $BKR$, the sum of the angles is $180^\\circ$:</p>\n    <p>$$\\beta + 35^\\circ + 105^\\circ = 180^\\circ$$</p>\n    <p><strong>Step 3:</strong> Solve for $\\beta$:</p>\n    <p>$$\\beta + 140^\\circ = 180^\\circ \\implies \\beta = 40^\\circ$$</p>\n  </div>",
    "createdAt": "2026-05-17T13:07:42.974Z"
  },
  {
    "chapterId": "y7-12",
    "chapterTitle": "Chapter 12: Triangles and constructions",
    "topicId": "y7-12a",
    "topicCode": "12A",
    "topicTitle": "Angles in triangles",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isActive": true,
    "isManual": true,
    "question": "Use the exterior angle theorem to find the value of $\\alpha$ in the diagram below:\n  <div style=\"display: flex; justify-content: center; margin: 16px 0;\">\n    <svg viewBox=\"20 10 160 130\" width=\"100%\" style=\"max-width: 280px; height: auto;\" xmlns=\"http://www.w3.org/2000/svg\">\n      <!-- Grid/Background (Optional subtle style) -->\n      <defs>\n        <marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"5\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n          <path d=\"M 0 0 L 10 5 L 0 10 z\" fill=\"#475569\" />\n        </marker>\n      </defs>\n      \n      <!-- Triangle Path -->\n      <polygon points=\"100,30 40,120 160,120\" stroke=\"#1e293b\" stroke-width=\"2.5\" fill=\"#f8fafc\" stroke-linejoin=\"round\" />\n      \n      \n      <line x1=\"160\" y1=\"120\" x2=\"220\" y2=\"120\" stroke=\"#1e293b\" stroke-width=\"2\" /><text x=\"180\" y=\"110\" font-family=\"Outfit\" font-size=\"13\" font-weight=\"bold\" fill=\"#2563eb\">\\alpha</text><text x=\"225\" y=\"135\" font-size=\"12\" font-weight=\"bold\">D</text>\n\n      <!-- Angle Indicators (Arcs) -->\n      <!-- Vertex A Arc -->\n      <!-- Vertex B Arc -->\n      <!-- Vertex C Arc -->\n\n      <!-- Text Labels for Vertices -->\n      <text x=\"100\" y=\"20\" font-family=\"Outfit, Inter, sans-serif\" font-size=\"14\" font-weight=\"bold\" fill=\"#0f172a\" text-anchor=\"middle\">A</text>\n      <text x=\"28\" y=\"136\" font-family=\"Outfit, Inter, sans-serif\" font-size=\"14\" font-weight=\"bold\" fill=\"#0f172a\" text-anchor=\"middle\">B</text>\n      <text x=\"172\" y=\"136\" font-family=\"Outfit, Inter, sans-serif\" font-size=\"14\" font-weight=\"bold\" fill=\"#0f172a\" text-anchor=\"middle\">C</text>\n\n      <!-- Angle Values -->\n      <text x=\"100\" y=\"55\" font-family=\"Outfit, Inter, sans-serif\" font-size=\"13\" fill=\"#2563eb\" font-weight=\"600\" text-anchor=\"middle\">65^\\circ</text>\n      <text x=\"65\" y=\"110\" font-family=\"Outfit, Inter, sans-serif\" font-size=\"13\" fill=\"#2563eb\" font-weight=\"600\" text-anchor=\"middle\">55^\\circ</text>\n      \n    </svg>\n  </div>",
    "options": [
      "$120^\\circ$",
      "$110^\\circ$",
      "$130^\\circ$",
      "$115^\\circ$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n    <p><strong>Step-by-step breakdown:</strong></p>\n    <p><strong>Step 1:</strong> By the exterior angle theorem, the exterior angle $\\alpha$ at vertex $C$ is equal to the sum of the two opposite interior angles:</p>\n    <p>$$\\alpha = \\angle A + \\angle B$$</p>\n    <p><strong>Step 2:</strong> Add the given values:</p>\n    <p>$$\\alpha = 65^\\circ + 55^\\circ = 120^\\circ$$</p>\n  </div>",
    "createdAt": "2026-05-17T13:07:42.974Z"
  },
  {
    "chapterId": "y7-12",
    "chapterTitle": "Chapter 12: Triangles and constructions",
    "topicId": "y7-12a",
    "topicCode": "12A",
    "topicTitle": "Angles in triangles",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isActive": true,
    "isManual": true,
    "question": "Find the value of the exterior angle $\\beta$ in the diagram below:\n  <div style=\"display: flex; justify-content: center; margin: 16px 0;\">\n    <svg viewBox=\"0 20 200 110\" width=\"100%\" style=\"max-width: 280px; height: auto;\" xmlns=\"http://www.w3.org/2000/svg\">\n      <!-- Grid/Background (Optional subtle style) -->\n      <defs>\n        <marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"5\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n          <path d=\"M 0 0 L 10 5 L 0 10 z\" fill=\"#475569\" />\n        </marker>\n      </defs>\n      \n      <!-- Triangle Path -->\n      <polygon points=\"120,40 20,110 180,110\" stroke=\"#1e293b\" stroke-width=\"2.5\" fill=\"#f8fafc\" stroke-linejoin=\"round\" />\n      \n      \n      <line x1=\"20\" y1=\"110\" x2=\"200\" y2=\"70\" stroke=\"#1e293b\" stroke-width=\"2\" /><text x=\"130\" y=\"90\" font-family=\"Outfit\" font-size=\"13\" font-weight=\"bold\" fill=\"#2563eb\">\\beta</text>\n\n      <!-- Angle Indicators (Arcs) -->\n      <!-- Vertex A Arc -->\n      <!-- Vertex B Arc -->\n      <!-- Vertex C Arc -->\n\n      <!-- Text Labels for Vertices -->\n      <text x=\"120\" y=\"30\" font-family=\"Outfit, Inter, sans-serif\" font-size=\"14\" font-weight=\"bold\" fill=\"#0f172a\" text-anchor=\"middle\">E</text>\n      <text x=\"8\" y=\"126\" font-family=\"Outfit, Inter, sans-serif\" font-size=\"14\" font-weight=\"bold\" fill=\"#0f172a\" text-anchor=\"middle\">T</text>\n      <text x=\"192\" y=\"126\" font-family=\"Outfit, Inter, sans-serif\" font-size=\"14\" font-weight=\"bold\" fill=\"#0f172a\" text-anchor=\"middle\">R</text>\n\n      <!-- Angle Values -->\n      <text x=\"120\" y=\"65\" font-family=\"Outfit, Inter, sans-serif\" font-size=\"13\" fill=\"#2563eb\" font-weight=\"600\" text-anchor=\"middle\">15^\\circ</text>\n      <text x=\"45\" y=\"100\" font-family=\"Outfit, Inter, sans-serif\" font-size=\"13\" fill=\"#2563eb\" font-weight=\"600\" text-anchor=\"middle\">25^\\circ</text>\n      \n    </svg>\n  </div>",
    "options": [
      "$40^\\circ$",
      "$35^\\circ$",
      "$45^\\circ$",
      "$50^\\circ$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n    <p><strong>Step-by-step breakdown:</strong></p>\n    <p><strong>Step 1:</strong> According to the exterior angle theorem, the exterior angle is the sum of the two opposite interior angles:</p>\n    <p>$$\\beta = 15^\\circ + 25^\\circ$$</p>\n    <p><strong>Step 2:</strong> Calculate the sum:</p>\n    <p>$$\\beta = 40^\\circ$$</p>\n  </div>",
    "createdAt": "2026-05-17T13:07:42.974Z"
  },
  {
    "chapterId": "y7-12",
    "chapterTitle": "Chapter 12: Triangles and constructions",
    "topicId": "y7-12a",
    "topicCode": "12A",
    "topicTitle": "Angles in triangles",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "Use the exterior angle theorem to find the value of $\\gamma$ in the diagram below:\n  <div style=\"display: flex; justify-content: center; margin: 16px 0;\">\n    <svg viewBox=\"10 10 160 130\" width=\"100%\" style=\"max-width: 280px; height: auto;\" xmlns=\"http://www.w3.org/2000/svg\">\n      <!-- Grid/Background (Optional subtle style) -->\n      <defs>\n        <marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"5\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n          <path d=\"M 0 0 L 10 5 L 0 10 z\" fill=\"#475569\" />\n        </marker>\n      </defs>\n      \n      <!-- Triangle Path -->\n      <polygon points=\"30,30 150,120 30,120\" stroke=\"#1e293b\" stroke-width=\"2.5\" fill=\"#f8fafc\" stroke-linejoin=\"round\" />\n      \n      <path d=\"M 42 120 L 42 108 L 30 108\" stroke=\"#475569\" stroke-width=\"1.5\" fill=\"none\" />\n      <line x1=\"30\" y1=\"30\" x2=\"30\" y2=\"-20\" stroke=\"#1e293b\" stroke-width=\"2\" /><text x=\"15\" y=\"10\" font-size=\"12\" fill=\"#2563eb\" font-weight=\"bold\">130°</text>\n\n      <!-- Angle Indicators (Arcs) -->\n      <!-- Vertex A Arc -->\n      <!-- Vertex B Arc -->\n      <!-- Vertex C Arc -->\n\n      <!-- Text Labels for Vertices -->\n      <text x=\"30\" y=\"20\" font-family=\"Outfit, Inter, sans-serif\" font-size=\"14\" font-weight=\"bold\" fill=\"#0f172a\" text-anchor=\"middle\">N</text>\n      <text x=\"138\" y=\"136\" font-family=\"Outfit, Inter, sans-serif\" font-size=\"14\" font-weight=\"bold\" fill=\"#0f172a\" text-anchor=\"middle\">G</text>\n      <text x=\"42\" y=\"136\" font-family=\"Outfit, Inter, sans-serif\" font-size=\"14\" font-weight=\"bold\" fill=\"#0f172a\" text-anchor=\"middle\">E</text>\n\n      <!-- Angle Values -->\n      \n      <text x=\"175\" y=\"110\" font-family=\"Outfit, Inter, sans-serif\" font-size=\"13\" fill=\"#2563eb\" font-weight=\"600\" text-anchor=\"middle\">\\gamma</text>\n      \n    </svg>\n  </div>",
    "options": [
      "$40^\\circ$",
      "$30^\\circ$",
      "$50^\\circ$",
      "$45^\\circ$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n    <p><strong>Step-by-step breakdown:</strong></p>\n    <p><strong>Step 1:</strong> Set up the exterior angle equation where the exterior angle ($130^\\circ$) is equal to the sum of the opposite interior angles ($90^\\circ$ and $\\gamma$):</p>\n    <p>$$130^\\circ = 90^\\circ + \\gamma$$</p>\n    <p><strong>Step 2:</strong> Solve for $\\gamma$:</p>\n    <p>$$\\gamma = 130^\\circ - 90^\\circ = 40^\\circ$$</p>\n  </div>",
    "createdAt": "2026-05-17T13:07:42.974Z"
  },
  {
    "chapterId": "y7-12",
    "chapterTitle": "Chapter 12: Triangles and constructions",
    "topicId": "y7-12a",
    "topicCode": "12A",
    "topicTitle": "Angles in triangles",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isActive": true,
    "isManual": true,
    "question": "Find the value of $\\theta$ in the diagram below:\n  <div style=\"display: flex; justify-content: center; margin: 16px 0;\">\n    <svg viewBox=\"20 10 160 130\" width=\"100%\" style=\"max-width: 280px; height: auto;\" xmlns=\"http://www.w3.org/2000/svg\">\n      <!-- Grid/Background (Optional subtle style) -->\n      <defs>\n        <marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"5\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n          <path d=\"M 0 0 L 10 5 L 0 10 z\" fill=\"#475569\" />\n        </marker>\n      </defs>\n      \n      <!-- Triangle Path -->\n      <polygon points=\"100,30 40,120 160,120\" stroke=\"#1e293b\" stroke-width=\"2.5\" fill=\"#f8fafc\" stroke-linejoin=\"round\" />\n      \n      \n      <line x1=\"100\" y1=\"30\" x2=\"140\" y2=\"-10\" stroke=\"#1e293b\" stroke-width=\"2\" /><text x=\"110\" y=\"10\" font-size=\"12\" fill=\"#2563eb\" font-weight=\"bold\">80°</text>\n\n      <!-- Angle Indicators (Arcs) -->\n      <!-- Vertex A Arc -->\n      <!-- Vertex B Arc -->\n      <!-- Vertex C Arc -->\n\n      <!-- Text Labels for Vertices -->\n      <text x=\"100\" y=\"20\" font-family=\"Outfit, Inter, sans-serif\" font-size=\"14\" font-weight=\"bold\" fill=\"#0f172a\" text-anchor=\"middle\">R</text>\n      <text x=\"28\" y=\"136\" font-family=\"Outfit, Inter, sans-serif\" font-size=\"14\" font-weight=\"bold\" fill=\"#0f172a\" text-anchor=\"middle\">D</text>\n      <text x=\"172\" y=\"136\" font-family=\"Outfit, Inter, sans-serif\" font-size=\"14\" font-weight=\"bold\" fill=\"#0f172a\" text-anchor=\"middle\">E</text>\n\n      <!-- Angle Values -->\n      \n      <text x=\"65\" y=\"110\" font-family=\"Outfit, Inter, sans-serif\" font-size=\"13\" fill=\"#2563eb\" font-weight=\"600\" text-anchor=\"middle\">\\theta</text>\n      <text x=\"135\" y=\"110\" font-family=\"Outfit, Inter, sans-serif\" font-size=\"13\" fill=\"#2563eb\" font-weight=\"600\" text-anchor=\"middle\">45^\\circ</text>\n    </svg>\n  </div>",
    "options": [
      "$35^\\circ$",
      "$45^\\circ$",
      "$25^\\circ$",
      "$55^\\circ$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n    <p><strong>Step-by-step breakdown:</strong></p>\n    <p><strong>Step 1:</strong> The exterior angle ($80^\\circ$) equals the sum of the two opposite interior angles ($\\theta$ and $45^\\circ$):</p>\n    <p>$$80^\\circ = \\theta + 45^\\circ$$</p>\n    <p><strong>Step 2:</strong> Solve for $\\theta$:</p>\n    <p>$$\\theta = 80^\\circ - 45^\\circ = 35^\\circ$$</p>\n  </div>",
    "createdAt": "2026-05-17T13:07:42.974Z"
  },
  {
    "chapterId": "y7-12",
    "chapterTitle": "Chapter 12: Triangles and constructions",
    "topicId": "y7-12a",
    "topicCode": "12A",
    "topicTitle": "Angles in triangles",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "Can a triangle have two obtuse angles?",
    "options": [
      "No, because two obtuse angles would sum to more than $180^\\circ$.",
      "Yes, but only in an isosceles triangle.",
      "Yes, but only in a scalene triangle.",
      "No, because a triangle can only have at most one right angle."
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n    <p>An obtuse angle is strictly greater than $90^\\circ$. If a triangle had two obtuse angles, their sum alone would exceed $180^\\circ$ ($91^\\circ + 91^\\circ = 182^\\circ > 180^\\circ$), which is impossible for any triangle.</p>\n  </div>",
    "createdAt": "2026-05-17T13:07:42.974Z"
  },
  {
    "chapterId": "y7-12",
    "chapterTitle": "Chapter 12: Triangles and constructions",
    "topicId": "y7-12a",
    "topicCode": "12A",
    "topicTitle": "Angles in triangles",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "Can a triangle have two right angles?",
    "options": [
      "No, because two right angles would sum to exactly $180^\\circ$, leaving $0^\\circ$ for the third angle.",
      "Yes, in a right-angled isosceles triangle.",
      "Yes, if the third angle is obtuse.",
      "No, because right angles can only exist in quadrilaterals."
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n    <p>A right angle is exactly $90^\\circ$. Two right angles would sum to $90^\\circ + 90^\\circ = 180^\\circ$. This leaves exactly $0^\\circ$ for the third angle, which means a closed three-sided triangle cannot be formed.</p>\n  </div>",
    "createdAt": "2026-05-17T13:07:42.974Z"
  },
  {
    "chapterId": "y7-12",
    "chapterTitle": "Chapter 12: Triangles and constructions",
    "topicId": "y7-12a",
    "topicCode": "12A",
    "topicTitle": "Angles in triangles",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "What is the minimum number of acute angles a triangle can have?",
    "options": [
      "$2$",
      "$1$",
      "$3$",
      "$0$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n    <p>Since a triangle can have at most one right or obtuse angle, the remaining two angles must be acute ($< 90^\\circ$). Therefore, every triangle must have at least $2$ acute angles.</p>\n  </div>",
    "createdAt": "2026-05-17T13:07:42.974Z"
  },
  {
    "chapterId": "y7-12",
    "chapterTitle": "Chapter 12: Triangles and constructions",
    "topicId": "y7-12a",
    "topicCode": "12A",
    "topicTitle": "Angles in triangles",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "Find the value of $\\alpha$ in the right-angled triangle below:\n  <div style=\"display: flex; justify-content: center; margin: 16px 0;\">\n    <svg viewBox=\"10 10 160 130\" width=\"100%\" style=\"max-width: 280px; height: auto;\" xmlns=\"http://www.w3.org/2000/svg\">\n      <!-- Grid/Background (Optional subtle style) -->\n      <defs>\n        <marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"5\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n          <path d=\"M 0 0 L 10 5 L 0 10 z\" fill=\"#475569\" />\n        </marker>\n      </defs>\n      \n      <!-- Triangle Path -->\n      <polygon points=\"30,30 150,120 30,120\" stroke=\"#1e293b\" stroke-width=\"2.5\" fill=\"#f8fafc\" stroke-linejoin=\"round\" />\n      \n      <path d=\"M 42 120 L 42 108 L 30 108\" stroke=\"#475569\" stroke-width=\"1.5\" fill=\"none\" />\n      \n\n      <!-- Angle Indicators (Arcs) -->\n      <!-- Vertex A Arc -->\n      <!-- Vertex B Arc -->\n      <!-- Vertex C Arc -->\n\n      <!-- Text Labels for Vertices -->\n      <text x=\"30\" y=\"20\" font-family=\"Outfit, Inter, sans-serif\" font-size=\"14\" font-weight=\"bold\" fill=\"#0f172a\" text-anchor=\"middle\">A</text>\n      <text x=\"138\" y=\"136\" font-family=\"Outfit, Inter, sans-serif\" font-size=\"14\" font-weight=\"bold\" fill=\"#0f172a\" text-anchor=\"middle\">C</text>\n      <text x=\"42\" y=\"136\" font-family=\"Outfit, Inter, sans-serif\" font-size=\"14\" font-weight=\"bold\" fill=\"#0f172a\" text-anchor=\"middle\">B</text>\n\n      <!-- Angle Values -->\n      <text x=\"30\" y=\"55\" font-family=\"Outfit, Inter, sans-serif\" font-size=\"13\" fill=\"#2563eb\" font-weight=\"600\" text-anchor=\"middle\">\\alpha</text>\n      <text x=\"175\" y=\"110\" font-family=\"Outfit, Inter, sans-serif\" font-size=\"13\" fill=\"#2563eb\" font-weight=\"600\" text-anchor=\"middle\">2\\alpha</text>\n      \n    </svg>\n  </div>",
    "options": [
      "$30^\\circ$",
      "$20^\\circ$",
      "$40^\\circ$",
      "$25^\\circ$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n    <p><strong>Step-by-step breakdown:</strong></p>\n    <p><strong>Step 1:</strong> The sum of the interior angles is $180^\\circ$. Since one angle is $90^\\circ$, the other two acute angles must sum to $90^\\circ$:</p>\n    <p>$$\\alpha + 2\\alpha = 90^\\circ$$</p>\n    <p><strong>Step 2:</strong> Combine like terms:</p>\n    <p>$$3\\alpha = 90^\\circ$$</p>\n    <p><strong>Step 3:</strong> Divide by $3$:</p>\n    <p>$$\\alpha = 30^\\circ$$</p>\n  </div>",
    "createdAt": "2026-05-17T13:07:42.975Z"
  },
  {
    "chapterId": "y7-12",
    "chapterTitle": "Chapter 12: Triangles and constructions",
    "topicId": "y7-12a",
    "topicCode": "12A",
    "topicTitle": "Angles in triangles",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "Find the value of $\\beta$ in the triangle below:\n  <div style=\"display: flex; justify-content: center; margin: 16px 0;\">\n    <svg viewBox=\"20 10 160 130\" width=\"100%\" style=\"max-width: 280px; height: auto;\" xmlns=\"http://www.w3.org/2000/svg\">\n      <!-- Grid/Background (Optional subtle style) -->\n      <defs>\n        <marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"5\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n          <path d=\"M 0 0 L 10 5 L 0 10 z\" fill=\"#475569\" />\n        </marker>\n      </defs>\n      \n      <!-- Triangle Path -->\n      <polygon points=\"100,30 40,120 160,120\" stroke=\"#1e293b\" stroke-width=\"2.5\" fill=\"#f8fafc\" stroke-linejoin=\"round\" />\n      \n      \n      \n\n      <!-- Angle Indicators (Arcs) -->\n      <!-- Vertex A Arc -->\n      <!-- Vertex B Arc -->\n      <!-- Vertex C Arc -->\n\n      <!-- Text Labels for Vertices -->\n      <text x=\"100\" y=\"20\" font-family=\"Outfit, Inter, sans-serif\" font-size=\"14\" font-weight=\"bold\" fill=\"#0f172a\" text-anchor=\"middle\">P</text>\n      <text x=\"28\" y=\"136\" font-family=\"Outfit, Inter, sans-serif\" font-size=\"14\" font-weight=\"bold\" fill=\"#0f172a\" text-anchor=\"middle\">R</text>\n      <text x=\"172\" y=\"136\" font-family=\"Outfit, Inter, sans-serif\" font-size=\"14\" font-weight=\"bold\" fill=\"#0f172a\" text-anchor=\"middle\">Q</text>\n\n      <!-- Angle Values -->\n      <text x=\"100\" y=\"55\" font-family=\"Outfit, Inter, sans-serif\" font-size=\"13\" fill=\"#2563eb\" font-weight=\"600\" text-anchor=\"middle\">\\beta + 20^\\circ</text>\n      <text x=\"65\" y=\"110\" font-family=\"Outfit, Inter, sans-serif\" font-size=\"13\" fill=\"#2563eb\" font-weight=\"600\" text-anchor=\"middle\">100^\\circ</text>\n      <text x=\"135\" y=\"110\" font-family=\"Outfit, Inter, sans-serif\" font-size=\"13\" fill=\"#2563eb\" font-weight=\"600\" text-anchor=\"middle\">\\beta</text>\n    </svg>\n  </div>",
    "options": [
      "$30^\\circ$",
      "$40^\\circ$",
      "$25^\\circ$",
      "$35^\\circ$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n    <p><strong>Step-by-step breakdown:</strong></p>\n    <p><strong>Step 1:</strong> Apply the interior angle sum theorem ($180^\\circ$):</p>\n    <p>$$100^\\circ + \\beta + (\\beta + 20^\\circ) = 180^\\circ$$</p>\n    <p><strong>Step 2:</strong> Combine like terms:</p>\n    <p>$$2\\beta + 120^\\circ = 180^\\circ$$</p>\n    <p><strong>Step 3:</strong> Subtract $120^\\circ$ from both sides:</p>\n    <p>$$2\\beta = 60^\\circ$$</p>\n    <p><strong>Step 4:</strong> Divide by $2$:</p>\n    <p>$$\\beta = 30^\\circ$$</p>\n  </div>",
    "createdAt": "2026-05-17T13:07:42.975Z"
  },
  {
    "chapterId": "y7-12",
    "chapterTitle": "Chapter 12: Triangles and constructions",
    "topicId": "y7-12a",
    "topicCode": "12A",
    "topicTitle": "Angles in triangles",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isActive": true,
    "isManual": true,
    "question": "Find the value of $\\gamma$ in the equilateral triangle below:\n  <div style=\"display: flex; justify-content: center; margin: 16px 0;\">\n    <svg viewBox=\"20 10 160 130\" width=\"100%\" style=\"max-width: 280px; height: auto;\" xmlns=\"http://www.w3.org/2000/svg\">\n      <!-- Grid/Background (Optional subtle style) -->\n      <defs>\n        <marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"5\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n          <path d=\"M 0 0 L 10 5 L 0 10 z\" fill=\"#475569\" />\n        </marker>\n      </defs>\n      \n      <!-- Triangle Path -->\n      <polygon points=\"100,30 40,120 160,120\" stroke=\"#1e293b\" stroke-width=\"2.5\" fill=\"#f8fafc\" stroke-linejoin=\"round\" />\n      \n      \n      \n\n      <!-- Angle Indicators (Arcs) -->\n      <!-- Vertex A Arc -->\n      <!-- Vertex B Arc -->\n      <!-- Vertex C Arc -->\n\n      <!-- Text Labels for Vertices -->\n      <text x=\"100\" y=\"20\" font-family=\"Outfit, Inter, sans-serif\" font-size=\"14\" font-weight=\"bold\" fill=\"#0f172a\" text-anchor=\"middle\">X</text>\n      <text x=\"28\" y=\"136\" font-family=\"Outfit, Inter, sans-serif\" font-size=\"14\" font-weight=\"bold\" fill=\"#0f172a\" text-anchor=\"middle\">Y</text>\n      <text x=\"172\" y=\"136\" font-family=\"Outfit, Inter, sans-serif\" font-size=\"14\" font-weight=\"bold\" fill=\"#0f172a\" text-anchor=\"middle\">Z</text>\n\n      <!-- Angle Values -->\n      <text x=\"100\" y=\"55\" font-family=\"Outfit, Inter, sans-serif\" font-size=\"13\" fill=\"#2563eb\" font-weight=\"600\" text-anchor=\"middle\">\\gamma</text>\n      <text x=\"65\" y=\"110\" font-family=\"Outfit, Inter, sans-serif\" font-size=\"13\" fill=\"#2563eb\" font-weight=\"600\" text-anchor=\"middle\">\\gamma</text>\n      <text x=\"135\" y=\"110\" font-family=\"Outfit, Inter, sans-serif\" font-size=\"13\" fill=\"#2563eb\" font-weight=\"600\" text-anchor=\"middle\">\\gamma</text>\n    </svg>\n  </div>",
    "options": [
      "$60^\\circ$",
      "$50^\\circ$",
      "$70^\\circ$",
      "$90^\\circ$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n    <p><strong>Step-by-step breakdown:</strong></p>\n    <p><strong>Step 1:</strong> An equilateral triangle has three equal angles $\\gamma$:</p>\n    <p>$$\\gamma + \\gamma + \\gamma = 180^\\circ$$</p>\n    <p>$$3\\gamma = 180^\\circ$$</p>\n    <p><strong>Step 2:</strong> Divide by $3$:</p>\n    <p>$$\\gamma = 60^\\circ$$</p>\n  </div>",
    "createdAt": "2026-05-17T13:07:42.975Z"
  },
  {
    "chapterId": "y7-12",
    "chapterTitle": "Chapter 12: Triangles and constructions",
    "topicId": "y7-12a",
    "topicCode": "12A",
    "topicTitle": "Angles in triangles",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "Find the value of $\\theta$ in the isosceles triangle below:\n  <div style=\"display: flex; justify-content: center; margin: 16px 0;\">\n    <svg viewBox=\"20 10 160 130\" width=\"100%\" style=\"max-width: 280px; height: auto;\" xmlns=\"http://www.w3.org/2000/svg\">\n      <!-- Grid/Background (Optional subtle style) -->\n      <defs>\n        <marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"5\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n          <path d=\"M 0 0 L 10 5 L 0 10 z\" fill=\"#475569\" />\n        </marker>\n      </defs>\n      \n      <!-- Triangle Path -->\n      <polygon points=\"100,30 40,120 160,120\" stroke=\"#1e293b\" stroke-width=\"2.5\" fill=\"#f8fafc\" stroke-linejoin=\"round\" />\n      \n      \n      <line x1=\"100\" y1=\"30\" x2=\"100\" y2=\"-20\" stroke=\"#1e293b\" stroke-width=\"2\" /><text x=\"115\" y=\"10\" font-size=\"12\" fill=\"#2563eb\" font-weight=\"bold\">110°</text>\n\n      <!-- Angle Indicators (Arcs) -->\n      <!-- Vertex A Arc -->\n      <!-- Vertex B Arc -->\n      <!-- Vertex C Arc -->\n\n      <!-- Text Labels for Vertices -->\n      <text x=\"100\" y=\"20\" font-family=\"Outfit, Inter, sans-serif\" font-size=\"14\" font-weight=\"bold\" fill=\"#0f172a\" text-anchor=\"middle\">F</text>\n      <text x=\"28\" y=\"136\" font-family=\"Outfit, Inter, sans-serif\" font-size=\"14\" font-weight=\"bold\" fill=\"#0f172a\" text-anchor=\"middle\">I</text>\n      <text x=\"172\" y=\"136\" font-family=\"Outfit, Inter, sans-serif\" font-size=\"14\" font-weight=\"bold\" fill=\"#0f172a\" text-anchor=\"middle\">S</text>\n\n      <!-- Angle Values -->\n      \n      <text x=\"65\" y=\"110\" font-family=\"Outfit, Inter, sans-serif\" font-size=\"13\" fill=\"#2563eb\" font-weight=\"600\" text-anchor=\"middle\">\\theta</text>\n      <text x=\"135\" y=\"110\" font-family=\"Outfit, Inter, sans-serif\" font-size=\"13\" fill=\"#2563eb\" font-weight=\"600\" text-anchor=\"middle\">\\theta</text>\n    </svg>\n  </div>",
    "options": [
      "$55^\\circ$",
      "$45^\\circ$",
      "$65^\\circ$",
      "$50^\\circ$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n    <p><strong>Step-by-step breakdown:</strong></p>\n    <p><strong>Step 1:</strong> By the exterior angle theorem, the exterior angle at the top vertex is equal to the sum of the two opposite interior angles $\\theta$:</p>\n    <p>$$\\theta + \\theta = 110^\\circ$$</p>\n    <p><strong>Step 2:</strong> Simplify and divide:</p>\n    <p>$$2\\theta = 110^\\circ \\implies \\theta = 55^\\circ$$</p>\n  </div>",
    "createdAt": "2026-05-17T13:07:42.975Z"
  },
  {
    "chapterId": "y7-12",
    "chapterTitle": "Chapter 12: Triangles and constructions",
    "topicId": "y7-12a",
    "topicCode": "12A",
    "topicTitle": "Angles in triangles",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "In the diagram below, two triangles share a vertex $A$ at the intersection. Find the value of $\\alpha$.\n  <div style=\"display: flex; justify-content: center; margin: 16px 0;\">\n    <svg viewBox=\"0 0 200 140\" width=\"100%\" style=\"max-width: 250px; height: auto;\" xmlns=\"http://www.w3.org/2000/svg\">\n      <polygon points=\"20,20 80,70 20,120\" stroke=\"#1e293b\" stroke-width=\"2\" fill=\"none\" />\n      <polygon points=\"180,20 80,70 180,120\" stroke=\"#1e293b\" stroke-width=\"2\" fill=\"none\" />\n      <text x=\"15\" y=\"15\" font-size=\"12\" font-weight=\"bold\">B</text>\n      <text x=\"15\" y=\"135\" font-size=\"12\" font-weight=\"bold\">C</text>\n      <text x=\"80\" y=\"60\" font-size=\"12\" font-weight=\"bold\">A</text>\n      <text x=\"185\" y=\"15\" font-size=\"12\" font-weight=\"bold\">D</text>\n      <text x=\"185\" y=\"135\" font-size=\"12\" font-weight=\"bold\">E</text>\n      \n      <text x=\"35\" y=\"45\" font-size=\"11\" fill=\"#2563eb\" font-weight=\"bold\">40°</text>\n      <text x=\"35\" y=\"105\" font-size=\"11\" fill=\"#2563eb\" font-weight=\"bold\">50°</text>\n      <text x=\"150\" y=\"45\" font-size=\"11\" fill=\"#2563eb\" font-weight=\"bold\">2α</text>\n      <text x=\"150\" y=\"105\" font-size=\"11\" fill=\"#2563eb\" font-weight=\"bold\">α</text>\n    </svg>\n  </div>",
    "options": [
      "$30^\\circ$",
      "$20^\\circ$",
      "$40^\\circ$",
      "$25^\\circ$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n    <p><strong>Step-by-step breakdown:</strong></p>\n    <p><strong>Step 1:</strong> Find the third angle in the left triangle $\\angle BAC$ using the angle sum of a triangle ($180^\\circ$):</p>\n    <p>$$\\angle BAC = 180^\\circ - (40^\\circ + 50^\\circ) = 180^\\circ - 90^\\circ = 90^\\circ$$</p>\n    <p><strong>Step 2:</strong> Vertically opposite angles are equal, so the interior angle of the right triangle is also $90^\\circ$:</p>\n    <p>$$\\angle DAE = \\angle BAC = 90^\\circ$$</p>\n    <p><strong>Step 3:</strong> Sum the angles in the right triangle to $180^\\circ$:</p>\n    <p>$$\\alpha + 2\\alpha + 90^\\circ = 180^\\circ$$</p>\n    <p>$$3\\alpha = 90^\\circ \\implies \\alpha = 30^\\circ$$</p>\n  </div>",
    "createdAt": "2026-05-17T13:07:42.975Z"
  },
  {
    "chapterId": "y7-12",
    "chapterTitle": "Chapter 12: Triangles and constructions",
    "topicId": "y7-12a",
    "topicCode": "12A",
    "topicTitle": "Angles in triangles",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "In the diagram below, lines $HO$ and $ER$ are parallel. Find the value of $\\alpha$.\n  <div style=\"display: flex; justify-content: center; margin: 16px 0;\">\n    <svg viewBox=\"0 0 200 120\" width=\"100%\" style=\"max-width: 250px; height: auto;\" xmlns=\"http://www.w3.org/2000/svg\">\n      <line x1=\"20\" y1=\"30\" x2=\"180\" y2=\"30\" stroke=\"#1e293b\" stroke-width=\"2\" />\n      <line x1=\"20\" y1=\"90\" x2=\"180\" y2=\"90\" stroke=\"#1e293b\" stroke-width=\"2\" />\n      <line x1=\"140\" y1=\"30\" x2=\"60\" y2=\"90\" stroke=\"#1e293b\" stroke-width=\"2\" />\n      <line x1=\"140\" y1=\"30\" x2=\"160\" y2=\"90\" stroke=\"#1e293b\" stroke-width=\"2\" />\n      <text x=\"15\" y=\"25\" font-size=\"12\" font-weight=\"bold\">H</text>\n      <text x=\"185\" y=\"25\" font-size=\"12\" font-weight=\"bold\">O</text>\n      <text x=\"15\" y=\"105\" font-size=\"12\" font-weight=\"bold\">E</text>\n      <text x=\"185\" y=\"105\" font-size=\"12\" font-weight=\"bold\">R</text>\n      \n      <text x=\"100\" y=\"45\" font-size=\"11\" fill=\"#2563eb\" font-weight=\"bold\">35°</text>\n      <text x=\"140\" y=\"85\" font-size=\"11\" fill=\"#2563eb\" font-weight=\"bold\">70°</text>\n      <text x=\"125\" y=\"45\" font-size=\"11\" fill=\"#2563eb\" font-weight=\"bold\">α</text>\n    </svg>\n  </div>",
    "options": [
      "$75^\\circ$",
      "$65^\\circ$",
      "$70^\\circ$",
      "$80^\\circ$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n    <p><strong>Step-by-step breakdown:</strong></p>\n    <p><strong>Step 1:</strong> Identify alternate interior angles formed by parallel lines $HO \\parallel ER$:</p>\n    <p>The transversal creates a corresponding/alternate interior angle relationship. By alternate interior angles, the left angle inside the triangle is $35^\\circ$.</p>\n    <p><strong>Step 2:</strong> Use the interior angle sum of the formed triangle to find $\\alpha$:</p>\n    <p>$$\\alpha + 35^\\circ + 70^\\circ = 180^\\circ$$</p>\n    <p>$$\\alpha + 105^\\circ = 180^\\circ \\implies \\alpha = 75^\\circ$$</p>\n  </div>",
    "createdAt": "2026-05-17T13:07:42.975Z"
  },
  {
    "chapterId": "y7-12",
    "chapterTitle": "Chapter 12: Triangles and constructions",
    "topicId": "y7-12a",
    "topicCode": "12A",
    "topicTitle": "Angles in triangles",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "hard",
    "isActive": true,
    "isManual": true,
    "question": "In the parallelogram $PLYA$ shown below, find the value of $\\gamma$.\n  <div style=\"display: flex; justify-content: center; margin: 16px 0;\">\n    <svg viewBox=\"0 0 200 120\" width=\"100%\" style=\"max-width: 250px; height: auto;\" xmlns=\"http://www.w3.org/2000/svg\">\n      <polygon points=\"40,20 180,20 140,100 20,100\" stroke=\"#1e293b\" stroke-width=\"2\" fill=\"none\"/>\n      <line x1=\"40\" y1=\"20\" x2=\"140\" y2=\"100\" stroke=\"#1e293b\" stroke-width=\"1.5\" />\n      <text x=\"35\" y=\"15\" font-size=\"12\" font-weight=\"bold\">P</text>\n      <text x=\"185\" y=\"15\" font-size=\"12\" font-weight=\"bold\">L</text>\n      <text x=\"145\" y=\"115\" font-size=\"12\" font-weight=\"bold\">Y</text>\n      <text x=\"10\" y=\"115\" font-size=\"12\" font-weight=\"bold\">A</text>\n      \n      <text x=\"50\" y=\"38\" font-size=\"11\" fill=\"#2563eb\" font-weight=\"bold\">70°</text>\n      <text x=\"100\" y=\"90\" font-size=\"11\" fill=\"#2563eb\" font-weight=\"bold\">50°</text>\n      <text x=\"125\" y=\"90\" font-size=\"11\" fill=\"#2563eb\" font-weight=\"bold\">γ</text>\n    </svg>\n  </div>",
    "options": [
      "$60^\\circ$",
      "$50^\\circ$",
      "$70^\\circ$",
      "$55^\\circ$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n    <p><strong>Step-by-step breakdown:</strong></p>\n    <p><strong>Step 1:</strong> Identify alternate interior angles since parallel lines $PL \\parallel AY$ are cut by the transversal diagonal $PY$:</p>\n    <p>$$\\angle LPY = \\angle APY = 70^\\circ$$</p>\n    <p><strong>Step 2:</strong> Use the angle sum of triangle $PAY$ to evaluate $\\gamma$:</p>\n    <p>$$\\gamma + 70^\\circ + 50^\\circ = 180^\\circ$$</p>\n    <p>$$\\gamma + 120^\\circ = 180^\\circ \\implies \\gamma = 60^\\circ$$</p>\n  </div>",
    "createdAt": "2026-05-17T13:07:42.975Z"
  },
  {
    "chapterId": "y7-12",
    "chapterTitle": "Chapter 12: Triangles and constructions",
    "topicId": "y7-12a",
    "topicCode": "12A",
    "topicTitle": "Angles in triangles",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "hard",
    "isActive": true,
    "isManual": true,
    "question": "Find the size of the marked angle $\\angle AVB$ in the diagram below:\n  <div style=\"display: flex; justify-content: center; margin: 16px 0;\">\n    <svg viewBox=\"0 0 200 160\" width=\"100%\" style=\"max-width: 250px; height: auto;\" xmlns=\"http://www.w3.org/2000/svg\">\n      <polygon points=\"100,20 30,130 170,130\" stroke=\"#1e293b\" stroke-width=\"2\" fill=\"none\" />\n      <line x1=\"30\" y1=\"130\" x2=\"135\" y2=\"75\" stroke=\"#1e293b\" stroke-width=\"1.5\" />\n      <text x=\"100\" y=\"15\" font-size=\"12\" font-weight=\"bold\">V</text>\n      <text x=\"20\" y=\"145\" font-size=\"12\" font-weight=\"bold\">A</text>\n      <text x=\"175\" y=\"145\" font-size=\"12\" font-weight=\"bold\">B</text>\n      <text x=\"140\" y=\"70\" font-size=\"12\" font-weight=\"bold\">Q</text>\n      \n      <text x=\"90\" y=\"45\" font-size=\"11\" fill=\"#2563eb\" font-weight=\"bold\">80°</text>\n      <text x=\"50\" y=\"125\" font-size=\"11\" fill=\"#2563eb\" font-weight=\"bold\">75°</text>\n    </svg>\n  </div>",
    "options": [
      "$25^\\circ$",
      "$35^\\circ$",
      "$15^\\circ$",
      "$45^\\circ$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n    <p><strong>Step-by-step breakdown:</strong></p>\n    <p><strong>Step 1:</strong> Find the third angle in the larger triangle using the angle sum of a triangle ($180^\\circ$):</p>\n    <p>$$\\angle B = 180^\\circ - (80^\\circ + 75^\\circ) = 25^\\circ$$</p>\n    <p><strong>Step 2:</strong> Therefore, the angle $\\angle AVB$ equals exactly $25^\\circ$.</p>\n  </div>",
    "createdAt": "2026-05-17T13:07:42.975Z"
  }
];

export const importYear7Ch12A = async (forceReset = false) => {
  console.log('[Ch12A Year 7 Import] STARTING PHYSICAL SYNC...');
  let importedCount = 0;
  try {
    const qRef = collection(db, 'questions');
    
    if (forceReset) {
      console.log('Force reset enabled. Deleting existing Y7 Ch12 (12a to 12e) questions...');
      const topicsToDelete = ['y7-12a', 'y7-12b', 'y7-12c', 'y7-12d', 'y7-12e'];
      for (const tId of topicsToDelete) {
        const existingSnap = await getDocs(query(qRef, where('topicId', '==', tId)));
        for (const doc of existingSnap.docs) {
          await deleteDoc(doc.ref);
        }
      }
      console.log('Deleted existing Ch12 topic questions.');
    }

    // To prevent duplicates, query all existing questions in Ch12 topics
    const existingQuestions = new Set();
    const topicsToCheck = ['y7-12a', 'y7-12b', 'y7-12c', 'y7-12d', 'y7-12e'];
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
    console.log('[Ch12A Year 7 Import] SUCCESS! ' + importedCount + ' new questions imported.');
    return importedCount;
  } catch (error) {
    console.error('[Ch12A Year 7 Import] ERROR:', error);
    return 0;
  }
};
