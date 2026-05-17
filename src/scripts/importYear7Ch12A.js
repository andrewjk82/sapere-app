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
    "question": "Draw a large triangle $ABC$. Produce (extend) the side $AB$ to $D$. What name is given to the angle $\\angle CBD$?",
    "options": [
      "Exterior angle",
      "Interior angle",
      "Alternate angle",
      "Corresponding angle"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>When a side of a triangle is extended, the angle formed between the extended line and the adjacent side of the triangle is called an <strong>exterior angle</strong>.</p></div>",
    "createdAt": "2026-05-17T13:18:38.362Z"
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
    "question": "What is the sum of the three interior angles of any triangle?",
    "options": [
      "$180^\\circ$",
      "$90^\\circ$",
      "$360^\\circ$",
      "$270^\\circ$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>The sum of the three interior angles of any triangle is always constant and equals exactly $180^\\circ$.</p></div>",
    "createdAt": "2026-05-17T13:18:38.363Z"
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
    "question": "According to the exterior angle theorem, the exterior angle $\\angle CBD$ of a triangle $ABC$ is equal to...",
    "options": [
      "The sum of the two opposite interior angles $\\angle A + \\angle C$.",
      "The difference between $\\angle A$ and $\\angle C$.",
      "Exactly $180^\\circ$ minus the sum of $\\angle A$ and $\\angle C$.",
      "The vertical opposite angle."
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>An exterior angle of a triangle is equal to the sum of the two opposite (non-adjacent) interior angles: $$\\angle CBD = \\angle A + \\angle C$$</p></div>",
    "createdAt": "2026-05-17T13:18:38.363Z"
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
    "question": "Find the value of $\\alpha$ in the triangle below:\n    <div style=\"display: flex; justify-content: center; margin: 16px 0;\">\n    <svg viewBox=\"20 10 160 130\" width=\"100%\" style=\"max-width: 280px; height: auto;\" xmlns=\"http://www.w3.org/2000/svg\">\n      <defs>\n        <marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"5\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n          <path d=\"M 0 0 L 10 5 L 0 10 z\" fill=\"#475569\" />\n        </marker>\n      </defs>\n      \n      <polygon points=\"100,30 40,120 160,120\" stroke=\"#1e293b\" stroke-width=\"2.5\" fill=\"#f8fafc\" stroke-linejoin=\"round\" />\n      \n      \n      \n\n      <text x=\"100\" y=\"20\" font-family=\"Outfit, Inter, sans-serif\" font-size=\"14\" font-weight=\"bold\" fill=\"#0f172a\" text-anchor=\"middle\">A</text>\n      <text x=\"28\" y=\"136\" font-family=\"Outfit, Inter, sans-serif\" font-size=\"14\" font-weight=\"bold\" fill=\"#0f172a\" text-anchor=\"middle\">B</text>\n      <text x=\"172\" y=\"136\" font-family=\"Outfit, Inter, sans-serif\" font-size=\"14\" font-weight=\"bold\" fill=\"#0f172a\" text-anchor=\"middle\">C</text>\n\n      <text x=\"100\" y=\"55\" font-family=\"Outfit, Inter, sans-serif\" font-size=\"13\" fill=\"#2563eb\" font-weight=\"600\" text-anchor=\"middle\">α</text>\n      <text x=\"65\" y=\"110\" font-family=\"Outfit, Inter, sans-serif\" font-size=\"13\" fill=\"#2563eb\" font-weight=\"600\" text-anchor=\"middle\">70^°</text>\n      <text x=\"135\" y=\"110\" font-family=\"Outfit, Inter, sans-serif\" font-size=\"13\" fill=\"#2563eb\" font-weight=\"600\" text-anchor=\"middle\">30^°</text>\n    </svg>\n  </div>",
    "options": [
      "$80^\\circ$",
      "$70^\\circ$",
      "$90^\\circ$",
      "$60^\\circ$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>Using the angle sum of a triangle ($180^\\circ$):</p><p>$$\\alpha + 70^\\circ + 30^\\circ = 180^\\circ \\implies \\alpha = 80^\\circ$$</p></div>",
    "createdAt": "2026-05-17T13:18:38.363Z"
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
    "question": "Find the value of $20^\\circ$ in the triangle below:\n    <div style=\"display: flex; justify-content: center; margin: 16px 0;\">\n    <svg viewBox=\"20 30 160 110\" width=\"100%\" style=\"max-width: 280px; height: auto;\" xmlns=\"http://www.w3.org/2000/svg\">\n      <defs>\n        <marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"5\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n          <path d=\"M 0 0 L 10 5 L 0 10 z\" fill=\"#475569\" />\n        </marker>\n      </defs>\n      \n      <polygon points=\"100,50 40,120 160,120\" stroke=\"#1e293b\" stroke-width=\"2.5\" fill=\"#f8fafc\" stroke-linejoin=\"round\" />\n      \n      \n      \n\n      <text x=\"100\" y=\"40\" font-family=\"Outfit, Inter, sans-serif\" font-size=\"14\" font-weight=\"bold\" fill=\"#0f172a\" text-anchor=\"middle\">I</text>\n      <text x=\"28\" y=\"136\" font-family=\"Outfit, Inter, sans-serif\" font-size=\"14\" font-weight=\"bold\" fill=\"#0f172a\" text-anchor=\"middle\">B</text>\n      <text x=\"172\" y=\"136\" font-family=\"Outfit, Inter, sans-serif\" font-size=\"14\" font-weight=\"bold\" fill=\"#0f172a\" text-anchor=\"middle\">T</text>\n\n      <text x=\"100\" y=\"75\" font-family=\"Outfit, Inter, sans-serif\" font-size=\"13\" fill=\"#2563eb\" font-weight=\"600\" text-anchor=\"middle\">20^°</text>\n      <text x=\"65\" y=\"110\" font-family=\"Outfit, Inter, sans-serif\" font-size=\"13\" fill=\"#2563eb\" font-weight=\"600\" text-anchor=\"middle\">β</text>\n      <text x=\"135\" y=\"110\" font-family=\"Outfit, Inter, sans-serif\" font-size=\"13\" fill=\"#2563eb\" font-weight=\"600\" text-anchor=\"middle\">20^°</text>\n    </svg>\n  </div>",
    "options": [
      "$140^\\circ$",
      "$130^\\circ$",
      "$150^\\circ$",
      "$120^\\circ$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>Using the angle sum of a triangle ($180^\\circ$):</p><p>$$\\beta + 20^\\circ + 20^\\circ = 180^\\circ \\implies \\beta = 140^\\circ$$</p></div>",
    "createdAt": "2026-05-17T13:18:38.363Z"
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
    "question": "Find the value of $\\gamma$ in the triangle below:\n    <div style=\"display: flex; justify-content: center; margin: 16px 0;\">\n    <svg viewBox=\"10 10 160 130\" width=\"100%\" style=\"max-width: 280px; height: auto;\" xmlns=\"http://www.w3.org/2000/svg\">\n      <defs>\n        <marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"5\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n          <path d=\"M 0 0 L 10 5 L 0 10 z\" fill=\"#475569\" />\n        </marker>\n      </defs>\n      \n      <polygon points=\"30,30 150,120 30,120\" stroke=\"#1e293b\" stroke-width=\"2.5\" fill=\"#f8fafc\" stroke-linejoin=\"round\" />\n      \n      <path d=\"M 42 120 L 42 108 L 30 108\" stroke=\"#475569\" stroke-width=\"1.5\" fill=\"none\" />\n      \n\n      <text x=\"30\" y=\"20\" font-family=\"Outfit, Inter, sans-serif\" font-size=\"14\" font-weight=\"bold\" fill=\"#0f172a\" text-anchor=\"middle\">C</text>\n      <text x=\"138\" y=\"136\" font-family=\"Outfit, Inter, sans-serif\" font-size=\"14\" font-weight=\"bold\" fill=\"#0f172a\" text-anchor=\"middle\">U</text>\n      <text x=\"42\" y=\"136\" font-family=\"Outfit, Inter, sans-serif\" font-size=\"14\" font-weight=\"bold\" fill=\"#0f172a\" text-anchor=\"middle\">T</text>\n\n      <text x=\"30\" y=\"55\" font-family=\"Outfit, Inter, sans-serif\" font-size=\"13\" fill=\"#2563eb\" font-weight=\"600\" text-anchor=\"middle\">γ</text>\n      <text x=\"175\" y=\"110\" font-family=\"Outfit, Inter, sans-serif\" font-size=\"13\" fill=\"#2563eb\" font-weight=\"600\" text-anchor=\"middle\">35^°</text>\n      \n    </svg>\n  </div>",
    "options": [
      "$55^\\circ$",
      "$45^\\circ$",
      "$65^\\circ$",
      "$50^\\circ$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>Using the angle sum of a triangle ($180^\\circ$):</p><p>$$\\gamma + 35^\\circ + 90^\\circ = 180^\\circ \\implies \\gamma = 55^\\circ$$</p></div>",
    "createdAt": "2026-05-17T13:18:38.364Z"
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
    "question": "Find the value of $\\theta$ in the triangle below:\n    <div style=\"display: flex; justify-content: center; margin: 16px 0;\">\n    <svg viewBox=\"20 10 160 130\" width=\"100%\" style=\"max-width: 280px; height: auto;\" xmlns=\"http://www.w3.org/2000/svg\">\n      <defs>\n        <marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"5\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n          <path d=\"M 0 0 L 10 5 L 0 10 z\" fill=\"#475569\" />\n        </marker>\n      </defs>\n      \n      <polygon points=\"100,30 40,120 160,120\" stroke=\"#1e293b\" stroke-width=\"2.5\" fill=\"#f8fafc\" stroke-linejoin=\"round\" />\n      \n      \n      \n\n      <text x=\"100\" y=\"20\" font-family=\"Outfit, Inter, sans-serif\" font-size=\"14\" font-weight=\"bold\" fill=\"#0f172a\" text-anchor=\"middle\">J</text>\n      <text x=\"28\" y=\"136\" font-family=\"Outfit, Inter, sans-serif\" font-size=\"14\" font-weight=\"bold\" fill=\"#0f172a\" text-anchor=\"middle\">A</text>\n      <text x=\"172\" y=\"136\" font-family=\"Outfit, Inter, sans-serif\" font-size=\"14\" font-weight=\"bold\" fill=\"#0f172a\" text-anchor=\"middle\">B</text>\n\n      <text x=\"100\" y=\"55\" font-family=\"Outfit, Inter, sans-serif\" font-size=\"13\" fill=\"#2563eb\" font-weight=\"600\" text-anchor=\"middle\">θ</text>\n      <text x=\"65\" y=\"110\" font-family=\"Outfit, Inter, sans-serif\" font-size=\"13\" fill=\"#2563eb\" font-weight=\"600\" text-anchor=\"middle\">85^°</text>\n      <text x=\"135\" y=\"110\" font-family=\"Outfit, Inter, sans-serif\" font-size=\"13\" fill=\"#2563eb\" font-weight=\"600\" text-anchor=\"middle\">81^°</text>\n    </svg>\n  </div>",
    "options": [
      "$14^\\circ$",
      "$24^\\circ$",
      "$16^\\circ$",
      "$8^\\circ$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>Using the angle sum of a triangle ($180^\\circ$):</p><p>$$\\theta + 85^\\circ + 81^\\circ = 180^\\circ \\implies \\theta = 14^\\circ$$</p></div>",
    "createdAt": "2026-05-17T13:18:38.364Z"
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
    "question": "In the diagram below, the horizontal lines are parallel. Find the value of $\\alpha$.\n  <div style=\"display: flex; justify-content: center; margin: 16px 0;\">\n    <svg viewBox=\"0 0 200 160\" width=\"100%\" style=\"max-width: 250px; height: auto;\" xmlns=\"http://www.w3.org/2000/svg\">\n      <polygon points=\"30,120 170,120 100,70 30,20 170,20\" stroke=\"#1e293b\" stroke-width=\"2\" fill=\"none\"/>\n      <text x=\"30\" y=\"15\" font-size=\"12\" font-weight=\"bold\">M</text>\n      <text x=\"170\" y=\"15\" font-size=\"12\" font-weight=\"bold\">N</text>\n      <text x=\"100\" y=\"65\" font-size=\"12\" font-weight=\"bold\">O</text>\n      <text x=\"30\" y=\"135\" font-size=\"12\" font-weight=\"bold\">Q</text>\n      <text x=\"170\" y=\"135\" font-size=\"12\" font-weight=\"bold\">P</text>\n      \n      <text x=\"40\" y=\"115\" font-size=\"11\" fill=\"#2563eb\" font-weight=\"bold\">35°</text>\n      <text x=\"145\" y=\"115\" font-size=\"11\" fill=\"#2563eb\" font-weight=\"bold\">72°</text>\n      <text x=\"45\" y=\"35\" font-size=\"11\" fill=\"#2563eb\" font-weight=\"bold\">α</text>\n    </svg>\n  </div>",
    "options": [
      "$35^\\circ$",
      "$72^\\circ$",
      "$73^\\circ$",
      "$40^\\circ$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>By alternate interior angles between parallel lines:</p><p>$$\\alpha = \\angle OQP = 35^\\circ$$</p></div>",
    "createdAt": "2026-05-17T13:18:38.364Z"
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
    "question": "In the diagram below, two lines intersect at $K$. Find the value of $\\beta$.\n  <div style=\"display: flex; justify-content: center; margin: 16px 0;\">\n    <svg viewBox=\"0 0 200 140\" width=\"100%\" style=\"max-width: 250px; height: auto;\" xmlns=\"http://www.w3.org/2000/svg\">\n      <line x1=\"20\" y1=\"20\" x2=\"180\" y2=\"120\" stroke=\"#1e293b\" stroke-width=\"2\" />\n      <line x1=\"20\" y1=\"120\" x2=\"180\" y2=\"20\" stroke=\"#1e293b\" stroke-width=\"2\" />\n      <line x1=\"20\" y1=\"20\" x2=\"20\" y2=\"120\" stroke=\"#1e293b\" stroke-width=\"2\" />\n      <line x1=\"180\" y1=\"20\" x2=\"180\" y2=\"120\" stroke=\"#1e293b\" stroke-width=\"2\" />\n      <text x=\"15\" y=\"15\" font-size=\"12\" font-weight=\"bold\">B</text>\n      <text x=\"15\" y=\"135\" font-size=\"12\" font-weight=\"bold\">R</text>\n      <text x=\"185\" y=\"15\" font-size=\"12\" font-weight=\"bold\">T</text>\n      <text x=\"185\" y=\"135\" font-size=\"12\" font-weight=\"bold\">E</text>\n      <text x=\"105\" y=\"65\" font-size=\"12\" font-weight=\"bold\">K</text>\n      \n      <text x=\"30\" y=\"35\" font-size=\"11\" fill=\"#2563eb\" font-weight=\"bold\">β</text>\n      <text x=\"30\" y=\"110\" font-size=\"11\" fill=\"#2563eb\" font-weight=\"bold\">37°</text>\n      <text x=\"110\" y=\"82\" font-size=\"11\" fill=\"#2563eb\" font-weight=\"bold\">100°</text>\n    </svg>\n  </div>",
    "options": [
      "$43^\\circ$",
      "$53^\\circ$",
      "$37^\\circ$",
      "$47^\\circ$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>$$\\beta + 37^\\circ + 100^\\circ = 180^\\circ \\implies \\beta = 43^\\circ$$</p></div>",
    "createdAt": "2026-05-17T13:18:38.364Z"
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
    "question": "Find the value of $\\gamma$ in the diagram below:\n  <div style=\"display: flex; justify-content: center; margin: 16px 0;\">\n    <svg viewBox=\"0 0 200 120\" width=\"100%\" style=\"max-width: 250px; height: auto;\" xmlns=\"http://www.w3.org/2000/svg\">\n      <line x1=\"20\" y1=\"20\" x2=\"180\" y2=\"20\" stroke=\"#1e293b\" stroke-width=\"2\" />\n      <line x1=\"20\" y1=\"60\" x2=\"180\" y2=\"60\" stroke=\"#1e293b\" stroke-width=\"2\" />\n      <line x1=\"40\" y1=\"20\" x2=\"100\" y2=\"100\" stroke=\"#1e293b\" stroke-width=\"2\" />\n      <line x1=\"160\" y1=\"20\" x2=\"100\" y2=\"100\" stroke=\"#1e293b\" stroke-width=\"2\" />\n      \n      <text x=\"45\" y=\"38\" font-size=\"11\" fill=\"#2563eb\" font-weight=\"bold\">60°</text>\n      <text x=\"120\" y=\"55\" font-size=\"11\" fill=\"#2563eb\" font-weight=\"bold\">γ</text>\n      <text x=\"95\" y=\"115\" font-size=\"11\" fill=\"#2563eb\" font-weight=\"bold\">60°</text>\n    </svg>\n  </div>",
    "options": [
      "$60^\\circ$",
      "$50^\\circ$",
      "$70^\\circ$",
      "$80^\\circ$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>Using corresponding and alternate angles, the interior angles of the triangle formed at the bottom are $60^\\circ$, $60^\\circ$, and $\\gamma$:</p><p>$$\\gamma + 60^\\circ + 60^\\circ = 180^\\circ \\implies \\gamma = 60^\\circ$$</p></div>",
    "createdAt": "2026-05-17T13:18:38.364Z"
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
    "question": "Find the value of $\\theta$ in the diagram below:\n  <div style=\"display: flex; justify-content: center; margin: 16px 0;\">\n    <svg viewBox=\"0 0 200 120\" width=\"100%\" style=\"max-width: 250px; height: auto;\" xmlns=\"http://www.w3.org/2000/svg\">\n      <line x1=\"20\" y1=\"30\" x2=\"180\" y2=\"30\" stroke=\"#1e293b\" stroke-width=\"2\" />\n      <line x1=\"60\" y1=\"30\" x2=\"140\" y2=\"110\" stroke=\"#1e293b\" stroke-width=\"2\" />\n      <line x1=\"140\" y1=\"30\" x2=\"60\" y2=\"110\" stroke=\"#1e293b\" stroke-width=\"2\" />\n      \n      <text x=\"45\" y=\"45\" font-size=\"11\" fill=\"#2563eb\" font-weight=\"bold\">θ</text>\n      <text x=\"145\" y=\"45\" font-size=\"11\" fill=\"#2563eb\" font-weight=\"bold\">41°</text>\n      <text x=\"95\" y=\"105\" font-size=\"11\" fill=\"#2563eb\" font-weight=\"bold\">49°</text>\n    </svg>\n  </div>",
    "options": [
      "$90^\\circ$",
      "$80^\\circ$",
      "$100^\\circ$",
      "$95^\\circ$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>By angle sum of triangle, the third angle is:</p><p>$$180^\\circ - 41^\\circ - 49^\\circ = 90^\\circ$$</p><p>Since $\\theta$ is vertically opposite, $\\theta = 90^\\circ$.</p></div>",
    "createdAt": "2026-05-17T13:18:38.364Z"
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
    "question": "In the diagram below, lines $PQ \\parallel RS$. Find the value of $\\alpha$.\n  <div style=\"display: flex; justify-content: center; margin: 16px 0;\">\n    <svg viewBox=\"0 0 200 120\" width=\"100%\" style=\"max-width: 250px; height: auto;\" xmlns=\"http://www.w3.org/2000/svg\">\n      <line x1=\"20\" y1=\"20\" x2=\"180\" y2=\"20\" stroke=\"#1e293b\" stroke-width=\"2\" />\n      <line x1=\"20\" y1=\"90\" x2=\"180\" y2=\"90\" stroke=\"#1e293b\" stroke-width=\"2\" />\n      <line x1=\"50\" y1=\"20\" x2=\"120\" y2=\"90\" stroke=\"#1e293b\" stroke-width=\"2\" />\n      <line x1=\"150\" y1=\"20\" x2=\"120\" y2=\"90\" stroke=\"#1e293b\" stroke-width=\"2\" />\n      \n      <text x=\"35\" y=\"35\" font-size=\"11\" fill=\"#2563eb\" font-weight=\"bold\">60°</text>\n      <text x=\"145\" y=\"35\" font-size=\"11\" fill=\"#2563eb\" font-weight=\"bold\">β</text>\n      <text x=\"105\" y=\"85\" font-size=\"11\" fill=\"#2563eb\" font-weight=\"bold\">α</text>\n      <text x=\"135\" y=\"85\" font-size=\"11\" fill=\"#2563eb\" font-weight=\"bold\">70°</text>\n    </svg>\n  </div>",
    "options": [
      "$60^\\circ$",
      "$70^\\circ$",
      "$50^\\circ$",
      "$80^\\circ$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>By alternate interior angles between parallel lines $PQ \\parallel RS$:</p><p>$$\\alpha = 60^\\circ$$</p></div>",
    "createdAt": "2026-05-17T13:18:38.364Z"
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
    "question": "In the diagram below, lines $PQ \\parallel RS$. Find the value of $\\beta$.\n  <div style=\"display: flex; justify-content: center; margin: 16px 0;\">\n    <svg viewBox=\"0 0 200 120\" width=\"100%\" style=\"max-width: 250px; height: auto;\" xmlns=\"http://www.w3.org/2000/svg\">\n      <line x1=\"20\" y1=\"20\" x2=\"180\" y2=\"20\" stroke=\"#1e293b\" stroke-width=\"2\" />\n      <line x1=\"20\" y1=\"90\" x2=\"180\" y2=\"90\" stroke=\"#1e293b\" stroke-width=\"2\" />\n      <line x1=\"50\" y1=\"20\" x2=\"120\" y2=\"90\" stroke=\"#1e293b\" stroke-width=\"2\" />\n      <line x1=\"150\" y1=\"20\" x2=\"120\" y2=\"90\" stroke=\"#1e293b\" stroke-width=\"2\" />\n      \n      <text x=\"35\" y=\"35\" font-size=\"11\" fill=\"#2563eb\" font-weight=\"bold\">60°</text>\n      <text x=\"145\" y=\"35\" font-size=\"11\" fill=\"#2563eb\" font-weight=\"bold\">β</text>\n      <text x=\"105\" y=\"85\" font-size=\"11\" fill=\"#2563eb\" font-weight=\"bold\">α</text>\n      <text x=\"135\" y=\"85\" font-size=\"11\" fill=\"#2563eb\" font-weight=\"bold\">70°</text>\n    </svg>\n  </div>",
    "options": [
      "$50^\\circ$",
      "$60^\\circ$",
      "$70^\\circ$",
      "$45^\\circ$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>First, find $\\alpha = 60^\\circ$ and the third angle at the bottom which is $70^\\circ$. The bottom triangle has interior angles $\\alpha$, $70^\\circ$, and a third angle $x$:</p><p>$$x = 180^\\circ - 60^\\circ - 70^\\circ = 50^\\circ$$</p><p>By alternate interior angles, $\\beta = x = 50^\\circ$.</p></div>",
    "createdAt": "2026-05-17T13:18:38.364Z"
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
    "question": "In the diagram below, lines $PQ \\parallel RS$. Find the value of the third interior angle of the triangle formed at the intersection.",
    "options": [
      "$70^\\circ$",
      "$60^\\circ$",
      "$50^\\circ$",
      "$80^\\circ$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>The third interior angle at the bottom right vertex is alternate to the top right transversal angle, which is exactly $70^\\circ$.</p></div>",
    "createdAt": "2026-05-17T13:18:38.364Z"
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
    "question": "Find the value of $\\alpha$ in the diagram below using the exterior angle theorem:\n    <div style=\"display: flex; justify-content: center; margin: 16px 0;\">\n    <svg viewBox=\"20 10 160 130\" width=\"100%\" style=\"max-width: 280px; height: auto;\" xmlns=\"http://www.w3.org/2000/svg\">\n      <defs>\n        <marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"5\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n          <path d=\"M 0 0 L 10 5 L 0 10 z\" fill=\"#475569\" />\n        </marker>\n      </defs>\n      \n      <polygon points=\"100,30 40,120 160,120\" stroke=\"#1e293b\" stroke-width=\"2.5\" fill=\"#f8fafc\" stroke-linejoin=\"round\" />\n      \n      \n      <line x1=\"160\" y1=\"120\" x2=\"220\" y2=\"120\" stroke=\"#1e293b\" stroke-width=\"2\" /><text x=\"180\" y=\"110\" font-family=\"Outfit\" font-size=\"13\" font-weight=\"bold\" fill=\"#2563eb\">α</text>\n\n      <text x=\"100\" y=\"20\" font-family=\"Outfit, Inter, sans-serif\" font-size=\"14\" font-weight=\"bold\" fill=\"#0f172a\" text-anchor=\"middle\">A</text>\n      <text x=\"28\" y=\"136\" font-family=\"Outfit, Inter, sans-serif\" font-size=\"14\" font-weight=\"bold\" fill=\"#0f172a\" text-anchor=\"middle\">B</text>\n      <text x=\"172\" y=\"136\" font-family=\"Outfit, Inter, sans-serif\" font-size=\"14\" font-weight=\"bold\" fill=\"#0f172a\" text-anchor=\"middle\">C</text>\n\n      <text x=\"100\" y=\"55\" font-family=\"Outfit, Inter, sans-serif\" font-size=\"13\" fill=\"#2563eb\" font-weight=\"600\" text-anchor=\"middle\">60^°</text>\n      <text x=\"65\" y=\"110\" font-family=\"Outfit, Inter, sans-serif\" font-size=\"13\" fill=\"#2563eb\" font-weight=\"600\" text-anchor=\"middle\">60^°</text>\n      \n    </svg>\n  </div>",
    "options": [
      "$120^\\circ$",
      "$110^\\circ$",
      "$130^\\circ$",
      "$115^\\circ$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>By the exterior angle theorem:</p><p>$$\\alpha = 60^\\circ + 60^\\circ = 120^\\circ$$</p></div>",
    "createdAt": "2026-05-17T13:18:38.364Z"
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
    "question": "Find the value of $\\beta$ in the diagram below using the exterior angle theorem:\n    <div style=\"display: flex; justify-content: center; margin: 16px 0;\">\n    <svg viewBox=\"0 20 200 110\" width=\"100%\" style=\"max-width: 280px; height: auto;\" xmlns=\"http://www.w3.org/2000/svg\">\n      <defs>\n        <marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"5\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n          <path d=\"M 0 0 L 10 5 L 0 10 z\" fill=\"#475569\" />\n        </marker>\n      </defs>\n      \n      <polygon points=\"120,40 20,110 180,110\" stroke=\"#1e293b\" stroke-width=\"2.5\" fill=\"#f8fafc\" stroke-linejoin=\"round\" />\n      \n      \n      <line x1=\"20\" y1=\"110\" x2=\"200\" y2=\"70\" stroke=\"#1e293b\" stroke-width=\"2\" /><text x=\"130\" y=\"90\" font-family=\"Outfit\" font-size=\"13\" font-weight=\"bold\" fill=\"#2563eb\">β</text>\n\n      <text x=\"120\" y=\"30\" font-family=\"Outfit, Inter, sans-serif\" font-size=\"14\" font-weight=\"bold\" fill=\"#0f172a\" text-anchor=\"middle\">E</text>\n      <text x=\"8\" y=\"126\" font-family=\"Outfit, Inter, sans-serif\" font-size=\"14\" font-weight=\"bold\" fill=\"#0f172a\" text-anchor=\"middle\">T</text>\n      <text x=\"192\" y=\"126\" font-family=\"Outfit, Inter, sans-serif\" font-size=\"14\" font-weight=\"bold\" fill=\"#0f172a\" text-anchor=\"middle\">R</text>\n\n      <text x=\"120\" y=\"65\" font-family=\"Outfit, Inter, sans-serif\" font-size=\"13\" fill=\"#2563eb\" font-weight=\"600\" text-anchor=\"middle\">20^°</text>\n      <text x=\"45\" y=\"100\" font-family=\"Outfit, Inter, sans-serif\" font-size=\"13\" fill=\"#2563eb\" font-weight=\"600\" text-anchor=\"middle\">24^°</text>\n      \n    </svg>\n  </div>",
    "options": [
      "$44^\\circ$",
      "$34^\\circ$",
      "$54^\\circ$",
      "$40^\\circ$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>By the exterior angle theorem:</p><p>$$\\beta = 20^\\circ + 24^\\circ = 44^\\circ$$</p></div>",
    "createdAt": "2026-05-17T13:18:38.364Z"
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
    "question": "Find the value of $\\gamma$ in the diagram below using the exterior angle theorem:\n    <div style=\"display: flex; justify-content: center; margin: 16px 0;\">\n    <svg viewBox=\"10 10 160 130\" width=\"100%\" style=\"max-width: 280px; height: auto;\" xmlns=\"http://www.w3.org/2000/svg\">\n      <defs>\n        <marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"5\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n          <path d=\"M 0 0 L 10 5 L 0 10 z\" fill=\"#475569\" />\n        </marker>\n      </defs>\n      \n      <polygon points=\"30,30 150,120 30,120\" stroke=\"#1e293b\" stroke-width=\"2.5\" fill=\"#f8fafc\" stroke-linejoin=\"round\" />\n      \n      <path d=\"M 42 120 L 42 108 L 30 108\" stroke=\"#475569\" stroke-width=\"1.5\" fill=\"none\" />\n      <line x1=\"30\" y1=\"30\" x2=\"30\" y2=\"-20\" stroke=\"#1e293b\" stroke-width=\"2\" /><text x=\"15\" y=\"10\" font-size=\"12\" fill=\"#2563eb\" font-weight=\"bold\">121°</text>\n\n      <text x=\"30\" y=\"20\" font-family=\"Outfit, Inter, sans-serif\" font-size=\"14\" font-weight=\"bold\" fill=\"#0f172a\" text-anchor=\"middle\">N</text>\n      <text x=\"138\" y=\"136\" font-family=\"Outfit, Inter, sans-serif\" font-size=\"14\" font-weight=\"bold\" fill=\"#0f172a\" text-anchor=\"middle\">G</text>\n      <text x=\"42\" y=\"136\" font-family=\"Outfit, Inter, sans-serif\" font-size=\"14\" font-weight=\"bold\" fill=\"#0f172a\" text-anchor=\"middle\">E</text>\n\n      \n      <text x=\"175\" y=\"110\" font-family=\"Outfit, Inter, sans-serif\" font-size=\"13\" fill=\"#2563eb\" font-weight=\"600\" text-anchor=\"middle\">γ</text>\n      \n    </svg>\n  </div>",
    "options": [
      "$31^\\circ$",
      "$21^\\circ$",
      "$41^\\circ$",
      "$35^\\circ$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>By the exterior angle theorem:</p><p>$$121^\\circ = 90^\\circ + \\gamma \\implies \\gamma = 31^\\circ$$</p></div>",
    "createdAt": "2026-05-17T13:18:38.364Z"
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
    "question": "Find the value of $\\theta$ in the diagram below using the exterior angle theorem:\n    <div style=\"display: flex; justify-content: center; margin: 16px 0;\">\n    <svg viewBox=\"20 10 160 130\" width=\"100%\" style=\"max-width: 280px; height: auto;\" xmlns=\"http://www.w3.org/2000/svg\">\n      <defs>\n        <marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"5\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n          <path d=\"M 0 0 L 10 5 L 0 10 z\" fill=\"#475569\" />\n        </marker>\n      </defs>\n      \n      <polygon points=\"100,30 40,120 160,120\" stroke=\"#1e293b\" stroke-width=\"2.5\" fill=\"#f8fafc\" stroke-linejoin=\"round\" />\n      \n      \n      <line x1=\"100\" y1=\"30\" x2=\"140\" y2=\"-10\" stroke=\"#1e293b\" stroke-width=\"2\" /><text x=\"110\" y=\"10\" font-size=\"12\" fill=\"#2563eb\" font-weight=\"bold\">70°</text>\n\n      <text x=\"100\" y=\"20\" font-family=\"Outfit, Inter, sans-serif\" font-size=\"14\" font-weight=\"bold\" fill=\"#0f172a\" text-anchor=\"middle\">R</text>\n      <text x=\"28\" y=\"136\" font-family=\"Outfit, Inter, sans-serif\" font-size=\"14\" font-weight=\"bold\" fill=\"#0f172a\" text-anchor=\"middle\">D</text>\n      <text x=\"172\" y=\"136\" font-family=\"Outfit, Inter, sans-serif\" font-size=\"14\" font-weight=\"bold\" fill=\"#0f172a\" text-anchor=\"middle\">E</text>\n\n      \n      <text x=\"65\" y=\"110\" font-family=\"Outfit, Inter, sans-serif\" font-size=\"13\" fill=\"#2563eb\" font-weight=\"600\" text-anchor=\"middle\">θ</text>\n      <text x=\"135\" y=\"110\" font-family=\"Outfit, Inter, sans-serif\" font-size=\"13\" fill=\"#2563eb\" font-weight=\"600\" text-anchor=\"middle\">43^°</text>\n    </svg>\n  </div>",
    "options": [
      "$27^\\circ$",
      "$37^\\circ$",
      "$17^\\circ$",
      "$30^\\circ$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>By the exterior angle theorem:</p><p>$$70^\\circ = \\theta + 43^\\circ \\implies \\theta = 27^\\circ$$</p></div>",
    "createdAt": "2026-05-17T13:18:38.364Z"
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
    "question": "Use the exterior angle theorem to find the value of $\\alpha$ in the diagram below:\n  <div style=\"display: flex; justify-content: center; margin: 16px 0;\">\n    <svg viewBox=\"10 10 160 130\" width=\"100%\" style=\"max-width: 280px; height: auto;\" xmlns=\"http://www.w3.org/2000/svg\">\n      <defs>\n        <marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"5\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n          <path d=\"M 0 0 L 10 5 L 0 10 z\" fill=\"#475569\" />\n        </marker>\n      </defs>\n      \n      <polygon points=\"30,30 150,120 30,120\" stroke=\"#1e293b\" stroke-width=\"2.5\" fill=\"#f8fafc\" stroke-linejoin=\"round\" />\n      \n      <path d=\"M 42 120 L 42 108 L 30 108\" stroke=\"#475569\" stroke-width=\"1.5\" fill=\"none\" />\n      <line x1=\"30\" y1=\"120\" x2=\"-20\" y2=\"120\" stroke=\"#1e293b\" stroke-width=\"2\" /><text x=\"-15\" y=\"110\" font-family=\"Outfit\" font-size=\"13\" font-weight=\"bold\" fill=\"#2563eb\">α</text>\n\n      <text x=\"30\" y=\"20\" font-family=\"Outfit, Inter, sans-serif\" font-size=\"14\" font-weight=\"bold\" fill=\"#0f172a\" text-anchor=\"middle\">M</text>\n      <text x=\"138\" y=\"136\" font-family=\"Outfit, Inter, sans-serif\" font-size=\"14\" font-weight=\"bold\" fill=\"#0f172a\" text-anchor=\"middle\">T</text>\n      <text x=\"42\" y=\"136\" font-family=\"Outfit, Inter, sans-serif\" font-size=\"14\" font-weight=\"bold\" fill=\"#0f172a\" text-anchor=\"middle\">O</text>\n\n      \n      <text x=\"175\" y=\"110\" font-family=\"Outfit, Inter, sans-serif\" font-size=\"13\" fill=\"#2563eb\" font-weight=\"600\" text-anchor=\"middle\">37^°</text>\n      \n    </svg>\n  </div>",
    "options": [
      "$127^\\circ$",
      "$117^\\circ$",
      "$137^\\circ$",
      "$120^\\circ$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>$$\\alpha = 90^\\circ + 37^\\circ = 127^\\circ$$</p></div>",
    "createdAt": "2026-05-17T13:18:38.364Z"
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
    "question": "Find the value of $\\beta$ in the diagram below:\n  <div style=\"display: flex; justify-content: center; margin: 16px 0;\">\n    <svg viewBox=\"0 0 200 140\" width=\"100%\" style=\"max-width: 250px; height: auto;\" xmlns=\"http://www.w3.org/2000/svg\">\n      <polygon points=\"30,100 150,100 90,30\" stroke=\"#1e293b\" stroke-width=\"2\" fill=\"none\" />\n      <line x1=\"30\" y1=\"100\" x2=\"-10\" y2=\"100\" stroke=\"#1e293b\" stroke-width=\"2\" />\n      <line x1=\"150\" y1=\"100\" x2=\"190\" y2=\"60\" stroke=\"#1e293b\" stroke-width=\"2\" />\n      \n      <text x=\"35\" y=\"95\" font-size=\"11\" fill=\"#2563eb\" font-weight=\"bold\">71°</text>\n      <text x=\"145\" y=\"95\" font-size=\"11\" fill=\"#2563eb\" font-weight=\"bold\">β</text>\n      <text x=\"95\" y=\"115\" font-size=\"11\" fill=\"#2563eb\" font-weight=\"bold\">81°</text>\n    </svg>\n  </div>",
    "options": [
      "$10^\\circ$",
      "$20^\\circ$",
      "$15^\\circ$",
      "$5^\\circ$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>By the exterior angle theorem:</p><p>$$81^\\circ = 71^\\circ + \\beta \\implies \\beta = 10^\\circ$$</p></div>",
    "createdAt": "2026-05-17T13:18:38.364Z"
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
    "question": "Find the value of $\\gamma$ in the diagram below:\n  <div style=\"display: flex; justify-content: center; margin: 16px 0;\">\n    <svg viewBox=\"0 0 200 120\" width=\"100%\" style=\"max-width: 250px; height: auto;\" xmlns=\"http://www.w3.org/2000/svg\">\n      <polygon points=\"50,90 150,90 100,30\" stroke=\"#1e293b\" stroke-width=\"2\" fill=\"none\" />\n      <line x1=\"50\" y1=\"90\" x2=\"10\" y2=\"90\" stroke=\"#1e293b\" stroke-width=\"2\" />\n      <line x1=\"150\" y1=\"90\" x2=\"190\" y2=\"90\" stroke=\"#1e293b\" stroke-width=\"2\" />\n      \n      <text x=\"25\" y=\"85\" font-size=\"11\" fill=\"#2563eb\" font-weight=\"bold\">157°</text>\n      <text x=\"160\" y=\"85\" font-size=\"11\" fill=\"#2563eb\" font-weight=\"bold\">140°</text>\n      <text x=\"95\" y=\"45\" font-size=\"11\" fill=\"#2563eb\" font-weight=\"bold\">γ</text>\n    </svg>\n  </div>",
    "options": [
      "$117^\\circ$",
      "$127^\\circ$",
      "$107^\\circ$",
      "$137^\\circ$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>First find interior angles: $180^\\circ - 157^\\circ = 23^\\circ$ and $180^\\circ - 140^\\circ = 40^\\circ$. Using angle sum of a triangle:</p><p>$$\\gamma = 180^\\circ - (23^\\circ + 40^\\circ) = 117^\\circ$$</p></div>",
    "createdAt": "2026-05-17T13:18:38.364Z"
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
    "question": "Find the value of $\\theta$ in the diagram below:\n  <div style=\"display: flex; justify-content: center; margin: 16px 0;\">\n    <svg viewBox=\"20 10 160 130\" width=\"100%\" style=\"max-width: 280px; height: auto;\" xmlns=\"http://www.w3.org/2000/svg\">\n      <defs>\n        <marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"5\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n          <path d=\"M 0 0 L 10 5 L 0 10 z\" fill=\"#475569\" />\n        </marker>\n      </defs>\n      \n      <polygon points=\"100,30 40,120 160,120\" stroke=\"#1e293b\" stroke-width=\"2.5\" fill=\"#f8fafc\" stroke-linejoin=\"round\" />\n      \n      \n      <line x1=\"40\" y1=\"120\" x2=\"10\" y2=\"150\" stroke=\"#1e293b\" stroke-width=\"2\" /><text x=\"15\" y=\"110\" font-family=\"Outfit\" font-size=\"13\" font-weight=\"bold\" fill=\"#2563eb\">77°</text>\n\n      <text x=\"100\" y=\"20\" font-family=\"Outfit, Inter, sans-serif\" font-size=\"14\" font-weight=\"bold\" fill=\"#0f172a\" text-anchor=\"middle\">J</text>\n      <text x=\"28\" y=\"136\" font-family=\"Outfit, Inter, sans-serif\" font-size=\"14\" font-weight=\"bold\" fill=\"#0f172a\" text-anchor=\"middle\">K</text>\n      <text x=\"172\" y=\"136\" font-family=\"Outfit, Inter, sans-serif\" font-size=\"14\" font-weight=\"bold\" fill=\"#0f172a\" text-anchor=\"middle\">L</text>\n\n      <text x=\"100\" y=\"55\" font-family=\"Outfit, Inter, sans-serif\" font-size=\"13\" fill=\"#2563eb\" font-weight=\"600\" text-anchor=\"middle\">20^°</text>\n      \n      <text x=\"135\" y=\"110\" font-family=\"Outfit, Inter, sans-serif\" font-size=\"13\" fill=\"#2563eb\" font-weight=\"600\" text-anchor=\"middle\">θ</text>\n    </svg>\n  </div>",
    "options": [
      "$57^\\circ$",
      "$67^\\circ$",
      "$47^\\circ$",
      "$60^\\circ$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>$$77^\\circ = 20^\\circ + \\theta \\implies \\theta = 57^\\circ$$</p></div>",
    "createdAt": "2026-05-17T13:18:38.364Z"
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
      "Yes, in an obtuse-angled scalene triangle.",
      "Yes, but only in an isosceles triangle.",
      "No, because a triangle can only have at most one right angle."
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>An obtuse angle is strictly greater than $90^\\circ$. Two obtuse angles would sum to more than $180^\\circ$, which is impossible for any triangle.</p></div>",
    "createdAt": "2026-05-17T13:18:38.364Z"
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
    "solution": "<div style=\"text-align: left;\"><p>Two right angles would sum to $90^\\circ + 90^\\circ = 180^\\circ$. This leaves exactly $0^\\circ$ for the third angle, making it impossible to form a closed three-sided triangle.</p></div>",
    "createdAt": "2026-05-17T13:18:38.364Z"
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
    "solution": "<div style=\"text-align: left;\"><p>Since a triangle can have at most one right or obtuse angle, the remaining two angles must be acute ($< 90^\\circ$). Therefore, every triangle must have at least $2$ acute angles.</p></div>",
    "createdAt": "2026-05-17T13:18:38.364Z"
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
    "question": "Can a triangle have an acute exterior angle?",
    "options": [
      "Yes, if the corresponding interior angle is obtuse.",
      "No, because exterior angles are always obtuse.",
      "Yes, but only in right-angled triangles.",
      "No, because all exterior angles sum to $360^\\circ$."
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>Yes. If the corresponding interior angle is obtuse ($> 90^\\circ$), then the exterior angle (which is supplementary, $180^\\circ - \\text{interior}$) will be acute ($< 90^\\circ$).</p></div>",
    "createdAt": "2026-05-17T13:18:38.364Z"
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
    "question": "Can a triangle have two acute exterior angles?",
    "options": [
      "No, because a triangle can have at most one obtuse interior angle.",
      "Yes, in an acute-angled triangle.",
      "Yes, in a right-angled triangle.",
      "No, because all exterior angles must be obtuse."
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>An acute exterior angle requires an obtuse interior angle. Since a triangle can have at most one obtuse interior angle, it can have at most one acute exterior angle.</p></div>",
    "createdAt": "2026-05-17T13:18:38.364Z"
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
    "question": "Find the value of $\\alpha$ in the diagram below:\n  <div style=\"display: flex; justify-content: center; margin: 16px 0;\">\n    <svg viewBox=\"0 0 200 140\" width=\"100%\" style=\"max-width: 250px; height: auto;\" xmlns=\"http://www.w3.org/2000/svg\">\n      <polygon points=\"40,110 160,110 100,30\" stroke=\"#1e293b\" stroke-width=\"2\" fill=\"none\" />\n      <line x1=\"100\" y1=\"30\" x2=\"140\" y2=\"-10\" stroke=\"#1e293b\" stroke-width=\"2\" />\n      <text x=\"80\" y=\"45\" font-size=\"11\" fill=\"#2563eb\" font-weight=\"bold\">112°</text>\n      <text x=\"45\" y=\"105\" font-size=\"11\" fill=\"#2563eb\" font-weight=\"bold\">β</text>\n      <text x=\"115\" y=\"105\" font-size=\"11\" fill=\"#2563eb\" font-weight=\"bold\">α</text>\n      <text x=\"145\" y=\"125\" font-size=\"11\" fill=\"#2563eb\" font-weight=\"bold\">108°</text>\n    </svg>\n  </div>",
    "options": [
      "$72^\\circ$",
      "$68^\\circ$",
      "$40^\\circ$",
      "$80^\\circ$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>Angles on a straight line sum to $180^\\circ$:</p><p>$$\\alpha + 108^\\circ = 180^\\circ \\implies \\alpha = 72^\\circ$$</p></div>",
    "createdAt": "2026-05-17T13:18:38.364Z"
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
    "question": "Find the value of $\\beta$ in the diagram below:\n  <div style=\"display: flex; justify-content: center; margin: 16px 0;\">\n    <svg viewBox=\"0 0 200 140\" width=\"100%\" style=\"max-width: 250px; height: auto;\" xmlns=\"http://www.w3.org/2000/svg\">\n      <polygon points=\"40,110 160,110 100,30\" stroke=\"#1e293b\" stroke-width=\"2\" fill=\"none\" />\n      <line x1=\"100\" y1=\"30\" x2=\"140\" y2=\"-10\" stroke=\"#1e293b\" stroke-width=\"2\" />\n      <text x=\"80\" y=\"45\" font-size=\"11\" fill=\"#2563eb\" font-weight=\"bold\">112°</text>\n      <text x=\"45\" y=\"105\" font-size=\"11\" fill=\"#2563eb\" font-weight=\"bold\">β</text>\n      <text x=\"115\" y=\"105\" font-size=\"11\" fill=\"#2563eb\" font-weight=\"bold\">α</text>\n      <text x=\"145\" y=\"125\" font-size=\"11\" fill=\"#2563eb\" font-weight=\"bold\">108°</text>\n    </svg>\n  </div>",
    "options": [
      "$40^\\circ$",
      "$68^\\circ$",
      "$72^\\circ$",
      "$50^\\circ$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>First find the top interior angle: $180^\\circ - 112^\\circ = 68^\\circ$. We found $\\alpha = 72^\\circ$. By angle sum of a triangle:</p><p>$$\\beta = 180^\\circ - (68^\\circ + 72^\\circ) = 40^\\circ$$</p></div>",
    "createdAt": "2026-05-17T13:18:38.364Z"
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
    "question": "Find the value of $\\theta$ in the diagram below:\n  <div style=\"display: flex; justify-content: center; margin: 16px 0;\">\n    <svg viewBox=\"0 0 200 140\" width=\"100%\" style=\"max-width: 250px; height: auto;\" xmlns=\"http://www.w3.org/2000/svg\">\n      <polygon points=\"40,110 160,110 100,30\" stroke=\"#1e293b\" stroke-width=\"2\" fill=\"none\" />\n      <text x=\"45\" y=\"105\" font-size=\"11\" fill=\"#2563eb\" font-weight=\"bold\">65°</text>\n      <text x=\"115\" y=\"105\" font-size=\"11\" fill=\"#2563eb\" font-weight=\"bold\">40°</text>\n      <text x=\"95\" y=\"45\" font-size=\"11\" fill=\"#2563eb\" font-weight=\"bold\">θ</text>\n      <text x=\"95\" y=\"15\" font-size=\"11\" fill=\"#2563eb\" font-weight=\"bold\">γ</text>\n    </svg>\n  </div>",
    "options": [
      "$75^\\circ$",
      "$85^\\circ$",
      "$65^\\circ$",
      "$70^\\circ$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>By angle sum of triangle:</p><p>$$\\theta = 180^\\circ - (65^\\circ + 40^\\circ) = 75^\\circ$$</p></div>",
    "createdAt": "2026-05-17T13:18:38.364Z"
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
    "question": "Find the value of $\\gamma$ in the diagram below:",
    "options": [
      "$105^\\circ$",
      "$115^\\circ$",
      "$95^\\circ$",
      "$120^\\circ$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>Angles on a straight line sum to $180^\\circ$:</p><p>$$\\gamma + \\theta = 180^\\circ \\implies \\gamma + 75^\\circ = 180^\\circ \\implies \\gamma = 105^\\circ$$</p></div>",
    "createdAt": "2026-05-17T13:18:38.364Z"
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
    "question": "Find the value of $\\alpha$ in the right-angled triangle below:\n  <div style=\"display: flex; justify-content: center; margin: 16px 0;\">\n    <svg viewBox=\"0 0 200 140\" width=\"100%\" style=\"max-width: 250px; height: auto;\" xmlns=\"http://www.w3.org/2000/svg\">\n      <polygon points=\"40,110 160,110 40,30\" stroke=\"#1e293b\" stroke-width=\"2\" fill=\"none\" />\n      <path d=\"M 40 100 L 50 100 L 50 110\" stroke=\"#475569\" stroke-width=\"1.5\" fill=\"none\" />\n      <text x=\"30\" y=\"25\" font-size=\"11\" fill=\"#2563eb\" font-weight=\"bold\">α</text>\n      <text x=\"145\" y=\"105\" font-size=\"11\" fill=\"#2563eb\" font-weight=\"bold\">45°</text>\n    </svg>\n  </div>",
    "options": [
      "$45^\\circ$",
      "$35^\\circ$",
      "$55^\\circ$",
      "$50^\\circ$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>By angle sum of right-angled triangle:</p><p>$$\\alpha = 90^\\circ - 45^\\circ = 45^\\circ$$</p></div>",
    "createdAt": "2026-05-17T13:18:38.364Z"
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
    "question": "Find the value of $\\gamma$ in the diagram below:\n  <div style=\"display: flex; justify-content: center; margin: 16px 0;\">\n    <svg viewBox=\"0 0 200 140\" width=\"100%\" style=\"max-width: 250px; height: auto;\" xmlns=\"http://www.w3.org/2000/svg\">\n      <polygon points=\"40,110 160,110 100,30\" stroke=\"#1e293b\" stroke-width=\"2\" fill=\"none\" />\n      <text x=\"45\" y=\"105\" font-size=\"11\" fill=\"#2563eb\" font-weight=\"bold\">60°</text>\n      <text x=\"115\" y=\"105\" font-size=\"11\" fill=\"#2563eb\" font-weight=\"bold\">50°</text>\n      <text x=\"95\" y=\"45\" font-size=\"11\" fill=\"#2563eb\" font-weight=\"bold\">γ</text>\n    </svg>\n  </div>",
    "options": [
      "$70^\\circ$",
      "$60^\\circ$",
      "$80^\\circ$",
      "$75^\\circ$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>By angle sum of triangle:</p><p>$$\\gamma = 180^\\circ - (60^\\circ + 50^\\circ) = 70^\\circ$$</p></div>",
    "createdAt": "2026-05-17T13:18:38.364Z"
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
    "question": "Find the value of $\\theta$ in the isosceles triangle below:\n  <div style=\"display: flex; justify-content: center; margin: 16px 0;\">\n    <svg viewBox=\"0 0 200 140\" width=\"100%\" style=\"max-width: 250px; height: auto;\" xmlns=\"http://www.w3.org/2000/svg\">\n      <polygon points=\"40,110 160,110 100,30\" stroke=\"#1e293b\" stroke-width=\"2\" fill=\"none\" />\n      <text x=\"45\" y=\"105\" font-size=\"11\" fill=\"#2563eb\" font-weight=\"bold\">θ</text>\n      <text x=\"115\" y=\"105\" font-size=\"11\" fill=\"#2563eb\" font-weight=\"bold\">θ</text>\n      <text x=\"95\" y=\"15\" font-size=\"11\" fill=\"#2563eb\" font-weight=\"bold\">110°</text>\n    </svg>\n  </div>",
    "options": [
      "$55^\\circ$",
      "$45^\\circ$",
      "$65^\\circ$",
      "$50^\\circ$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>By exterior angle theorem, the exterior angle is equal to the sum of opposite interior angles:</p><p>$$\\theta + \\theta = 110^\\circ \\implies 2\\theta = 110^\\circ \\implies \\theta = 55^\\circ$$</p></div>",
    "createdAt": "2026-05-17T13:18:38.364Z"
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
    "question": "In the diagram below, find the value of $\\alpha$.\n  <div style=\"display: flex; justify-content: center; margin: 16px 0;\">\n    <svg viewBox=\"0 0 200 120\" width=\"100%\" style=\"max-width: 250px; height: auto;\" xmlns=\"http://www.w3.org/2000/svg\">\n      <line x1=\"20\" y1=\"30\" x2=\"180\" y2=\"30\" stroke=\"#1e293b\" stroke-width=\"2.5\" />\n      <line x1=\"20\" y1=\"90\" x2=\"180\" y2=\"90\" stroke=\"#1e293b\" stroke-width=\"2.5\" />\n      <line x1=\"60\" y1=\"90\" x2=\"140\" y2=\"30\" stroke=\"#1e293b\" stroke-width=\"2\" />\n      \n      <text x=\"50\" y=\"85\" font-size=\"11\" fill=\"#2563eb\" font-weight=\"bold\">65°</text>\n      <text x=\"145\" y=\"45\" font-size=\"11\" fill=\"#2563eb\" font-weight=\"bold\">α</text>\n    </svg>\n  </div>",
    "options": [
      "$65^\\circ$",
      "$115^\\circ$",
      "$75^\\circ$",
      "$55^\\circ$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>By alternate interior angles between parallel lines:</p><p>$$\\alpha = 65^\\circ$$</p></div>",
    "createdAt": "2026-05-17T13:18:38.364Z"
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
    "question": "In the sailboat style double triangle shown below, find the value of $\\alpha$.\n  <div style=\"display: flex; justify-content: center; margin: 16px 0;\">\n    <svg viewBox=\"0 0 200 140\" width=\"100%\" style=\"max-width: 250px; height: auto;\" xmlns=\"http://www.w3.org/2000/svg\">\n      <polygon points=\"30,110 170,110 100,20\" stroke=\"#1e293b\" stroke-width=\"2.5\" fill=\"none\" />\n      <line x1=\"100\" y1=\"20\" x2=\"100\" y2=\"110\" stroke=\"#1e293b\" stroke-width=\"1.5\" />\n      \n      <text x=\"45\" y=\"105\" font-size=\"11\" fill=\"#2563eb\" font-weight=\"bold\">38°</text>\n      <text x=\"145\" y=\"105\" font-size=\"11\" fill=\"#2563eb\" font-weight=\"bold\">52°</text>\n      <text x=\"85\" y=\"40\" font-size=\"11\" fill=\"#2563eb\" font-weight=\"bold\">α</text>\n    </svg>\n  </div>",
    "options": [
      "$90^\\circ$",
      "$80^\\circ$",
      "$100^\\circ$",
      "$95^\\circ$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>The vertical altitude line is perpendicular to the base, forming two right-angled triangles. Thus:</p><p>$$\\alpha = 90^\\circ$$</p></div>",
    "createdAt": "2026-05-17T13:18:38.364Z"
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
    "question": "In the intersecting triangle diagram below, find the value of $\\alpha$.\n  <div style=\"display: flex; justify-content: center; margin: 16px 0;\">\n    <svg viewBox=\"0 0 200 140\" width=\"100%\" style=\"max-width: 250px; height: auto;\" xmlns=\"http://www.w3.org/2000/svg\">\n      <polygon points=\"30,110 170,110 100,20\" stroke=\"#1e293b\" stroke-width=\"2.5\" fill=\"none\" />\n      <line x1=\"30\" y1=\"110\" x2=\"130\" y2=\"60\" stroke=\"#1e293b\" stroke-width=\"1.5\" />\n      \n      <text x=\"45\" y=\"105\" font-size=\"11\" fill=\"#2563eb\" font-weight=\"bold\">45°</text>\n      <text x=\"145\" y=\"105\" font-size=\"11\" fill=\"#2563eb\" font-weight=\"bold\">55°</text>\n      <text x=\"110\" y=\"80\" font-size=\"11\" fill=\"#2563eb\" font-weight=\"bold\">α</text>\n    </svg>\n  </div>",
    "options": [
      "$80^\\circ$",
      "$75^\\circ$",
      "$85^\\circ$",
      "$90^\\circ$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>By the interior angle sum of the large triangle, the top angle is:</p><p>$$180^\\circ - (45^\\circ + 55^\\circ) = 80^\\circ$$</p></div>",
    "createdAt": "2026-05-17T13:18:38.364Z"
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
    "question": "Find the value of $\\alpha$ in the right-angled triangle below:\n  <div style=\"display: flex; justify-content: center; margin: 16px 0;\">\n    <svg viewBox=\"10 10 160 130\" width=\"100%\" style=\"max-width: 280px; height: auto;\" xmlns=\"http://www.w3.org/2000/svg\">\n      <defs>\n        <marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"5\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n          <path d=\"M 0 0 L 10 5 L 0 10 z\" fill=\"#475569\" />\n        </marker>\n      </defs>\n      \n      <polygon points=\"30,30 150,120 30,120\" stroke=\"#1e293b\" stroke-width=\"2.5\" fill=\"#f8fafc\" stroke-linejoin=\"round\" />\n      \n      <path d=\"M 42 120 L 42 108 L 30 108\" stroke=\"#475569\" stroke-width=\"1.5\" fill=\"none\" />\n      \n\n      <text x=\"30\" y=\"20\" font-family=\"Outfit, Inter, sans-serif\" font-size=\"14\" font-weight=\"bold\" fill=\"#0f172a\" text-anchor=\"middle\">A</text>\n      <text x=\"138\" y=\"136\" font-family=\"Outfit, Inter, sans-serif\" font-size=\"14\" font-weight=\"bold\" fill=\"#0f172a\" text-anchor=\"middle\">C</text>\n      <text x=\"42\" y=\"136\" font-family=\"Outfit, Inter, sans-serif\" font-size=\"14\" font-weight=\"bold\" fill=\"#0f172a\" text-anchor=\"middle\">B</text>\n\n      <text x=\"30\" y=\"55\" font-family=\"Outfit, Inter, sans-serif\" font-size=\"13\" fill=\"#2563eb\" font-weight=\"600\" text-anchor=\"middle\">α</text>\n      <text x=\"175\" y=\"110\" font-family=\"Outfit, Inter, sans-serif\" font-size=\"13\" fill=\"#2563eb\" font-weight=\"600\" text-anchor=\"middle\">2α</text>\n      \n    </svg>\n  </div>",
    "options": [
      "$30^\\circ$",
      "$20^\\circ$",
      "$40^\\circ$",
      "$25^\\circ$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>$$\\alpha + 2\\alpha = 90^\\circ \\implies 3\\alpha = 90^\\circ \\implies \\alpha = 30^\\circ$$</p></div>",
    "createdAt": "2026-05-17T13:18:38.364Z"
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
    "question": "Find the value of $\\beta$ in the triangle below:\n  <div style=\"display: flex; justify-content: center; margin: 16px 0;\">\n    <svg viewBox=\"20 10 160 130\" width=\"100%\" style=\"max-width: 280px; height: auto;\" xmlns=\"http://www.w3.org/2000/svg\">\n      <defs>\n        <marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"5\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n          <path d=\"M 0 0 L 10 5 L 0 10 z\" fill=\"#475569\" />\n        </marker>\n      </defs>\n      \n      <polygon points=\"100,30 40,120 160,120\" stroke=\"#1e293b\" stroke-width=\"2.5\" fill=\"#f8fafc\" stroke-linejoin=\"round\" />\n      \n      \n      \n\n      <text x=\"100\" y=\"20\" font-family=\"Outfit, Inter, sans-serif\" font-size=\"14\" font-weight=\"bold\" fill=\"#0f172a\" text-anchor=\"middle\">P</text>\n      <text x=\"28\" y=\"136\" font-family=\"Outfit, Inter, sans-serif\" font-size=\"14\" font-weight=\"bold\" fill=\"#0f172a\" text-anchor=\"middle\">R</text>\n      <text x=\"172\" y=\"136\" font-family=\"Outfit, Inter, sans-serif\" font-size=\"14\" font-weight=\"bold\" fill=\"#0f172a\" text-anchor=\"middle\">Q</text>\n\n      <text x=\"100\" y=\"55\" font-family=\"Outfit, Inter, sans-serif\" font-size=\"13\" fill=\"#2563eb\" font-weight=\"600\" text-anchor=\"middle\">β + 10^°</text>\n      <text x=\"65\" y=\"110\" font-family=\"Outfit, Inter, sans-serif\" font-size=\"13\" fill=\"#2563eb\" font-weight=\"600\" text-anchor=\"middle\">110^°</text>\n      <text x=\"135\" y=\"110\" font-family=\"Outfit, Inter, sans-serif\" font-size=\"13\" fill=\"#2563eb\" font-weight=\"600\" text-anchor=\"middle\">β</text>\n    </svg>\n  </div>",
    "options": [
      "$30^\\circ$",
      "$40^\\circ$",
      "$20^\\circ$",
      "$35^\\circ$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>$$110^\\circ + \\beta + (\\beta + 10^\\circ) = 180^\\circ \\implies 2\\beta + 120^\\circ = 180^\\circ \\implies 2\\beta = 60^\\circ \\implies \\beta = 30^\\circ$$</p></div>",
    "createdAt": "2026-05-17T13:18:38.364Z"
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
    "question": "Find the value of $\\gamma$ in the equilateral triangle below:\n  <div style=\"display: flex; justify-content: center; margin: 16px 0;\">\n    <svg viewBox=\"20 10 160 130\" width=\"100%\" style=\"max-width: 280px; height: auto;\" xmlns=\"http://www.w3.org/2000/svg\">\n      <defs>\n        <marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"5\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n          <path d=\"M 0 0 L 10 5 L 0 10 z\" fill=\"#475569\" />\n        </marker>\n      </defs>\n      \n      <polygon points=\"100,30 40,120 160,120\" stroke=\"#1e293b\" stroke-width=\"2.5\" fill=\"#f8fafc\" stroke-linejoin=\"round\" />\n      \n      \n      \n\n      <text x=\"100\" y=\"20\" font-family=\"Outfit, Inter, sans-serif\" font-size=\"14\" font-weight=\"bold\" fill=\"#0f172a\" text-anchor=\"middle\">X</text>\n      <text x=\"28\" y=\"136\" font-family=\"Outfit, Inter, sans-serif\" font-size=\"14\" font-weight=\"bold\" fill=\"#0f172a\" text-anchor=\"middle\">Y</text>\n      <text x=\"172\" y=\"136\" font-family=\"Outfit, Inter, sans-serif\" font-size=\"14\" font-weight=\"bold\" fill=\"#0f172a\" text-anchor=\"middle\">Z</text>\n\n      <text x=\"100\" y=\"55\" font-family=\"Outfit, Inter, sans-serif\" font-size=\"13\" fill=\"#2563eb\" font-weight=\"600\" text-anchor=\"middle\">γ</text>\n      <text x=\"65\" y=\"110\" font-family=\"Outfit, Inter, sans-serif\" font-size=\"13\" fill=\"#2563eb\" font-weight=\"600\" text-anchor=\"middle\">γ</text>\n      <text x=\"135\" y=\"110\" font-family=\"Outfit, Inter, sans-serif\" font-size=\"13\" fill=\"#2563eb\" font-weight=\"600\" text-anchor=\"middle\">γ</text>\n    </svg>\n  </div>",
    "options": [
      "$60^\\circ$",
      "$50^\\circ$",
      "$70^\\circ$",
      "$90^\\circ$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>$$3\\gamma = 180^\\circ \\implies \\gamma = 60^\\circ$$</p></div>",
    "createdAt": "2026-05-17T13:18:38.364Z"
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
    "question": "Find the value of $\\theta$ in the isosceles triangle below:\n  <div style=\"display: flex; justify-content: center; margin: 16px 0;\">\n    <svg viewBox=\"20 10 160 130\" width=\"100%\" style=\"max-width: 280px; height: auto;\" xmlns=\"http://www.w3.org/2000/svg\">\n      <defs>\n        <marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"5\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n          <path d=\"M 0 0 L 10 5 L 0 10 z\" fill=\"#475569\" />\n        </marker>\n      </defs>\n      \n      <polygon points=\"100,30 40,120 160,120\" stroke=\"#1e293b\" stroke-width=\"2.5\" fill=\"#f8fafc\" stroke-linejoin=\"round\" />\n      \n      \n      <line x1=\"100\" y1=\"30\" x2=\"100\" y2=\"-20\" stroke=\"#1e293b\" stroke-width=\"2\" /><text x=\"115\" y=\"10\" font-size=\"12\" fill=\"#2563eb\" font-weight=\"bold\">100°</text>\n\n      <text x=\"100\" y=\"20\" font-family=\"Outfit, Inter, sans-serif\" font-size=\"14\" font-weight=\"bold\" fill=\"#0f172a\" text-anchor=\"middle\">F</text>\n      <text x=\"28\" y=\"136\" font-family=\"Outfit, Inter, sans-serif\" font-size=\"14\" font-weight=\"bold\" fill=\"#0f172a\" text-anchor=\"middle\">I</text>\n      <text x=\"172\" y=\"136\" font-family=\"Outfit, Inter, sans-serif\" font-size=\"14\" font-weight=\"bold\" fill=\"#0f172a\" text-anchor=\"middle\">S</text>\n\n      \n      <text x=\"65\" y=\"110\" font-family=\"Outfit, Inter, sans-serif\" font-size=\"13\" fill=\"#2563eb\" font-weight=\"600\" text-anchor=\"middle\">θ</text>\n      <text x=\"135\" y=\"110\" font-family=\"Outfit, Inter, sans-serif\" font-size=\"13\" fill=\"#2563eb\" font-weight=\"600\" text-anchor=\"middle\">θ</text>\n    </svg>\n  </div>",
    "options": [
      "$50^\\circ$",
      "$40^\\circ$",
      "$60^\\circ$",
      "$55^\\circ$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>By exterior angle theorem:</p><p>$$\\theta + \\theta = 100^\\circ \\implies 2\\theta = 100^\\circ \\implies \\theta = 50^\\circ$$</p></div>",
    "createdAt": "2026-05-17T13:18:38.364Z"
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
    "question": "In the diagram below, two triangles share a vertex $A$ at the intersection. Find the value of $\\alpha$.\n  <div style=\"display: flex; justify-content: center; margin: 16px 0;\">\n    <svg viewBox=\"0 0 200 140\" width=\"100%\" style=\"max-width: 250px; height: auto;\" xmlns=\"http://www.w3.org/2000/svg\">\n      <polygon points=\"20,20 80,70 20,120\" stroke=\"#1e293b\" stroke-width=\"2\" fill=\"none\" />\n      <polygon points=\"180,20 80,70 180,120\" stroke=\"#1e293b\" stroke-width=\"2\" fill=\"none\" />\n      <text x=\"15\" y=\"15\" font-size=\"12\" font-weight=\"bold\">B</text>\n      <text x=\"15\" y=\"135\" font-size=\"12\" font-weight=\"bold\">C</text>\n      <text x=\"80\" y=\"60\" font-size=\"12\" font-weight=\"bold\">A</text>\n      <text x=\"185\" y=\"15\" font-size=\"12\" font-weight=\"bold\">D</text>\n      <text x=\"185\" y=\"135\" font-size=\"12\" font-weight=\"bold\">E</text>\n      \n      <text x=\"35\" y=\"45\" font-size=\"11\" fill=\"#2563eb\" font-weight=\"bold\">35°</text>\n      <text x=\"35\" y=\"105\" font-size=\"11\" fill=\"#2563eb\" font-weight=\"bold\">45°</text>\n      <text x=\"150\" y=\"45\" font-size=\"11\" fill=\"#2563eb\" font-weight=\"bold\">2α</text>\n      <text x=\"150\" y=\"105\" font-size=\"11\" fill=\"#2563eb\" font-weight=\"bold\">α</text>\n    </svg>\n  </div>",
    "options": [
      "$26.67^\\circ$",
      "$30^\\circ$",
      "$20^\\circ$",
      "$25^\\circ$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>Find the third angle of the left triangle:</p><p>$$\\angle BAC = 180^\\circ - 35^\\circ - 45^\\circ = 100^\\circ$$</p><p>Vertically opposite angles are equal, so $\\angle DAE = 100^\\circ$.</p><p>$$\\alpha + 2\\alpha + 100^\\circ = 180^\\circ \\implies 3\\alpha = 80^\\circ \\implies \\alpha = 26.67^\\circ$$</p></div>",
    "createdAt": "2026-05-17T13:18:38.364Z"
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
    "question": "Find the value of $w$ in the diagram below:\n  <div style=\"display: flex; justify-content: center; margin: 16px 0;\">\n    <svg viewBox=\"0 0 200 140\" width=\"100%\" style=\"max-width: 250px; height: auto;\" xmlns=\"http://www.w3.org/2000/svg\">\n      <line x1=\"20\" y1=\"20\" x2=\"180\" y2=\"120\" stroke=\"#1e293b\" stroke-width=\"2\" />\n      <line x1=\"20\" y1=\"120\" x2=\"180\" y2=\"20\" stroke=\"#1e293b\" stroke-width=\"2\" />\n      <text x=\"45\" y=\"75\" font-size=\"11\" fill=\"#2563eb\" font-weight=\"bold\">w</text>\n      <text x=\"145\" y=\"75\" font-size=\"11\" fill=\"#2563eb\" font-weight=\"bold\">40°</text>\n    </svg>\n  </div>",
    "options": [
      "$40^\\circ$",
      "$140^\\circ$",
      "$50^\\circ$",
      "$60^\\circ$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>Vertically opposite angles are equal, so:</p><p>$$w = 40^\\circ$$</p></div>",
    "createdAt": "2026-05-17T13:18:38.364Z"
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
    "question": "In the diagram below, lines $HO \\parallel ER$. Find the value of $\\alpha$.\n  <div style=\"display: flex; justify-content: center; margin: 16px 0;\">\n    <svg viewBox=\"0 0 200 120\" width=\"100%\" style=\"max-width: 250px; height: auto;\" xmlns=\"http://www.w3.org/2000/svg\">\n      <line x1=\"20\" y1=\"30\" x2=\"180\" y2=\"30\" stroke=\"#1e293b\" stroke-width=\"2\" />\n      <line x1=\"20\" y1=\"90\" x2=\"180\" y2=\"90\" stroke=\"#1e293b\" stroke-width=\"2\" />\n      <line x1=\"140\" y1=\"30\" x2=\"60\" y2=\"90\" stroke=\"#1e293b\" stroke-width=\"2\" />\n      <line x1=\"140\" y1=\"30\" x2=\"160\" y2=\"90\" stroke=\"#1e293b\" stroke-width=\"2\" />\n      <text x=\"100\" y=\"45\" font-size=\"11\" fill=\"#2563eb\" font-weight=\"bold\">35°</text>\n      <text x=\"140\" y=\"85\" font-size=\"11\" fill=\"#2563eb\" font-weight=\"bold\">70°</text>\n      <text x=\"125\" y=\"45\" font-size=\"11\" fill=\"#2563eb\" font-weight=\"bold\">α</text>\n    </svg>\n  </div>",
    "options": [
      "$75^\\circ$",
      "$65^\\circ$",
      "$70^\\circ$",
      "$80^\\circ$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>By alternate interior angles, the left angle inside the triangle is $35^\\circ$. Using angle sum of a triangle:</p><p>$$\\alpha + 35^\\circ + 70^\\circ = 180^\\circ \\implies \\alpha = 75^\\circ$$</p></div>",
    "createdAt": "2026-05-17T13:18:38.364Z"
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
    "question": "In the diagram below, lines are parallel. Find the value of $\\theta$.\n  <div style=\"display: flex; justify-content: center; margin: 16px 0;\">\n    <svg viewBox=\"0 0 200 120\" width=\"100%\" style=\"max-width: 250px; height: auto;\" xmlns=\"http://www.w3.org/2000/svg\">\n      <line x1=\"20\" y1=\"30\" x2=\"180\" y2=\"30\" stroke=\"#1e293b\" stroke-width=\"2\" />\n      <line x1=\"20\" y1=\"90\" x2=\"180\" y2=\"90\" stroke=\"#1e293b\" stroke-width=\"2\" />\n      <line x1=\"50\" y1=\"30\" x2=\"130\" y2=\"90\" stroke=\"#1e293b\" stroke-width=\"2\" />\n      \n      <text x=\"65\" y=\"45\" font-size=\"11\" fill=\"#2563eb\" font-weight=\"bold\">115°</text>\n      <text x=\"125\" y=\"85\" font-size=\"11\" fill=\"#2563eb\" font-weight=\"bold\">θ</text>\n    </svg>\n  </div>",
    "options": [
      "$65^\\circ$",
      "$75^\\circ$",
      "$55^\\circ$",
      "$60^\\circ$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>Co-interior angles sum to $180^\\circ$:</p><p>$$\\theta + 115^\\circ = 180^\\circ \\implies \\theta = 65^\\circ$$</p></div>",
    "createdAt": "2026-05-17T13:18:38.364Z"
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
    "question": "In the diagram below, lines are parallel. Find the value of $\\alpha$.\n  <div style=\"display: flex; justify-content: center; margin: 16px 0;\">\n    <svg viewBox=\"0 0 200 120\" width=\"100%\" style=\"max-width: 250px; height: auto;\" xmlns=\"http://www.w3.org/2000/svg\">\n      <line x1=\"20\" y1=\"30\" x2=\"180\" y2=\"30\" stroke=\"#1e293b\" stroke-width=\"2\" />\n      <line x1=\"20\" y1=\"90\" x2=\"180\" y2=\"90\" stroke=\"#1e293b\" stroke-width=\"2\" />\n      <line x1=\"50\" y1=\"30\" x2=\"100\" y2=\"90\" stroke=\"#1e293b\" stroke-width=\"2\" />\n      <line x1=\"150\" y1=\"30\" x2=\"100\" y2=\"90\" stroke=\"#1e293b\" stroke-width=\"2\" />\n      \n      <text x=\"65\" y=\"45\" font-size=\"11\" fill=\"#2563eb\" font-weight=\"bold\">25°</text>\n      <text x=\"135\" y=\"45\" font-size=\"11\" fill=\"#2563eb\" font-weight=\"bold\">55°</text>\n      <text x=\"95\" y=\"85\" font-size=\"11\" fill=\"#2563eb\" font-weight=\"bold\">α</text>\n    </svg>\n  </div>",
    "options": [
      "$100^\\circ$",
      "$90^\\circ$",
      "$110^\\circ$",
      "$80^\\circ$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>By alternate interior angles, the two interior base angles of the triangle formed at the bottom are $25^\\circ$ and $55^\\circ$. Using angle sum of a triangle:</p><p>$$\\alpha = 180^\\circ - (25^\\circ + 55^\\circ) = 100^\\circ$$</p></div>",
    "createdAt": "2026-05-17T13:18:38.364Z"
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
    "solution": "<div style=\"text-align: left;\"><p>By alternate interior angles between parallel lines $PL \\parallel AY$:</p><p>$$\\angle LPY = \\angle APY = 70^\\circ$$</p><p>$$\\gamma + 70^\\circ + 50^\\circ = 180^\\circ \\implies \\gamma = 60^\\circ$$</p></div>",
    "createdAt": "2026-05-17T13:18:38.364Z"
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
    "question": "In the right-angled trapezoid shown below, find the value of $\\alpha$.\n  <div style=\"display: flex; justify-content: center; margin: 16px 0;\">\n    <svg viewBox=\"0 0 200 120\" width=\"100%\" style=\"max-width: 250px; height: auto;\" xmlns=\"http://www.w3.org/2000/svg\">\n      <polygon points=\"30,20 170,20 130,100 30,100\" stroke=\"#1e293b\" stroke-width=\"2\" fill=\"none\"/>\n      <line x1=\"30\" y1=\"20\" x2=\"130\" y2=\"100\" stroke=\"#1e293b\" stroke-width=\"1.5\" />\n      <path d=\"M 30 90 L 40 90 L 40 100\" stroke=\"#475569\" stroke-width=\"1.5\" fill=\"none\" />\n      \n      <text x=\"50\" y=\"38\" font-size=\"11\" fill=\"#2563eb\" font-weight=\"bold\">32°</text>\n      <text x=\"90\" y=\"90\" font-size=\"11\" fill=\"#2563eb\" font-weight=\"bold\">48°</text>\n      <text x=\"110\" y=\"90\" font-size=\"11\" fill=\"#2563eb\" font-weight=\"bold\">α</text>\n    </svg>\n  </div>",
    "options": [
      "$100^\\circ$",
      "$90^\\circ$",
      "$110^\\circ$",
      "$80^\\circ$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>Using alternate interior angles from parallel lines, the top angle of the triangle is $32^\\circ$. Using angle sum of a triangle:</p><p>$$\\alpha = 180^\\circ - (32^\\circ + 48^\\circ) = 100^\\circ$$</p></div>",
    "createdAt": "2026-05-17T13:18:38.364Z"
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
    "question": "In the parallel line transversal below, find the value of $\\alpha$.\n  <div style=\"display: flex; justify-content: center; margin: 16px 0;\">\n    <svg viewBox=\"0 0 200 120\" width=\"100%\" style=\"max-width: 250px; height: auto;\" xmlns=\"http://www.w3.org/2000/svg\">\n      <line x1=\"20\" y1=\"30\" x2=\"180\" y2=\"30\" stroke=\"#1e293b\" stroke-width=\"2.5\" />\n      <line x1=\"20\" y1=\"90\" x2=\"180\" y2=\"90\" stroke=\"#1e293b\" stroke-width=\"2.5\" />\n      <line x1=\"60\" y1=\"90\" x2=\"140\" y2=\"30\" stroke=\"#1e293b\" stroke-width=\"2\" />\n      \n      <text x=\"50\" y=\"85\" font-size=\"11\" fill=\"#2563eb\" font-weight=\"bold\">65°</text>\n      <text x=\"145\" y=\"45\" font-size=\"11\" fill=\"#2563eb\" font-weight=\"bold\">α</text>\n    </svg>\n  </div>",
    "options": [
      "$65^\\circ$",
      "$115^\\circ$",
      "$75^\\circ$",
      "$55^\\circ$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>By alternate interior angles, the angles are equal:</p><p>$$\\alpha = 65^\\circ$$</p></div>",
    "createdAt": "2026-05-17T13:18:38.364Z"
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
    "question": "In the Z-shaped parallel transversal below, find the value of $\\gamma$.\n  <div style=\"display: flex; justify-content: center; margin: 16px 0;\">\n    <svg viewBox=\"0 0 200 120\" width=\"100%\" style=\"max-width: 250px; height: auto;\" xmlns=\"http://www.w3.org/2000/svg\">\n      <line x1=\"20\" y1=\"30\" x2=\"180\" y2=\"30\" stroke=\"#1e293b\" stroke-width=\"2.5\" />\n      <line x1=\"20\" y1=\"90\" x2=\"180\" y2=\"90\" stroke=\"#1e293b\" stroke-width=\"2.5\" />\n      <line x1=\"50\" y1=\"30\" x2=\"120\" y2=\"90\" stroke=\"#1e293b\" stroke-width=\"2\" />\n      <line x1=\"150\" y1=\"30\" x2=\"120\" y2=\"90\" stroke=\"#1e293b\" stroke-width=\"2\" />\n      \n      <text x=\"65\" y=\"45\" font-size=\"11\" fill=\"#2563eb\" font-weight=\"bold\">40°</text>\n      <text x=\"135\" y=\"45\" font-size=\"11\" fill=\"#2563eb\" font-weight=\"bold\">95°</text>\n      <text x=\"95\" y=\"85\" font-size=\"11\" fill=\"#2563eb\" font-weight=\"bold\">γ</text>\n    </svg>\n  </div>",
    "options": [
      "$45^\\circ$",
      "$55^\\circ$",
      "$35^\\circ$",
      "$50^\\circ$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>Using alternate interior angles, the interior base angles of the triangle are $40^\\circ$ and $95^\\circ$. Using angle sum of a triangle:</p><p>$$\\gamma = 180^\\circ - (40^\\circ + 95^\\circ) = 45^\\circ$$</p></div>",
    "createdAt": "2026-05-17T13:18:38.364Z"
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
    "question": "In the diagram below, lines are parallel. Find the value of $\\gamma$.\n  <div style=\"display: flex; justify-content: center; margin: 16px 0;\">\n    <svg viewBox=\"0 0 200 120\" width=\"100%\" style=\"max-width: 250px; height: auto;\" xmlns=\"http://www.w3.org/2000/svg\">\n      <line x1=\"20\" y1=\"30\" x2=\"180\" y2=\"30\" stroke=\"#1e293b\" stroke-width=\"2.5\" />\n      <line x1=\"20\" y1=\"90\" x2=\"180\" y2=\"90\" stroke=\"#1e293b\" stroke-width=\"2.5\" />\n      <line x1=\"60\" y1=\"30\" x2=\"120\" y2=\"90\" stroke=\"#1e293b\" stroke-width=\"2\" />\n      <line x1=\"140\" y1=\"30\" x2=\"120\" y2=\"90\" stroke=\"#1e293b\" stroke-width=\"2\" />\n      \n      <text x=\"75\" y=\"45\" font-size=\"11\" fill=\"#2563eb\" font-weight=\"bold\">30°</text>\n      <text x=\"125\" y=\"45\" font-size=\"11\" fill=\"#2563eb\" font-weight=\"bold\">65°</text>\n      <text x=\"95\" y=\"85\" font-size=\"11\" fill=\"#2563eb\" font-weight=\"bold\">γ</text>\n    </svg>\n  </div>",
    "options": [
      "$85^\\circ$",
      "$75^\\circ$",
      "$95^\\circ$",
      "$80^\\circ$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>Using alternate interior angles, the interior base angles of the triangle are $30^\\circ$ and $65^\\circ$. Using angle sum of a triangle:</p><p>$$\\gamma = 180^\\circ - (30^\\circ + 65^\\circ) = 85^\\circ$$</p></div>",
    "createdAt": "2026-05-17T13:18:38.364Z"
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
    "question": "Find the size of the marked angle $\\angle AVB$ in the diagram below:\n    <div style=\"display: flex; justify-content: center; margin: 16px 0;\">\n      <svg viewBox=\"0 0 200 160\" width=\"100%\" style=\"max-width: 250px; height: auto;\" xmlns=\"http://www.w3.org/2000/svg\">\n        <polygon points=\"100,20 30,130 170,130\" stroke=\"#1e293b\" stroke-width=\"2\" fill=\"none\" />\n        <line x1=\"30\" y1=\"130\" x2=\"135\" y2=\"75\" stroke=\"#1e293b\" stroke-width=\"1.5\" />\n        <text x=\"100\" y=\"15\" font-size=\"12\" font-weight=\"bold\">V</text>\n        <text x=\"20\" y=\"145\" font-size=\"12\" font-weight=\"bold\">A</text>\n        <text x=\"175\" y=\"145\" font-size=\"12\" font-weight=\"bold\">B</text>\n        \n        <text x=\"90\" y=\"45\" font-size=\"11\" fill=\"#2563eb\" font-weight=\"bold\">80°</text>\n        <text x=\"50\" y=\"125\" font-size=\"11\" fill=\"#2563eb\" font-weight=\"bold\">75°</text>\n      </svg>\n    </div>",
    "options": [
      "$25^\\circ$",
      "$35^\\circ$",
      "$15^\\circ$",
      "$45^\\circ$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>Find the third angle in the larger triangle:</p><p>$$\\angle B = 180^\\circ - (80^\\circ + 75^\\circ) = 25^\\circ$$</p><p>So the marked angle $\\angle AVB = 25^\\circ$.</p></div>",
    "createdAt": "2026-05-17T13:18:38.364Z"
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
    "question": "Find the size of the marked angle $\\angle AVB$ in the diagram below:\n    <div style=\"display: flex; justify-content: center; margin: 16px 0;\">\n      <svg viewBox=\"0 0 200 160\" width=\"100%\" style=\"max-width: 250px; height: auto;\" xmlns=\"http://www.w3.org/2000/svg\">\n        <polygon points=\"100,20 30,130 170,130\" stroke=\"#1e293b\" stroke-width=\"2\" fill=\"none\" />\n        <line x1=\"30\" y1=\"130\" x2=\"135\" y2=\"75\" stroke=\"#1e293b\" stroke-width=\"1.5\" />\n        <text x=\"100\" y=\"15\" font-size=\"12\" font-weight=\"bold\">V</text>\n        <text x=\"20\" y=\"145\" font-size=\"12\" font-weight=\"bold\">A</text>\n        <text x=\"175\" y=\"145\" font-size=\"12\" font-weight=\"bold\">B</text>\n        \n        <text x=\"90\" y=\"45\" font-size=\"11\" fill=\"#2563eb\" font-weight=\"bold\">34°</text>\n        <text x=\"50\" y=\"125\" font-size=\"11\" fill=\"#2563eb\" font-weight=\"bold\">60°</text>\n      </svg>\n    </div>",
    "options": [
      "$86^\\circ$",
      "$76^\\circ$",
      "$96^\\circ$",
      "$80^\\circ$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>Find the third angle in the larger triangle:</p><p>$$\\angle B = 180^\\circ - (34^\\circ + 60^\\circ) = 86^\\circ$$</p><p>So the marked angle $\\angle AVB = 86^\\circ$.</p></div>",
    "createdAt": "2026-05-17T13:18:38.364Z"
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
    "question": "Find the size of the marked angle $\\angle AVB$ in the diagram below:\n    <div style=\"display: flex; justify-content: center; margin: 16px 0;\">\n      <svg viewBox=\"0 0 200 160\" width=\"100%\" style=\"max-width: 250px; height: auto;\" xmlns=\"http://www.w3.org/2000/svg\">\n        <polygon points=\"100,20 30,130 170,130\" stroke=\"#1e293b\" stroke-width=\"2\" fill=\"none\" />\n        <line x1=\"30\" y1=\"130\" x2=\"135\" y2=\"75\" stroke=\"#1e293b\" stroke-width=\"1.5\" />\n        <text x=\"100\" y=\"15\" font-size=\"12\" font-weight=\"bold\">V</text>\n        <text x=\"20\" y=\"145\" font-size=\"12\" font-weight=\"bold\">A</text>\n        <text x=\"175\" y=\"145\" font-size=\"12\" font-weight=\"bold\">B</text>\n        \n        <text x=\"90\" y=\"45\" font-size=\"11\" fill=\"#2563eb\" font-weight=\"bold\">45°</text>\n        <text x=\"50\" y=\"125\" font-size=\"11\" fill=\"#2563eb\" font-weight=\"bold\">45°</text>\n      </svg>\n    </div>",
    "options": [
      "$90^\\circ$",
      "$80^\\circ$",
      "$100^\\circ$",
      "$95^\\circ$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>Find the third angle in the larger triangle:</p><p>$$\\angle B = 180^\\circ - (45^\\circ + 45^\\circ) = 90^\\circ$$</p><p>So the marked angle $\\angle AVB = 90^\\circ$.</p></div>",
    "createdAt": "2026-05-17T13:18:38.364Z"
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
    "question": "Find the size of the marked angle $\\angle AVB$ in the diagram below:\n    <div style=\"display: flex; justify-content: center; margin: 16px 0;\">\n      <svg viewBox=\"0 0 200 160\" width=\"100%\" style=\"max-width: 250px; height: auto;\" xmlns=\"http://www.w3.org/2000/svg\">\n        <polygon points=\"100,20 30,130 170,130\" stroke=\"#1e293b\" stroke-width=\"2\" fill=\"none\" />\n        <line x1=\"30\" y1=\"130\" x2=\"135\" y2=\"75\" stroke=\"#1e293b\" stroke-width=\"1.5\" />\n        <text x=\"100\" y=\"15\" font-size=\"12\" font-weight=\"bold\">V</text>\n        <text x=\"20\" y=\"145\" font-size=\"12\" font-weight=\"bold\">A</text>\n        <text x=\"175\" y=\"145\" font-size=\"12\" font-weight=\"bold\">B</text>\n        \n        <text x=\"90\" y=\"45\" font-size=\"11\" fill=\"#2563eb\" font-weight=\"bold\">30°</text>\n        <text x=\"50\" y=\"125\" font-size=\"11\" fill=\"#2563eb\" font-weight=\"bold\">50°</text>\n      </svg>\n    </div>",
    "options": [
      "$100^\\circ$",
      "$90^\\circ$",
      "$110^\\circ$",
      "$105^\\circ$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>Find the third angle in the larger triangle:</p><p>$$\\angle B = 180^\\circ - (30^\\circ + 50^\\circ) = 100^\\circ$$</p><p>So the marked angle $\\angle AVB = 100^\\circ$.</p></div>",
    "createdAt": "2026-05-17T13:18:38.364Z"
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
    "question": "Find the size of the marked angle $\\angle AVB$ in the diagram below:\n    <div style=\"display: flex; justify-content: center; margin: 16px 0;\">\n      <svg viewBox=\"0 0 200 160\" width=\"100%\" style=\"max-width: 250px; height: auto;\" xmlns=\"http://www.w3.org/2000/svg\">\n        <polygon points=\"100,20 30,130 170,130\" stroke=\"#1e293b\" stroke-width=\"2\" fill=\"none\" />\n        <line x1=\"30\" y1=\"130\" x2=\"135\" y2=\"75\" stroke=\"#1e293b\" stroke-width=\"1.5\" />\n        <text x=\"100\" y=\"15\" font-size=\"12\" font-weight=\"bold\">V</text>\n        <text x=\"20\" y=\"145\" font-size=\"12\" font-weight=\"bold\">A</text>\n        <text x=\"175\" y=\"145\" font-size=\"12\" font-weight=\"bold\">B</text>\n        \n        <text x=\"90\" y=\"45\" font-size=\"11\" fill=\"#2563eb\" font-weight=\"bold\">40°</text>\n        <text x=\"50\" y=\"125\" font-size=\"11\" fill=\"#2563eb\" font-weight=\"bold\">70°</text>\n      </svg>\n    </div>",
    "options": [
      "$70^\\circ$",
      "$60^\\circ$",
      "$80^\\circ$",
      "$75^\\circ$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>Find the third angle in the larger triangle:</p><p>$$\\angle B = 180^\\circ - (40^\\circ + 70^\\circ) = 70^\\circ$$</p><p>So the marked angle $\\angle AVB = 70^\\circ$.</p></div>",
    "createdAt": "2026-05-17T13:18:38.364Z"
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
    "question": "Find the size of the marked angle $\\angle AVB$ in the diagram below:\n    <div style=\"display: flex; justify-content: center; margin: 16px 0;\">\n      <svg viewBox=\"0 0 200 160\" width=\"100%\" style=\"max-width: 250px; height: auto;\" xmlns=\"http://www.w3.org/2000/svg\">\n        <polygon points=\"100,20 30,130 170,130\" stroke=\"#1e293b\" stroke-width=\"2\" fill=\"none\" />\n        <line x1=\"30\" y1=\"130\" x2=\"135\" y2=\"75\" stroke=\"#1e293b\" stroke-width=\"1.5\" />\n        <text x=\"100\" y=\"15\" font-size=\"12\" font-weight=\"bold\">V</text>\n        <text x=\"20\" y=\"145\" font-size=\"12\" font-weight=\"bold\">A</text>\n        <text x=\"175\" y=\"145\" font-size=\"12\" font-weight=\"bold\">B</text>\n        \n        <text x=\"90\" y=\"45\" font-size=\"11\" fill=\"#2563eb\" font-weight=\"bold\">25°</text>\n        <text x=\"50\" y=\"125\" font-size=\"11\" fill=\"#2563eb\" font-weight=\"bold\">85°</text>\n      </svg>\n    </div>",
    "options": [
      "$70^\\circ$",
      "$60^\\circ$",
      "$80^\\circ$",
      "$75^\\circ$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>Find the third angle in the larger triangle:</p><p>$$\\angle B = 180^\\circ - (25^\\circ + 85^\\circ) = 70^\\circ$$</p><p>So the marked angle $\\angle AVB = 70^\\circ$.</p></div>",
    "createdAt": "2026-05-17T13:18:38.364Z"
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
    "question": "Find the size of the marked angle $\\angle AVB$ in the diagram below:\n    <div style=\"display: flex; justify-content: center; margin: 16px 0;\">\n      <svg viewBox=\"0 0 200 160\" width=\"100%\" style=\"max-width: 250px; height: auto;\" xmlns=\"http://www.w3.org/2000/svg\">\n        <polygon points=\"100,20 30,130 170,130\" stroke=\"#1e293b\" stroke-width=\"2\" fill=\"none\" />\n        <line x1=\"30\" y1=\"130\" x2=\"135\" y2=\"75\" stroke=\"#1e293b\" stroke-width=\"1.5\" />\n        <text x=\"100\" y=\"15\" font-size=\"12\" font-weight=\"bold\">V</text>\n        <text x=\"20\" y=\"145\" font-size=\"12\" font-weight=\"bold\">A</text>\n        <text x=\"175\" y=\"145\" font-size=\"12\" font-weight=\"bold\">B</text>\n        \n        <text x=\"90\" y=\"45\" font-size=\"11\" fill=\"#2563eb\" font-weight=\"bold\">35°</text>\n        <text x=\"50\" y=\"125\" font-size=\"11\" fill=\"#2563eb\" font-weight=\"bold\">55°</text>\n      </svg>\n    </div>",
    "options": [
      "$90^\\circ$",
      "$80^\\circ$",
      "$100^\\circ$",
      "$95^\\circ$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>Find the third angle in the larger triangle:</p><p>$$\\angle B = 180^\\circ - (35^\\circ + 55^\\circ) = 90^\\circ$$</p><p>So the marked angle $\\angle AVB = 90^\\circ$.</p></div>",
    "createdAt": "2026-05-17T13:18:38.364Z"
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
    "question": "Find the size of the marked angle $\\angle AVB$ in the diagram below:\n    <div style=\"display: flex; justify-content: center; margin: 16px 0;\">\n      <svg viewBox=\"0 0 200 160\" width=\"100%\" style=\"max-width: 250px; height: auto;\" xmlns=\"http://www.w3.org/2000/svg\">\n        <polygon points=\"100,20 30,130 170,130\" stroke=\"#1e293b\" stroke-width=\"2\" fill=\"none\" />\n        <line x1=\"30\" y1=\"130\" x2=\"135\" y2=\"75\" stroke=\"#1e293b\" stroke-width=\"1.5\" />\n        <text x=\"100\" y=\"15\" font-size=\"12\" font-weight=\"bold\">V</text>\n        <text x=\"20\" y=\"145\" font-size=\"12\" font-weight=\"bold\">A</text>\n        <text x=\"175\" y=\"145\" font-size=\"12\" font-weight=\"bold\">B</text>\n        \n        <text x=\"90\" y=\"45\" font-size=\"11\" fill=\"#2563eb\" font-weight=\"bold\">15°</text>\n        <text x=\"50\" y=\"125\" font-size=\"11\" fill=\"#2563eb\" font-weight=\"bold\">75°</text>\n      </svg>\n    </div>",
    "options": [
      "$90^\\circ$",
      "$80^\\circ$",
      "$100^\\circ$",
      "$95^\\circ$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>Find the third angle in the larger triangle:</p><p>$$\\angle B = 180^\\circ - (15^\\circ + 75^\\circ) = 90^\\circ$$</p><p>So the marked angle $\\angle AVB = 90^\\circ$.</p></div>",
    "createdAt": "2026-05-17T13:18:38.364Z"
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
    "question": "Find the size of the marked angle $\\angle AVB$ in the diagram below:\n    <div style=\"display: flex; justify-content: center; margin: 16px 0;\">\n      <svg viewBox=\"0 0 200 160\" width=\"100%\" style=\"max-width: 250px; height: auto;\" xmlns=\"http://www.w3.org/2000/svg\">\n        <polygon points=\"100,20 30,130 170,130\" stroke=\"#1e293b\" stroke-width=\"2\" fill=\"none\" />\n        <line x1=\"30\" y1=\"130\" x2=\"135\" y2=\"75\" stroke=\"#1e293b\" stroke-width=\"1.5\" />\n        <text x=\"100\" y=\"15\" font-size=\"12\" font-weight=\"bold\">V</text>\n        <text x=\"20\" y=\"145\" font-size=\"12\" font-weight=\"bold\">A</text>\n        <text x=\"175\" y=\"145\" font-size=\"12\" font-weight=\"bold\">B</text>\n        \n        <text x=\"90\" y=\"45\" font-size=\"11\" fill=\"#2563eb\" font-weight=\"bold\">20°</text>\n        <text x=\"50\" y=\"125\" font-size=\"11\" fill=\"#2563eb\" font-weight=\"bold\">80°</text>\n      </svg>\n    </div>",
    "options": [
      "$80^\\circ$",
      "$70^\\circ$",
      "$90^\\circ$",
      "$85^\\circ$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>Find the third angle in the larger triangle:</p><p>$$\\angle B = 180^\\circ - (20^\\circ + 80^\\circ) = 80^\\circ$$</p><p>So the marked angle $\\angle AVB = 80^\\circ$.</p></div>",
    "createdAt": "2026-05-17T13:18:38.364Z"
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
