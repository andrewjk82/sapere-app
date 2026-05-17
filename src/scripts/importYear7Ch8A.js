import { db } from '../firebase/config.js';
import { collection, addDoc, getDocs, query, where, deleteDoc } from 'firebase/firestore';

export const allQuestions = [
  {
    "chapterId": "y7-8",
    "chapterTitle": "Chapter 8: Measurement",
    "topicId": "y7-8a",
    "topicCode": "8A",
    "topicTitle": "Units of measurement",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isActive": true,
    "isManual": true,
    "question": "Read the scale shown on the ruler below. What is the measurement indicated by the red arrow in centimetres?<br><svg width=\"340\" height=\"100\" viewBox=\"0 0 340 100\" xmlns=\"http://www.w3.org/2000/svg\" style=\"background:#ffffff; border-radius:8px; border:1px solid #e2e8f0; display:block; margin:10px auto;\">\n    <!-- Ruler body -->\n    <rect x=\"15\" y=\"30\" width=\"310\" height=\"50\" rx=\"3\" fill=\"#f8fafc\" stroke=\"#cbd5e1\" stroke-width=\"1.5\"/>\n    <text x=\"28\" y=\"47\" fill=\"#64748b\" font-size=\"10\" font-weight=\"bold\" font-family=\"'Outfit'\">cm</text>\n    <text x=\"25\" y=\"75\" text-anchor=\"middle\" fill=\"#1e293b\" font-size=\"11\" font-weight=\"600\" font-family=\"'Outfit'\">0</text><line x1=\"25\" y1=\"30\" x2=\"25\" y2=\"48\" stroke=\"#1e293b\" stroke-width=\"1.5\"/><line x1=\"28.5\" y1=\"30\" x2=\"28.5\" y2=\"38\" stroke=\"#64748b\" stroke-width=\"1\"/><line x1=\"32\" y1=\"30\" x2=\"32\" y2=\"38\" stroke=\"#64748b\" stroke-width=\"1\"/><line x1=\"35.5\" y1=\"30\" x2=\"35.5\" y2=\"38\" stroke=\"#64748b\" stroke-width=\"1\"/><line x1=\"39\" y1=\"30\" x2=\"39\" y2=\"38\" stroke=\"#64748b\" stroke-width=\"1\"/><line x1=\"42.5\" y1=\"30\" x2=\"42.5\" y2=\"42\" stroke=\"#475569\" stroke-width=\"1\"/><line x1=\"46\" y1=\"30\" x2=\"46\" y2=\"38\" stroke=\"#64748b\" stroke-width=\"1\"/><line x1=\"49.5\" y1=\"30\" x2=\"49.5\" y2=\"38\" stroke=\"#64748b\" stroke-width=\"1\"/><line x1=\"53\" y1=\"30\" x2=\"53\" y2=\"38\" stroke=\"#64748b\" stroke-width=\"1\"/><line x1=\"56.5\" y1=\"30\" x2=\"56.5\" y2=\"38\" stroke=\"#64748b\" stroke-width=\"1\"/><text x=\"60\" y=\"75\" text-anchor=\"middle\" fill=\"#1e293b\" font-size=\"11\" font-weight=\"600\" font-family=\"'Outfit'\">1</text><line x1=\"60\" y1=\"30\" x2=\"60\" y2=\"48\" stroke=\"#1e293b\" stroke-width=\"1.5\"/><line x1=\"63.5\" y1=\"30\" x2=\"63.5\" y2=\"38\" stroke=\"#64748b\" stroke-width=\"1\"/><line x1=\"67\" y1=\"30\" x2=\"67\" y2=\"38\" stroke=\"#64748b\" stroke-width=\"1\"/><line x1=\"70.5\" y1=\"30\" x2=\"70.5\" y2=\"38\" stroke=\"#64748b\" stroke-width=\"1\"/><line x1=\"74\" y1=\"30\" x2=\"74\" y2=\"38\" stroke=\"#64748b\" stroke-width=\"1\"/><line x1=\"77.5\" y1=\"30\" x2=\"77.5\" y2=\"42\" stroke=\"#475569\" stroke-width=\"1\"/><line x1=\"81\" y1=\"30\" x2=\"81\" y2=\"38\" stroke=\"#64748b\" stroke-width=\"1\"/><line x1=\"84.5\" y1=\"30\" x2=\"84.5\" y2=\"38\" stroke=\"#64748b\" stroke-width=\"1\"/><line x1=\"88\" y1=\"30\" x2=\"88\" y2=\"38\" stroke=\"#64748b\" stroke-width=\"1\"/><line x1=\"91.5\" y1=\"30\" x2=\"91.5\" y2=\"38\" stroke=\"#64748b\" stroke-width=\"1\"/><text x=\"95\" y=\"75\" text-anchor=\"middle\" fill=\"#1e293b\" font-size=\"11\" font-weight=\"600\" font-family=\"'Outfit'\">2</text><line x1=\"95\" y1=\"30\" x2=\"95\" y2=\"48\" stroke=\"#1e293b\" stroke-width=\"1.5\"/><line x1=\"98.5\" y1=\"30\" x2=\"98.5\" y2=\"38\" stroke=\"#64748b\" stroke-width=\"1\"/><line x1=\"102\" y1=\"30\" x2=\"102\" y2=\"38\" stroke=\"#64748b\" stroke-width=\"1\"/><line x1=\"105.5\" y1=\"30\" x2=\"105.5\" y2=\"38\" stroke=\"#64748b\" stroke-width=\"1\"/><line x1=\"109\" y1=\"30\" x2=\"109\" y2=\"38\" stroke=\"#64748b\" stroke-width=\"1\"/><line x1=\"112.5\" y1=\"30\" x2=\"112.5\" y2=\"42\" stroke=\"#475569\" stroke-width=\"1\"/><line x1=\"116\" y1=\"30\" x2=\"116\" y2=\"38\" stroke=\"#64748b\" stroke-width=\"1\"/><line x1=\"119.5\" y1=\"30\" x2=\"119.5\" y2=\"38\" stroke=\"#64748b\" stroke-width=\"1\"/><line x1=\"123\" y1=\"30\" x2=\"123\" y2=\"38\" stroke=\"#64748b\" stroke-width=\"1\"/><line x1=\"126.5\" y1=\"30\" x2=\"126.5\" y2=\"38\" stroke=\"#64748b\" stroke-width=\"1\"/><text x=\"130\" y=\"75\" text-anchor=\"middle\" fill=\"#1e293b\" font-size=\"11\" font-weight=\"600\" font-family=\"'Outfit'\">3</text><line x1=\"130\" y1=\"30\" x2=\"130\" y2=\"48\" stroke=\"#1e293b\" stroke-width=\"1.5\"/><line x1=\"133.5\" y1=\"30\" x2=\"133.5\" y2=\"38\" stroke=\"#64748b\" stroke-width=\"1\"/><line x1=\"137\" y1=\"30\" x2=\"137\" y2=\"38\" stroke=\"#64748b\" stroke-width=\"1\"/><line x1=\"140.5\" y1=\"30\" x2=\"140.5\" y2=\"38\" stroke=\"#64748b\" stroke-width=\"1\"/><line x1=\"144\" y1=\"30\" x2=\"144\" y2=\"38\" stroke=\"#64748b\" stroke-width=\"1\"/><line x1=\"147.5\" y1=\"30\" x2=\"147.5\" y2=\"42\" stroke=\"#475569\" stroke-width=\"1\"/><line x1=\"151\" y1=\"30\" x2=\"151\" y2=\"38\" stroke=\"#64748b\" stroke-width=\"1\"/><line x1=\"154.5\" y1=\"30\" x2=\"154.5\" y2=\"38\" stroke=\"#64748b\" stroke-width=\"1\"/><line x1=\"158\" y1=\"30\" x2=\"158\" y2=\"38\" stroke=\"#64748b\" stroke-width=\"1\"/><line x1=\"161.5\" y1=\"30\" x2=\"161.5\" y2=\"38\" stroke=\"#64748b\" stroke-width=\"1\"/><text x=\"165\" y=\"75\" text-anchor=\"middle\" fill=\"#1e293b\" font-size=\"11\" font-weight=\"600\" font-family=\"'Outfit'\">4</text><line x1=\"165\" y1=\"30\" x2=\"165\" y2=\"48\" stroke=\"#1e293b\" stroke-width=\"1.5\"/><line x1=\"168.5\" y1=\"30\" x2=\"168.5\" y2=\"38\" stroke=\"#64748b\" stroke-width=\"1\"/><line x1=\"172\" y1=\"30\" x2=\"172\" y2=\"38\" stroke=\"#64748b\" stroke-width=\"1\"/><line x1=\"175.5\" y1=\"30\" x2=\"175.5\" y2=\"38\" stroke=\"#64748b\" stroke-width=\"1\"/><line x1=\"179\" y1=\"30\" x2=\"179\" y2=\"38\" stroke=\"#64748b\" stroke-width=\"1\"/><line x1=\"182.5\" y1=\"30\" x2=\"182.5\" y2=\"42\" stroke=\"#475569\" stroke-width=\"1\"/><line x1=\"186\" y1=\"30\" x2=\"186\" y2=\"38\" stroke=\"#64748b\" stroke-width=\"1\"/><line x1=\"189.5\" y1=\"30\" x2=\"189.5\" y2=\"38\" stroke=\"#64748b\" stroke-width=\"1\"/><line x1=\"193\" y1=\"30\" x2=\"193\" y2=\"38\" stroke=\"#64748b\" stroke-width=\"1\"/><line x1=\"196.5\" y1=\"30\" x2=\"196.5\" y2=\"38\" stroke=\"#64748b\" stroke-width=\"1\"/><text x=\"200\" y=\"75\" text-anchor=\"middle\" fill=\"#1e293b\" font-size=\"11\" font-weight=\"600\" font-family=\"'Outfit'\">5</text><line x1=\"200\" y1=\"30\" x2=\"200\" y2=\"48\" stroke=\"#1e293b\" stroke-width=\"1.5\"/><line x1=\"203.5\" y1=\"30\" x2=\"203.5\" y2=\"38\" stroke=\"#64748b\" stroke-width=\"1\"/><line x1=\"207\" y1=\"30\" x2=\"207\" y2=\"38\" stroke=\"#64748b\" stroke-width=\"1\"/><line x1=\"210.5\" y1=\"30\" x2=\"210.5\" y2=\"38\" stroke=\"#64748b\" stroke-width=\"1\"/><line x1=\"214\" y1=\"30\" x2=\"214\" y2=\"38\" stroke=\"#64748b\" stroke-width=\"1\"/><line x1=\"217.5\" y1=\"30\" x2=\"217.5\" y2=\"42\" stroke=\"#475569\" stroke-width=\"1\"/><line x1=\"221\" y1=\"30\" x2=\"221\" y2=\"38\" stroke=\"#64748b\" stroke-width=\"1\"/><line x1=\"224.5\" y1=\"30\" x2=\"224.5\" y2=\"38\" stroke=\"#64748b\" stroke-width=\"1\"/><line x1=\"228\" y1=\"30\" x2=\"228\" y2=\"38\" stroke=\"#64748b\" stroke-width=\"1\"/><line x1=\"231.5\" y1=\"30\" x2=\"231.5\" y2=\"38\" stroke=\"#64748b\" stroke-width=\"1\"/><text x=\"235\" y=\"75\" text-anchor=\"middle\" fill=\"#1e293b\" font-size=\"11\" font-weight=\"600\" font-family=\"'Outfit'\">6</text><line x1=\"235\" y1=\"30\" x2=\"235\" y2=\"48\" stroke=\"#1e293b\" stroke-width=\"1.5\"/><line x1=\"238.5\" y1=\"30\" x2=\"238.5\" y2=\"38\" stroke=\"#64748b\" stroke-width=\"1\"/><line x1=\"242\" y1=\"30\" x2=\"242\" y2=\"38\" stroke=\"#64748b\" stroke-width=\"1\"/><line x1=\"245.5\" y1=\"30\" x2=\"245.5\" y2=\"38\" stroke=\"#64748b\" stroke-width=\"1\"/><line x1=\"249\" y1=\"30\" x2=\"249\" y2=\"38\" stroke=\"#64748b\" stroke-width=\"1\"/><line x1=\"252.5\" y1=\"30\" x2=\"252.5\" y2=\"42\" stroke=\"#475569\" stroke-width=\"1\"/><line x1=\"256\" y1=\"30\" x2=\"256\" y2=\"38\" stroke=\"#64748b\" stroke-width=\"1\"/><line x1=\"259.5\" y1=\"30\" x2=\"259.5\" y2=\"38\" stroke=\"#64748b\" stroke-width=\"1\"/><line x1=\"263\" y1=\"30\" x2=\"263\" y2=\"38\" stroke=\"#64748b\" stroke-width=\"1\"/><line x1=\"266.5\" y1=\"30\" x2=\"266.5\" y2=\"38\" stroke=\"#64748b\" stroke-width=\"1\"/><text x=\"270\" y=\"75\" text-anchor=\"middle\" fill=\"#1e293b\" font-size=\"11\" font-weight=\"600\" font-family=\"'Outfit'\">7</text><line x1=\"270\" y1=\"30\" x2=\"270\" y2=\"48\" stroke=\"#1e293b\" stroke-width=\"1.5\"/><line x1=\"273.5\" y1=\"30\" x2=\"273.5\" y2=\"38\" stroke=\"#64748b\" stroke-width=\"1\"/><line x1=\"277\" y1=\"30\" x2=\"277\" y2=\"38\" stroke=\"#64748b\" stroke-width=\"1\"/><line x1=\"280.5\" y1=\"30\" x2=\"280.5\" y2=\"38\" stroke=\"#64748b\" stroke-width=\"1\"/><line x1=\"284\" y1=\"30\" x2=\"284\" y2=\"38\" stroke=\"#64748b\" stroke-width=\"1\"/><line x1=\"287.5\" y1=\"30\" x2=\"287.5\" y2=\"42\" stroke=\"#475569\" stroke-width=\"1\"/><line x1=\"291\" y1=\"30\" x2=\"291\" y2=\"38\" stroke=\"#64748b\" stroke-width=\"1\"/><line x1=\"294.5\" y1=\"30\" x2=\"294.5\" y2=\"38\" stroke=\"#64748b\" stroke-width=\"1\"/><line x1=\"298\" y1=\"30\" x2=\"298\" y2=\"38\" stroke=\"#64748b\" stroke-width=\"1\"/><line x1=\"301.5\" y1=\"30\" x2=\"301.5\" y2=\"38\" stroke=\"#64748b\" stroke-width=\"1\"/><text x=\"305\" y=\"75\" text-anchor=\"middle\" fill=\"#1e293b\" font-size=\"11\" font-weight=\"600\" font-family=\"'Outfit'\">8</text><line x1=\"305\" y1=\"30\" x2=\"305\" y2=\"48\" stroke=\"#1e293b\" stroke-width=\"1.5\"/>\n    <!-- Indicator Arrow -->\n    <path d=\"M 214 5 L 209 17 L 219 17 Z\" fill=\"#ef4444\"/>\n    <line x1=\"214\" y1=\"5\" x2=\"214\" y2=\"28\" stroke=\"#ef4444\" stroke-width=\"2\" stroke-dasharray=\"2,2\"/>\n  </svg>",
    "options": [
      "5.4 cm",
      "5.2 cm",
      "5.8 cm",
      "6.4 cm"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n    <p><strong>Step-by-step breakdown:</strong></p>\n    <p><strong>Step 1:</strong> Identify the main number before the arrow. The arrow is between the $5$ and $6$ cm marks.</p>\n    <p><strong>Step 2:</strong> Count the minor ticks (millimetres) after the $5$ cm mark. The arrow points precisely to the $4\text{th}$ tick.</p>\n    <p><strong>Step 3:</strong> Since each minor tick represents $0.1\text{ cm}$, the reading is: <br>$5 + (4 \\times 0.1) = 5.4\text{ cm}$.</p>\n  </div>",
    "createdAt": "2026-05-17T12:19:48.821Z"
  },
  {
    "chapterId": "y7-8",
    "chapterTitle": "Chapter 8: Measurement",
    "topicId": "y7-8a",
    "topicCode": "8A",
    "topicTitle": "Units of measurement",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isActive": true,
    "isManual": true,
    "question": "Read the volume level indicated by the red arrow on the measuring beaker below.<br><svg width=\"220\" height=\"150\" viewBox=\"0 0 220 150\" xmlns=\"http://www.w3.org/2000/svg\" style=\"background:#ffffff; border-radius:8px; border:1px solid #e2e8f0; display:block; margin:10px auto;\">\n    <!-- Water liquid fill (15 mL) -->\n    <path d=\"M 85 75 L 155 75 L 145 130 L 95 130 Z\" fill=\"#bae6fd\" opacity=\"0.8\"/>\n    <!-- Glass Beaker Outline -->\n    <path d=\"M 80 20 L 80 25 L 85 25 L 95 130 C 95 133, 100 135, 120 135 C 140 135, 145 133, 145 130 L 155 25 L 160 25 L 160 20 Z\" fill=\"none\" stroke=\"#64748b\" stroke-width=\"2.5\"/>\n    <text x=\"120\" y=\"145\" text-anchor=\"middle\" fill=\"#64748b\" font-size=\"9\" font-weight=\"bold\" font-family=\"'Outfit'\">mL</text>\n    <line x1=\"160\" y1=\"105\" x2=\"175\" y2=\"105\" stroke=\"#475569\" stroke-width=\"1.5\"/><text x=\"180\" y=\"109\" fill=\"#475569\" font-size=\"10\" font-weight=\"600\" font-family=\"'Outfit'\">5</text><line x1=\"160\" y1=\"90\" x2=\"175\" y2=\"90\" stroke=\"#475569\" stroke-width=\"1.5\"/><text x=\"180\" y=\"94\" fill=\"#475569\" font-size=\"10\" font-weight=\"600\" font-family=\"'Outfit'\">10</text><line x1=\"160\" y1=\"75\" x2=\"175\" y2=\"75\" stroke=\"#475569\" stroke-width=\"1.5\"/><text x=\"180\" y=\"79\" fill=\"#475569\" font-size=\"10\" font-weight=\"600\" font-family=\"'Outfit'\">15</text><line x1=\"160\" y1=\"60\" x2=\"175\" y2=\"60\" stroke=\"#475569\" stroke-width=\"1.5\"/><text x=\"180\" y=\"64\" fill=\"#475569\" font-size=\"10\" font-weight=\"600\" font-family=\"'Outfit'\">20</text><line x1=\"160\" y1=\"45\" x2=\"175\" y2=\"45\" stroke=\"#475569\" stroke-width=\"1.5\"/><text x=\"180\" y=\"49\" fill=\"#475569\" font-size=\"10\" font-weight=\"600\" font-family=\"'Outfit'\">25</text><line x1=\"160\" y1=\"30\" x2=\"175\" y2=\"30\" stroke=\"#475569\" stroke-width=\"1.5\"/><text x=\"180\" y=\"34\" fill=\"#475569\" font-size=\"10\" font-weight=\"600\" font-family=\"'Outfit'\">30</text>\n    <!-- Liquid Surface Highlight -->\n    <ellipse cx=\"120\" cy=\"75\" rx=\"33\" ry=\"4\" fill=\"#7dd3fc\" opacity=\"0.6\"/>\n    <!-- Red Indicator Arrow -->\n    <path d=\"M 60 75 L 72 71 L 72 79 Z\" fill=\"#ef4444\"/>\n    <line x1=\"45\" y1=\"75\" x2=\"65\" y2=\"75\" stroke=\"#ef4444\" stroke-width=\"2\"/>\n  </svg>",
    "options": [
      "15 mL",
      "10 mL",
      "20 mL",
      "5 mL"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n    <p><strong>Step-by-step breakdown:</strong></p>\n    <p><strong>Step 1:</strong> Locate the position of the liquid level and the red arrow pointing to the scale.</p>\n    <p><strong>Step 2:</strong> The arrow points directly at the mark labeled <strong>15</strong>.</p>\n    <p><strong>Step 3:</strong> The unit at the bottom of the beaker is <strong>mL</strong>, so the reading is $15\text{ mL}$.</p>\n  </div>",
    "createdAt": "2026-05-17T12:19:48.822Z"
  },
  {
    "chapterId": "y7-8",
    "chapterTitle": "Chapter 8: Measurement",
    "topicId": "y7-8a",
    "topicCode": "8A",
    "topicTitle": "Units of measurement",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isActive": true,
    "isManual": true,
    "question": "Read the weight indicated on the weighing scale dial below. What is the value shown in kilograms?<br><svg width=\"300\" height=\"170\" viewBox=\"0 0 300 170\" xmlns=\"http://www.w3.org/2000/svg\" style=\"background:#ffffff; border-radius:8px; border:1px solid #e2e8f0; display:block; margin:10px auto;\">\n    <!-- Scale Outer Housing -->\n    <path d=\"M 50 150 L 80 40 C 90 20, 210 20, 220 40 L 250 150 Z\" fill=\"#e2e8f0\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <!-- Dial face -->\n    <circle cx=\"150\" cy=\"130\" r=\"70\" fill=\"#ffffff\" stroke=\"#cbd5e1\" stroke-width=\"1.5\"/>\n    <circle cx=\"150\" cy=\"130\" r=\"3\" fill=\"#1e293b\"/>\n    <!-- Core Markings -->\n    <!-- 40 kg -->\n    <line x1=\"100\" y1=\"80\" x2=\"108\" y2=\"88\" stroke=\"#1e293b\" stroke-width=\"2\"/>\n    <text x=\"92\" y=\"78\" fill=\"#1e293b\" font-size=\"11\" font-weight=\"bold\" font-family=\"'Outfit'\">40</text>\n    <!-- 50 kg -->\n    <line x1=\"150\" y1=\"60\" x2=\"150\" y2=\"70\" stroke=\"#1e293b\" stroke-width=\"2\"/>\n    <text x=\"150\" y=\"52\" text-anchor=\"middle\" fill=\"#1e293b\" font-size=\"11\" font-weight=\"bold\" font-family=\"'Outfit'\">50</text>\n    <!-- 60 kg -->\n    <line x1=\"200\" y1=\"80\" x2=\"192\" y2=\"88\" stroke=\"#1e293b\" stroke-width=\"2\"/>\n    <text x=\"210\" y=\"78\" fill=\"#1e293b\" font-size=\"11\" font-weight=\"bold\" font-family=\"'Outfit'\">60</text>\n    <!-- Unit label -->\n    <text x=\"150\" y=\"110\" text-anchor=\"middle\" fill=\"#64748b\" font-size=\"10\" font-weight=\"bold\" font-family=\"'Outfit'\">kg</text>\n    <!-- Red Needle pointing to 53 kg -->\n    <line x1=\"150\" y1=\"130\" x2=\"221.3292387221365\" y2=\"106.82372542187895\" stroke=\"#ef4444\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n    <circle cx=\"150\" cy=\"130\" r=\"6\" fill=\"#ef4444\"/>\n    <!-- Red Arrow Indicator pointing from top -->\n    <path d=\"M 150 10 L 150 22 L 146 17 M 150 22 L 154 17\" fill=\"none\" stroke=\"#ef4444\" stroke-width=\"2\"/>\n  </svg>",
    "options": [
      "53 kg",
      "55 kg",
      "51 kg",
      "63 kg"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n    <p><strong>Step-by-step breakdown:</strong></p>\n    <p><strong>Step 1:</strong> Identify the major markings around the dial: $40$, $50$, $60$, $70$ kg.</p>\n    <p><strong>Step 2:</strong> Notice that the needle has passed $50$ but has not reached $60$ yet.</p>\n    <p><strong>Step 3:</strong> Count the small division ticks between $50$ and $60$. The needle is resting exactly on the $3\text{rd}$ division tick past $50$. Therefore, the reading is $53\text{ kg}$.</p>\n  </div>",
    "createdAt": "2026-05-17T12:19:48.823Z"
  },
  {
    "chapterId": "y7-8",
    "chapterTitle": "Chapter 8: Measurement",
    "topicId": "y7-8a",
    "topicCode": "8A",
    "topicTitle": "Units of measurement",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isActive": true,
    "isManual": true,
    "question": "Read the measurement indicated by the red arrow on the ruler below. What is the reading in centimetres?<br><svg width=\"340\" height=\"100\" viewBox=\"0 0 340 100\" xmlns=\"http://www.w3.org/2000/svg\" style=\"background:#ffffff; border-radius:8px; border:1px solid #e2e8f0; display:block; margin:10px auto;\">\n    <!-- Ruler body -->\n    <rect x=\"15\" y=\"30\" width=\"310\" height=\"50\" rx=\"3\" fill=\"#f8fafc\" stroke=\"#cbd5e1\" stroke-width=\"1.5\"/>\n    <text x=\"28\" y=\"47\" fill=\"#64748b\" font-size=\"10\" font-weight=\"bold\" font-family=\"'Outfit'\">cm</text>\n    <text x=\"25\" y=\"75\" text-anchor=\"middle\" fill=\"#1e293b\" font-size=\"11\" font-weight=\"600\" font-family=\"'Outfit'\">21</text><line x1=\"25\" y1=\"30\" x2=\"25\" y2=\"48\" stroke=\"#1e293b\" stroke-width=\"1.5\"/><line x1=\"32\" y1=\"30\" x2=\"32\" y2=\"38\" stroke=\"#64748b\" stroke-width=\"1\"/><line x1=\"39\" y1=\"30\" x2=\"39\" y2=\"38\" stroke=\"#64748b\" stroke-width=\"1\"/><line x1=\"46\" y1=\"30\" x2=\"46\" y2=\"38\" stroke=\"#64748b\" stroke-width=\"1\"/><line x1=\"53\" y1=\"30\" x2=\"53\" y2=\"38\" stroke=\"#64748b\" stroke-width=\"1\"/><line x1=\"60\" y1=\"30\" x2=\"60\" y2=\"42\" stroke=\"#475569\" stroke-width=\"1\"/><line x1=\"67\" y1=\"30\" x2=\"67\" y2=\"38\" stroke=\"#64748b\" stroke-width=\"1\"/><line x1=\"74\" y1=\"30\" x2=\"74\" y2=\"38\" stroke=\"#64748b\" stroke-width=\"1\"/><line x1=\"81\" y1=\"30\" x2=\"81\" y2=\"38\" stroke=\"#64748b\" stroke-width=\"1\"/><line x1=\"88\" y1=\"30\" x2=\"88\" y2=\"38\" stroke=\"#64748b\" stroke-width=\"1\"/><text x=\"95\" y=\"75\" text-anchor=\"middle\" fill=\"#1e293b\" font-size=\"11\" font-weight=\"600\" font-family=\"'Outfit'\">22</text><line x1=\"95\" y1=\"30\" x2=\"95\" y2=\"48\" stroke=\"#1e293b\" stroke-width=\"1.5\"/><line x1=\"102\" y1=\"30\" x2=\"102\" y2=\"38\" stroke=\"#64748b\" stroke-width=\"1\"/><line x1=\"109\" y1=\"30\" x2=\"109\" y2=\"38\" stroke=\"#64748b\" stroke-width=\"1\"/><line x1=\"116\" y1=\"30\" x2=\"116\" y2=\"38\" stroke=\"#64748b\" stroke-width=\"1\"/><line x1=\"123\" y1=\"30\" x2=\"123\" y2=\"38\" stroke=\"#64748b\" stroke-width=\"1\"/><line x1=\"130\" y1=\"30\" x2=\"130\" y2=\"42\" stroke=\"#475569\" stroke-width=\"1\"/><line x1=\"137\" y1=\"30\" x2=\"137\" y2=\"38\" stroke=\"#64748b\" stroke-width=\"1\"/><line x1=\"144\" y1=\"30\" x2=\"144\" y2=\"38\" stroke=\"#64748b\" stroke-width=\"1\"/><line x1=\"151\" y1=\"30\" x2=\"151\" y2=\"38\" stroke=\"#64748b\" stroke-width=\"1\"/><line x1=\"158\" y1=\"30\" x2=\"158\" y2=\"38\" stroke=\"#64748b\" stroke-width=\"1\"/><text x=\"165\" y=\"75\" text-anchor=\"middle\" fill=\"#1e293b\" font-size=\"11\" font-weight=\"600\" font-family=\"'Outfit'\">23</text><line x1=\"165\" y1=\"30\" x2=\"165\" y2=\"48\" stroke=\"#1e293b\" stroke-width=\"1.5\"/><line x1=\"172\" y1=\"30\" x2=\"172\" y2=\"38\" stroke=\"#64748b\" stroke-width=\"1\"/><line x1=\"179\" y1=\"30\" x2=\"179\" y2=\"38\" stroke=\"#64748b\" stroke-width=\"1\"/><line x1=\"186\" y1=\"30\" x2=\"186\" y2=\"38\" stroke=\"#64748b\" stroke-width=\"1\"/><line x1=\"193\" y1=\"30\" x2=\"193\" y2=\"38\" stroke=\"#64748b\" stroke-width=\"1\"/><line x1=\"200\" y1=\"30\" x2=\"200\" y2=\"42\" stroke=\"#475569\" stroke-width=\"1\"/><line x1=\"207\" y1=\"30\" x2=\"207\" y2=\"38\" stroke=\"#64748b\" stroke-width=\"1\"/><line x1=\"214\" y1=\"30\" x2=\"214\" y2=\"38\" stroke=\"#64748b\" stroke-width=\"1\"/><line x1=\"221\" y1=\"30\" x2=\"221\" y2=\"38\" stroke=\"#64748b\" stroke-width=\"1\"/><line x1=\"228\" y1=\"30\" x2=\"228\" y2=\"38\" stroke=\"#64748b\" stroke-width=\"1\"/><text x=\"235\" y=\"75\" text-anchor=\"middle\" fill=\"#1e293b\" font-size=\"11\" font-weight=\"600\" font-family=\"'Outfit'\">24</text><line x1=\"235\" y1=\"30\" x2=\"235\" y2=\"48\" stroke=\"#1e293b\" stroke-width=\"1.5\"/><line x1=\"242\" y1=\"30\" x2=\"242\" y2=\"38\" stroke=\"#64748b\" stroke-width=\"1\"/><line x1=\"249\" y1=\"30\" x2=\"249\" y2=\"38\" stroke=\"#64748b\" stroke-width=\"1\"/><line x1=\"256\" y1=\"30\" x2=\"256\" y2=\"38\" stroke=\"#64748b\" stroke-width=\"1\"/><line x1=\"263\" y1=\"30\" x2=\"263\" y2=\"38\" stroke=\"#64748b\" stroke-width=\"1\"/><line x1=\"270\" y1=\"30\" x2=\"270\" y2=\"42\" stroke=\"#475569\" stroke-width=\"1\"/><line x1=\"277\" y1=\"30\" x2=\"277\" y2=\"38\" stroke=\"#64748b\" stroke-width=\"1\"/><line x1=\"284\" y1=\"30\" x2=\"284\" y2=\"38\" stroke=\"#64748b\" stroke-width=\"1\"/><line x1=\"291\" y1=\"30\" x2=\"291\" y2=\"38\" stroke=\"#64748b\" stroke-width=\"1\"/><line x1=\"298\" y1=\"30\" x2=\"298\" y2=\"38\" stroke=\"#64748b\" stroke-width=\"1\"/><text x=\"305\" y=\"75\" text-anchor=\"middle\" fill=\"#1e293b\" font-size=\"11\" font-weight=\"600\" font-family=\"'Outfit'\">25</text><line x1=\"305\" y1=\"30\" x2=\"305\" y2=\"48\" stroke=\"#1e293b\" stroke-width=\"1.5\"/>\n    <!-- Indicator Arrow -->\n    <path d=\"M 207 5 L 202 17 L 212 17 Z\" fill=\"#ef4444\"/>\n    <line x1=\"207\" y1=\"5\" x2=\"207\" y2=\"28\" stroke=\"#ef4444\" stroke-width=\"2\" stroke-dasharray=\"2,2\"/>\n  </svg>",
    "options": [
      "23.6 cm",
      "23.3 cm",
      "24.6 cm",
      "23.9 cm"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n    <p><strong>Step-by-step breakdown:</strong></p>\n    <p><strong>Step 1:</strong> Look at the main number mark to the left of the arrow, which is $23$ cm.</p>\n    <p><strong>Step 2:</strong> Count the small ticks (millimetres) past $23$. The arrow points to the $6\text{th}$ division tick past $23$.</p>\n    <p><strong>Step 3:</strong> Since each tick is $0.1\text{ cm}$, the reading is: <br>$23 + (6 \\times 0.1) = 23.6\text{ cm}$.</p>\n  </div>",
    "createdAt": "2026-05-17T12:19:48.823Z"
  },
  {
    "chapterId": "y7-8",
    "chapterTitle": "Chapter 8: Measurement",
    "topicId": "y7-8a",
    "topicCode": "8A",
    "topicTitle": "Units of measurement",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isActive": true,
    "isManual": true,
    "question": "Read the measurement on the food scale dial below. What is the reading in grams?<br><svg width=\"300\" height=\"170\" viewBox=\"0 0 300 170\" xmlns=\"http://www.w3.org/2000/svg\" style=\"background:#ffffff; border-radius:8px; border:1px solid #e2e8f0; display:block; margin:10px auto;\">\n    <!-- Scale Outer Body -->\n    <rect x=\"60\" y=\"30\" width=\"180\" height=\"120\" rx=\"10\" fill=\"#f97316\" stroke=\"#ea580c\" stroke-width=\"2\"/>\n    <rect x=\"70\" y=\"20\" width=\"160\" height=\"10\" rx=\"2\" fill=\"#94a3b8\"/>\n    <!-- Dial face -->\n    <circle cx=\"150\" cy=\"120\" r=\"50\" fill=\"#ffffff\" stroke=\"#cbd5e1\" stroke-width=\"1.5\"/>\n    <circle cx=\"150\" cy=\"120\" r=\"3\" fill=\"#1e293b\"/>\n    <!-- Core Markings -->\n    <!-- 200 g -->\n    <line x1=\"115\" y1=\"85\" x2=\"122\" y2=\"92\" stroke=\"#1e293b\" stroke-width=\"1.5\"/>\n    <text x=\"108\" y=\"78\" fill=\"#1e293b\" font-size=\"9\" font-weight=\"bold\" font-family=\"'Outfit'\">200</text>\n    <!-- 300 g -->\n    <line x1=\"150\" y1=\"70\" x2=\"150\" y2=\"78\" stroke=\"#1e293b\" stroke-width=\"1.5\"/>\n    <text x=\"150\" y=\"62\" text-anchor=\"middle\" fill=\"#1e293b\" font-size=\"9\" font-weight=\"bold\" font-family=\"'Outfit'\">300</text>\n    <!-- 400 g -->\n    <line x1=\"185\" y1=\"85\" x2=\"178\" y2=\"92\" stroke=\"#1e293b\" stroke-width=\"1.5\"/>\n    <text x=\"192\" y=\"78\" fill=\"#1e293b\" font-size=\"9\" font-weight=\"bold\" font-family=\"'Outfit'\">400</text>\n    <!-- Unit label -->\n    <text x=\"150\" y=\"105\" text-anchor=\"middle\" fill=\"#64748b\" font-size=\"8\" font-weight=\"bold\" font-family=\"'Outfit'\">grams</text>\n    <!-- Red Needle pointing to 340 g -->\n    <line x1=\"150\" y1=\"120\" x2=\"204.32285873273258\" y2=\"111.3961044227873\" stroke=\"#ef4444\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <circle cx=\"150\" cy=\"120\" r=\"4\" fill=\"#ef4444\"/>\n    <!-- Red Arrow Indicator pointing to dial -->\n    <path d=\"M 150 15 L 150 25 L 147 21 M 150 25 L 153 21\" fill=\"none\" stroke=\"#ef4444\" stroke-width=\"1.5\"/>\n  </svg>",
    "options": [
      "340 g",
      "320 g",
      "360 g",
      "400 g"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n    <p><strong>Step-by-step breakdown:</strong></p>\n    <p><strong>Step 1:</strong> Identify the dial markings: $200$, $300$, $400$ grams.</p>\n    <p><strong>Step 2:</strong> The needle is between $300$ and $400$ grams.</p>\n    <p><strong>Step 3:</strong> The scale has division ticks every $10\text{ g}$. The needle points to the $4\text{th}$ mark past $300$. Thus, the weight is: <br>$300 + 40 = 340\text{ g}$.</p>\n  </div>",
    "createdAt": "2026-05-17T12:19:48.823Z"
  },
  {
    "chapterId": "y7-8",
    "chapterTitle": "Chapter 8: Measurement",
    "topicId": "y7-8a",
    "topicCode": "8A",
    "topicTitle": "Units of measurement",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isActive": true,
    "isManual": true,
    "question": "Read the volume level indicated by the red arrow on the beaker below.<br><svg width=\"220\" height=\"150\" viewBox=\"0 0 220 150\" xmlns=\"http://www.w3.org/2000/svg\" style=\"background:#ffffff; border-radius:8px; border:1px solid #e2e8f0; display:block; margin:10px auto;\">\n    <!-- Water liquid fill (350 mL) -->\n    <path d=\"M 85 57 L 155 57 L 145 130 L 95 130 Z\" fill=\"#bae6fd\" opacity=\"0.8\"/>\n    <!-- Glass Beaker Outline with Handle -->\n    <path d=\"M 155 40 H 175 V 100 H 148\" fill=\"none\" stroke=\"#64748b\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n    <path d=\"M 80 20 L 80 25 L 85 25 L 95 130 C 95 133, 100 135, 120 135 C 140 135, 145 133, 145 130 L 155 25 L 160 25 L 160 20 Z\" fill=\"none\" stroke=\"#64748b\" stroke-width=\"2.5\"/>\n    <text x=\"120\" y=\"145\" text-anchor=\"middle\" fill=\"#64748b\" font-size=\"9\" font-weight=\"bold\" font-family=\"'Outfit'\">mL</text>\n    <line x1=\"160\" y1=\"102\" x2=\"175\" y2=\"102\" stroke=\"#475569\" stroke-width=\"1.5\"/><text x=\"180\" y=\"106\" fill=\"#475569\" font-size=\"10\" font-weight=\"600\" font-family=\"'Outfit'\">100</text><line x1=\"160\" y1=\"84\" x2=\"175\" y2=\"84\" stroke=\"#475569\" stroke-width=\"1.5\"/><text x=\"180\" y=\"88\" fill=\"#475569\" font-size=\"10\" font-weight=\"600\" font-family=\"'Outfit'\">200</text><line x1=\"160\" y1=\"66\" x2=\"175\" y2=\"66\" stroke=\"#475569\" stroke-width=\"1.5\"/><text x=\"180\" y=\"70\" fill=\"#475569\" font-size=\"10\" font-weight=\"600\" font-family=\"'Outfit'\">300</text><line x1=\"160\" y1=\"48\" x2=\"175\" y2=\"48\" stroke=\"#475569\" stroke-width=\"1.5\"/><text x=\"180\" y=\"52\" fill=\"#475569\" font-size=\"10\" font-weight=\"600\" font-family=\"'Outfit'\">400</text><line x1=\"160\" y1=\"30\" x2=\"175\" y2=\"30\" stroke=\"#475569\" stroke-width=\"1.5\"/><text x=\"180\" y=\"34\" fill=\"#475569\" font-size=\"10\" font-weight=\"600\" font-family=\"'Outfit'\">500</text>\n    <!-- Liquid Surface Highlight -->\n    <ellipse cx=\"120\" cy=\"57\" rx=\"33\" ry=\"4\" fill=\"#7dd3fc\" opacity=\"0.6\"/>\n    <!-- Red Indicator Arrow -->\n    <path d=\"M 60 57 L 72 53 L 72 61 Z\" fill=\"#ef4444\"/>\n    <line x1=\"45\" y1=\"57\" x2=\"65\" y2=\"57\" stroke=\"#ef4444\" stroke-width=\"2\"/>\n  </svg>",
    "options": [
      "350 mL",
      "300 mL",
      "400 mL",
      "450 mL"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n    <p><strong>Step-by-step breakdown:</strong></p>\n    <p><strong>Step 1:</strong> Check the main scale values which go up by $100\text{ mL}$ ($100$, $200$, $300$, $400$, $500$).</p>\n    <p><strong>Step 2:</strong> The arrow points halfway between $300$ and $400\text{ mL}$.</p>\n    <p><strong>Step 3:</strong> The value exactly halfway between $300$ and $400$ is $350\text{ mL}$.</p>\n  </div>",
    "createdAt": "2026-05-17T12:19:48.824Z"
  },
  {
    "chapterId": "y7-8",
    "chapterTitle": "Chapter 8: Measurement",
    "topicId": "y7-8a",
    "topicCode": "8A",
    "topicTitle": "Units of measurement",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isActive": true,
    "isManual": true,
    "question": "Complete the statement: $8 cm = \\text{___ } mm$.",
    "options": [
      "$80\\text{ mm}$",
      "$800\\text{ mm}$",
      "$8\\text{ mm}$",
      "$8000\\text{ mm}$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n      <p><strong>Step-by-step breakdown:</strong></p>\n      <p>Since $1\\text{ cm} = 10\\text{ mm}$, we multiply by $10$:<br>$8 \\times 10 = 80\\text{ mm}$.</p>\n    </div>",
    "createdAt": "2026-05-17T12:19:48.824Z"
  },
  {
    "chapterId": "y7-8",
    "chapterTitle": "Chapter 8: Measurement",
    "topicId": "y7-8a",
    "topicCode": "8A",
    "topicTitle": "Units of measurement",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isActive": true,
    "isManual": true,
    "question": "Complete the statement: $240 mm = \\text{___ } cm$.",
    "options": [
      "$24\\text{ cm}$",
      "$240\\text{ cm}$",
      "$2.4\\text{ cm}$",
      "$2400\\text{ cm}$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n      <p><strong>Step-by-step breakdown:</strong></p>\n      <p>Since $1\\text{ cm} = 10\\text{ mm}$, we divide by $10$:<br>$240 \\div 10 = 24\\text{ cm}$.</p>\n    </div>",
    "createdAt": "2026-05-17T12:19:48.824Z"
  },
  {
    "chapterId": "y7-8",
    "chapterTitle": "Chapter 8: Measurement",
    "topicId": "y7-8a",
    "topicCode": "8A",
    "topicTitle": "Units of measurement",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isActive": true,
    "isManual": true,
    "question": "Complete the statement: $27 cm = \\text{___ } mm$.",
    "options": [
      "$270\\text{ mm}$",
      "$2700\\text{ mm}$",
      "$27\\text{ mm}$",
      "$27000\\text{ mm}$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n      <p><strong>Step-by-step breakdown:</strong></p>\n      <p>Multiply by $10$ to convert from cm to mm:<br>$27 \\times 10 = 270\\text{ mm}$.</p>\n    </div>",
    "createdAt": "2026-05-17T12:19:48.824Z"
  },
  {
    "chapterId": "y7-8",
    "chapterTitle": "Chapter 8: Measurement",
    "topicId": "y7-8a",
    "topicCode": "8A",
    "topicTitle": "Units of measurement",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isActive": true,
    "isManual": true,
    "question": "Complete the statement: $5.9 cm = \\text{___ } mm$.",
    "options": [
      "$59\\text{ mm}$",
      "$590\\text{ mm}$",
      "$5.9\\text{ mm}$",
      "$5900\\text{ mm}$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n      <p><strong>Step-by-step breakdown:</strong></p>\n      <p>Multiply by $10$ to convert from cm to mm:<br>$5.9 \\times 10 = 59\\text{ mm}$.</p>\n    </div>",
    "createdAt": "2026-05-17T12:19:48.824Z"
  },
  {
    "chapterId": "y7-8",
    "chapterTitle": "Chapter 8: Measurement",
    "topicId": "y7-8a",
    "topicCode": "8A",
    "topicTitle": "Units of measurement",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isActive": true,
    "isManual": true,
    "question": "Complete the statement: $38 mm = \\text{___ } cm$.",
    "options": [
      "$3.8\\text{ cm}$",
      "$38\\text{ cm}$",
      "$0.38\\text{ cm}$",
      "$380\\text{ cm}$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n      <p><strong>Step-by-step breakdown:</strong></p>\n      <p>Divide by $10$ to convert from mm to cm:<br>$38 \\div 10 = 3.8\\text{ cm}$.</p>\n    </div>",
    "createdAt": "2026-05-17T12:19:48.824Z"
  },
  {
    "chapterId": "y7-8",
    "chapterTitle": "Chapter 8: Measurement",
    "topicId": "y7-8a",
    "topicCode": "8A",
    "topicTitle": "Units of measurement",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isActive": true,
    "isManual": true,
    "question": "Complete the statement: $714 mm = \\text{___ } cm$.",
    "options": [
      "$71.4\\text{ cm}$",
      "$714\\text{ cm}$",
      "$7.140000000000001\\text{ cm}$",
      "$7140.000000000001\\text{ cm}$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n      <p><strong>Step-by-step breakdown:</strong></p>\n      <p>Divide by $10$ to convert from mm to cm:<br>$714 \\div 10 = 71.4\\text{ cm}$.</p>\n    </div>",
    "createdAt": "2026-05-17T12:19:48.824Z"
  },
  {
    "chapterId": "y7-8",
    "chapterTitle": "Chapter 8: Measurement",
    "topicId": "y7-8a",
    "topicCode": "8A",
    "topicTitle": "Units of measurement",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isActive": true,
    "isManual": true,
    "question": "Complete the statement: $5 m = \\text{___ } cm$.",
    "options": [
      "$500\\text{ cm}$",
      "$5000\\text{ cm}$",
      "$50\\text{ cm}$",
      "$50000\\text{ cm}$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n      <p><strong>Step-by-step breakdown:</strong></p>\n      <p>Since $1\\text{ m} = 100\\text{ cm}$, we multiply by $100$:<br>$5 \\times 100 = 500\\text{ cm}$.</p>\n    </div>",
    "createdAt": "2026-05-17T12:19:48.824Z"
  },
  {
    "chapterId": "y7-8",
    "chapterTitle": "Chapter 8: Measurement",
    "topicId": "y7-8a",
    "topicCode": "8A",
    "topicTitle": "Units of measurement",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isActive": true,
    "isManual": true,
    "question": "Complete the statement: $2.4 m = \\text{___ } cm$.",
    "options": [
      "$240\\text{ cm}$",
      "$2400\\text{ cm}$",
      "$24\\text{ cm}$",
      "$24000\\text{ cm}$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n      <p><strong>Step-by-step breakdown:</strong></p>\n      <p>Since $1\\text{ m} = 100\\text{ cm}$, we multiply by $100$:<br>$2.4 \\times 100 = 240\\text{ cm}$.</p>\n    </div>",
    "createdAt": "2026-05-17T12:19:48.824Z"
  },
  {
    "chapterId": "y7-8",
    "chapterTitle": "Chapter 8: Measurement",
    "topicId": "y7-8a",
    "topicCode": "8A",
    "topicTitle": "Units of measurement",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "Complete the statement: $4 km = \\text{___ } m$.",
    "options": [
      "$4000\\text{ m}$",
      "$40000\\text{ m}$",
      "$400\\text{ m}$",
      "$400000\\text{ m}$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n      <p><strong>Step-by-step breakdown:</strong></p>\n      <p>Since $1\\text{ km} = 1000\\text{ m}$, we multiply by $1000$:<br>$4 \\times 1000 = 4000\\text{ m}$.</p>\n    </div>",
    "createdAt": "2026-05-17T12:19:48.824Z"
  },
  {
    "chapterId": "y7-8",
    "chapterTitle": "Chapter 8: Measurement",
    "topicId": "y7-8a",
    "topicCode": "8A",
    "topicTitle": "Units of measurement",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "Complete the statement: $3 km = \\text{___ } cm$.",
    "options": [
      "$300000\\text{ cm}$",
      "$3000000\\text{ cm}$",
      "$30000\\text{ cm}$",
      "$30000000\\text{ cm}$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n      <p><strong>Step-by-step breakdown:</strong></p>\n      <p>To convert km to cm, first convert to metres ($3 \\times 1000 = 3000\\text{ m}$), then to centimetres ($3000 \\times 100 = 300,000\\text{ cm}$).</p>\n    </div>",
    "createdAt": "2026-05-17T12:19:48.824Z"
  },
  {
    "chapterId": "y7-8",
    "chapterTitle": "Chapter 8: Measurement",
    "topicId": "y7-8a",
    "topicCode": "8A",
    "topicTitle": "Units of measurement",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "Complete the statement: $7.28 km = \\text{___ } m$.",
    "options": [
      "$7280\\text{ m}$",
      "$72800\\text{ m}$",
      "$728\\text{ m}$",
      "$728000\\text{ m}$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n      <p><strong>Step-by-step breakdown:</strong></p>\n      <p>Multiply by $1000$ to convert from km to m:<br>$7.28 \\times 1000 = 7280\\text{ m}$.</p>\n    </div>",
    "createdAt": "2026-05-17T12:19:48.824Z"
  },
  {
    "chapterId": "y7-8",
    "chapterTitle": "Chapter 8: Measurement",
    "topicId": "y7-8a",
    "topicCode": "8A",
    "topicTitle": "Units of measurement",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "Complete the statement: $500000 mm = \\text{___ } km$.",
    "options": [
      "$0.5\\text{ km}$",
      "$5\\text{ km}$",
      "$0.05\\text{ km}$",
      "$50\\text{ km}$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n      <p><strong>Step-by-step breakdown:</strong></p>\n      <p>First, divide by $10$ to convert mm to cm ($50000\\text{ cm}$). Next, divide by $100$ to convert cm to m ($500\\text{ m}$). Finally, divide by $1000$ to convert m to km ($500 \\div 1000 = 0.5\\text{ km}$).</p>\n    </div>",
    "createdAt": "2026-05-17T12:19:48.824Z"
  },
  {
    "chapterId": "y7-8",
    "chapterTitle": "Chapter 8: Measurement",
    "topicId": "y7-8a",
    "topicCode": "8A",
    "topicTitle": "Units of measurement",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "Complete the statement: $8000 cm = \\text{___ } km$.",
    "options": [
      "$0.08\\text{ km}$",
      "$0.8\\text{ km}$",
      "$0.008\\text{ km}$",
      "$8\\text{ km}$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n      <p><strong>Step-by-step breakdown:</strong></p>\n      <p>First, divide by $100$ to convert cm to m ($80\\text{ m}$). Next, divide by $1000$ to convert m to km ($80 \\div 1000 = 0.08\\text{ km}$).</p>\n    </div>",
    "createdAt": "2026-05-17T12:19:48.824Z"
  },
  {
    "chapterId": "y7-8",
    "chapterTitle": "Chapter 8: Measurement",
    "topicId": "y7-8a",
    "topicCode": "8A",
    "topicTitle": "Units of measurement",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "Complete the statement: $4356 m = \\text{___ } km$.",
    "options": [
      "$4.356\\text{ km}$",
      "$43.56\\text{ km}$",
      "$0.4356\\text{ km}$",
      "$435.59999999999997\\text{ km}$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n      <p><strong>Step-by-step breakdown:</strong></p>\n      <p>Divide by $1000$ to convert m to km:<br>$4356 \\div 1000 = 4.356\\text{ km}$.</p>\n    </div>",
    "createdAt": "2026-05-17T12:19:48.824Z"
  },
  {
    "chapterId": "y7-8",
    "chapterTitle": "Chapter 8: Measurement",
    "topicId": "y7-8a",
    "topicCode": "8A",
    "topicTitle": "Units of measurement",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "Complete the statement: $\\frac{3}{4} km = \\text{___ } m$.",
    "options": [
      "$750\\text{ m}$",
      "$7500\\text{ m}$",
      "$75\\text{ m}$",
      "$75000\\text{ m}$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n      <p><strong>Step-by-step breakdown:</strong></p>\n      <p>Since $1\\text{ km} = 1000\\text{ m}$, multiply by $1000$:<br>$\\frac{3}{4} \\times 1000 = 3 \\times 250 = 750\\text{ m}$.</p>\n    </div>",
    "createdAt": "2026-05-17T12:19:48.824Z"
  },
  {
    "chapterId": "y7-8",
    "chapterTitle": "Chapter 8: Measurement",
    "topicId": "y7-8a",
    "topicCode": "8A",
    "topicTitle": "Units of measurement",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "Complete the statement: $\\frac{3}{5} m = \\text{___ } cm$.",
    "options": [
      "$60\\text{ cm}$",
      "$600\\text{ cm}$",
      "$6\\text{ cm}$",
      "$6000\\text{ cm}$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n      <p><strong>Step-by-step breakdown:</strong></p>\n      <p>Since $1\\text{ m} = 100\\text{ cm}$, multiply by $100$:<br>$\\frac{3}{5} \\times 100 = 3 \\times 20 = 60\\text{ cm}$.</p>\n    </div>",
    "createdAt": "2026-05-17T12:19:48.824Z"
  },
  {
    "chapterId": "y7-8",
    "chapterTitle": "Chapter 8: Measurement",
    "topicId": "y7-8a",
    "topicCode": "8A",
    "topicTitle": "Units of measurement",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "Complete the statement: $\\frac{2}{5} m = \\text{___ } mm$.",
    "options": [
      "$400\\text{ mm}$",
      "$4000\\text{ mm}$",
      "$40\\text{ mm}$",
      "$40000\\text{ mm}$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n      <p><strong>Step-by-step breakdown:</strong></p>\n      <p>First convert m to mm ($1\\text{ m} = 1000\\text{ mm}$):<br>$\\frac{2}{5} \\times 1000 = 2 \\times 200 = 400\\text{ mm}$.</p>\n    </div>",
    "createdAt": "2026-05-17T12:19:48.824Z"
  },
  {
    "chapterId": "y7-8",
    "chapterTitle": "Chapter 8: Measurement",
    "topicId": "y7-8a",
    "topicCode": "8A",
    "topicTitle": "Units of measurement",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "Complete the statement: $\\frac{9}{10} cm = \\text{___ } mm$.",
    "options": [
      "$9\\text{ mm}$",
      "$90\\text{ mm}$",
      "$0.9\\text{ mm}$",
      "$900\\text{ mm}$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n      <p><strong>Step-by-step breakdown:</strong></p>\n      <p>Since $1\\text{ cm} = 10\\text{ mm}$, multiply by $10$:<br>$\\frac{9}{10} \\times 10 = 9\\text{ mm}$.</p>\n    </div>",
    "createdAt": "2026-05-17T12:19:48.824Z"
  },
  {
    "chapterId": "y7-8",
    "chapterTitle": "Chapter 8: Measurement",
    "topicId": "y7-8a",
    "topicCode": "8A",
    "topicTitle": "Units of measurement",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "Complete the statement: $\\frac{3}{8} cm = \\text{___ } mm$.",
    "options": [
      "$3.75\\text{ mm}$",
      "$37.5\\text{ mm}$",
      "$0.375\\text{ mm}$",
      "$375\\text{ mm}$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n      <p><strong>Step-by-step breakdown:</strong></p>\n      <p>Multiply by $10$ to convert cm to mm:<br>$\\frac{3}{8} \\times 10 = \\frac{30}{8} = 3.75\\text{ mm}$.</p>\n    </div>",
    "createdAt": "2026-05-17T12:19:48.824Z"
  },
  {
    "chapterId": "y7-8",
    "chapterTitle": "Chapter 8: Measurement",
    "topicId": "y7-8a",
    "topicCode": "8A",
    "topicTitle": "Units of measurement",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "Complete the statement: $\\frac{5}{8} cm = \\text{___ } mm$.",
    "options": [
      "$6.25\\text{ mm}$",
      "$62.5\\text{ mm}$",
      "$0.625\\text{ mm}$",
      "$625\\text{ mm}$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n      <p><strong>Step-by-step breakdown:</strong></p>\n      <p>Multiply by $10$ to convert cm to mm:<br>$\\frac{5}{8} \\times 10 = \\frac{50}{8} = 6.25\\text{ mm}$.</p>\n    </div>",
    "createdAt": "2026-05-17T12:19:48.824Z"
  },
  {
    "chapterId": "y7-8",
    "chapterTitle": "Chapter 8: Measurement",
    "topicId": "y7-8a",
    "topicCode": "8A",
    "topicTitle": "Units of measurement",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "Complete the statement: $5\\text{ cm } 4\\text{ mm} = \\text{___ } cm$.",
    "options": [
      "$5.4\\text{ cm}$",
      "$54\\text{ cm}$",
      "$0.54\\text{ cm}$",
      "$54\\text{ cm}$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n      <p><strong>Step-by-step breakdown:</strong></p>\n      <p>Convert $4\\text{ mm}$ to cm ($4 \\div 10 = 0.4\\text{ cm}$), then add to $5\\text{ cm}$:<br>$5 + 0.4 = 5.4\\text{ cm}$.</p>\n    </div>",
    "createdAt": "2026-05-17T12:19:48.824Z"
  },
  {
    "chapterId": "y7-8",
    "chapterTitle": "Chapter 8: Measurement",
    "topicId": "y7-8a",
    "topicCode": "8A",
    "topicTitle": "Units of measurement",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "Complete the statement: $7\\text{ cm } 3\\text{ mm} = \\text{___ } mm$.",
    "options": [
      "$73\\text{ mm}$",
      "$730\\text{ mm}$",
      "$7.3\\text{ mm}$",
      "$73\\text{ mm}$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n      <p><strong>Step-by-step breakdown:</strong></p>\n      <p>Convert $7\\text{ cm}$ to mm ($7 \\times 10 = 70\\text{ mm}$), then add $3\\text{ mm}$:<br>$70 + 3 = 73\\text{ mm}$.</p>\n    </div>",
    "createdAt": "2026-05-17T12:19:48.824Z"
  },
  {
    "chapterId": "y7-8",
    "chapterTitle": "Chapter 8: Measurement",
    "topicId": "y7-8a",
    "topicCode": "8A",
    "topicTitle": "Units of measurement",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "Complete the statement: $9\\text{ cm } 2\\text{ mm} = \\text{___ } cm$.",
    "options": [
      "$9.2\\text{ cm}$",
      "$92\\text{ cm}$",
      "$0.9199999999999999\\text{ cm}$",
      "$92\\text{ cm}$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n      <p><strong>Step-by-step breakdown:</strong></p>\n      <p>Convert $2\\text{ mm}$ to cm ($2 \\div 10 = 0.2\\text{ cm}$), then add to $9\\text{ cm}$:<br>$9 + 0.2 = 9.2\\text{ cm}$.</p>\n    </div>",
    "createdAt": "2026-05-17T12:19:48.824Z"
  },
  {
    "chapterId": "y7-8",
    "chapterTitle": "Chapter 8: Measurement",
    "topicId": "y7-8a",
    "topicCode": "8A",
    "topicTitle": "Units of measurement",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "Complete the statement: $4\\text{ m } 78\\text{ cm} = \\text{___ } cm$.",
    "options": [
      "$478\\text{ cm}$",
      "$4780\\text{ cm}$",
      "$47.8\\text{ cm}$",
      "$478\\text{ cm}$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n      <p><strong>Step-by-step breakdown:</strong></p>\n      <p>Convert $4\\text{ m}$ to cm ($4 \\times 100 = 400\\text{ cm}$), then add $78\\text{ cm}$:<br>$400 + 78 = 478\\text{ cm}$.</p>\n    </div>",
    "createdAt": "2026-05-17T12:19:48.824Z"
  },
  {
    "chapterId": "y7-8",
    "chapterTitle": "Chapter 8: Measurement",
    "topicId": "y7-8a",
    "topicCode": "8A",
    "topicTitle": "Units of measurement",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "Complete the statement: $32\\text{ km } 600\\text{ m} = \\text{___ } m$.",
    "options": [
      "$32600\\text{ m}$",
      "$326000\\text{ m}$",
      "$3260\\text{ m}$",
      "$32600\\text{ m}$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n      <p><strong>Step-by-step breakdown:</strong></p>\n      <p>Convert $32\\text{ km}$ to m ($32 \\times 1000 = 32000\\text{ m}$), then add $600\\text{ m}$:<br>$32000 + 600 = 32,600\\text{ m}$.</p>\n    </div>",
    "createdAt": "2026-05-17T12:19:48.824Z"
  },
  {
    "chapterId": "y7-8",
    "chapterTitle": "Chapter 8: Measurement",
    "topicId": "y7-8a",
    "topicCode": "8A",
    "topicTitle": "Units of measurement",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "Complete the statement: $27\\text{ km } 85\\text{ m} = \\text{___ } km$.",
    "options": [
      "$27.085\\text{ km}$",
      "$270.85\\text{ km}$",
      "$2.7085\\text{ km}$",
      "$27085\\text{ km}$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n      <p><strong>Step-by-step breakdown:</strong></p>\n      <p>Convert $85\\text{ m}$ to km ($85 \\div 1000 = 0.085\\text{ km}$), then add to $27\\text{ km}$:<br>$27 + 0.085 = 27.085\\text{ km}$.</p>\n    </div>",
    "createdAt": "2026-05-17T12:19:48.824Z"
  },
  {
    "chapterId": "y7-8",
    "chapterTitle": "Chapter 8: Measurement",
    "topicId": "y7-8a",
    "topicCode": "8A",
    "topicTitle": "Units of measurement",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "Complete the statement: $674 g = \\text{___ } kg$.",
    "options": [
      "$0.674\\text{ kg}$",
      "$6.74\\text{ kg}$",
      "$0.0674\\text{ kg}$",
      "$67.4\\text{ kg}$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n      <p><strong>Step-by-step breakdown:</strong></p>\n      <p>Since $1\\text{ kg} = 1000\\text{ g}$, divide by $1000$:<br>$674 \\div 1000 = 0.674\\text{ kg}$.</p>\n    </div>",
    "createdAt": "2026-05-17T12:19:48.824Z"
  },
  {
    "chapterId": "y7-8",
    "chapterTitle": "Chapter 8: Measurement",
    "topicId": "y7-8a",
    "topicCode": "8A",
    "topicTitle": "Units of measurement",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "Complete the statement: $4.8 kg = \\text{___ } g$.",
    "options": [
      "$4800\\text{ g}$",
      "$48000\\text{ g}$",
      "$480\\text{ g}$",
      "$480000\\text{ g}$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n      <p><strong>Step-by-step breakdown:</strong></p>\n      <p>Multiply by $1000$ to convert kg to g:<br>$4.8 \\times 1000 = 4800\\text{ g}$.</p>\n    </div>",
    "createdAt": "2026-05-17T12:19:48.824Z"
  },
  {
    "chapterId": "y7-8",
    "chapterTitle": "Chapter 8: Measurement",
    "topicId": "y7-8a",
    "topicCode": "8A",
    "topicTitle": "Units of measurement",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "Complete the statement: $5.6 t = \\text{___ } kg$.",
    "options": [
      "$5600\\text{ kg}$",
      "$56000\\text{ kg}$",
      "$560\\text{ kg}$",
      "$560000\\text{ kg}$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n      <p><strong>Step-by-step breakdown:</strong></p>\n      <p>Since $1\\text{ tonne (t)} = 1000\\text{ kg}$, multiply by $1000$:<br>$5.6 \\times 1000 = 5600\\text{ kg}$.</p>\n    </div>",
    "createdAt": "2026-05-17T12:19:48.824Z"
  },
  {
    "chapterId": "y7-8",
    "chapterTitle": "Chapter 8: Measurement",
    "topicId": "y7-8a",
    "topicCode": "8A",
    "topicTitle": "Units of measurement",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "Complete the statement: $\\frac{3}{4} kg = \\text{___ } g$.",
    "options": [
      "$750\\text{ g}$",
      "$7500\\text{ g}$",
      "$75\\text{ g}$",
      "$75000\\text{ g}$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n      <p><strong>Step-by-step breakdown:</strong></p>\n      <p>Multiply by $1000$ to convert kg to g:<br>$\\frac{3}{4} \\times 1000 = 3 \\times 250 = 750\\text{ g}$.</p>\n    </div>",
    "createdAt": "2026-05-17T12:19:48.824Z"
  },
  {
    "chapterId": "y7-8",
    "chapterTitle": "Chapter 8: Measurement",
    "topicId": "y7-8a",
    "topicCode": "8A",
    "topicTitle": "Units of measurement",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "Complete the statement: $28.6 kg = \\text{___ } g$.",
    "options": [
      "$28600\\text{ g}$",
      "$286000\\text{ g}$",
      "$2860\\text{ g}$",
      "$2860000\\text{ g}$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n      <p><strong>Step-by-step breakdown:</strong></p>\n      <p>Multiply by $1000$ to convert kg to g:<br>$28.6 \\times 1000 = 28600\\text{ g}$.</p>\n    </div>",
    "createdAt": "2026-05-17T12:19:48.824Z"
  },
  {
    "chapterId": "y7-8",
    "chapterTitle": "Chapter 8: Measurement",
    "topicId": "y7-8a",
    "topicCode": "8A",
    "topicTitle": "Units of measurement",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "Complete the statement: $620 mg = \\text{___ } g$.",
    "options": [
      "$0.62\\text{ g}$",
      "$6.2\\text{ g}$",
      "$0.062\\text{ g}$",
      "$62\\text{ g}$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n      <p><strong>Step-by-step breakdown:</strong></p>\n      <p>Since $1\\text{ g} = 1000\\text{ mg}$, divide by $1000$:<br>$620 \\div 1000 = 0.62\\text{ g}$.</p>\n    </div>",
    "createdAt": "2026-05-17T12:19:48.824Z"
  },
  {
    "chapterId": "y7-8",
    "chapterTitle": "Chapter 8: Measurement",
    "topicId": "y7-8a",
    "topicCode": "8A",
    "topicTitle": "Units of measurement",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "Complete the statement: $840 mg = \\text{___ } g$.",
    "options": [
      "$0.84\\text{ g}$",
      "$8.4\\text{ g}$",
      "$0.08399999999999999\\text{ g}$",
      "$84\\text{ g}$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n      <p><strong>Step-by-step breakdown:</strong></p>\n      <p>Divide by $1000$ to convert mg to g:<br>$840 \\div 1000 = 0.84\\text{ g}$.</p>\n    </div>",
    "createdAt": "2026-05-17T12:19:48.824Z"
  },
  {
    "chapterId": "y7-8",
    "chapterTitle": "Chapter 8: Measurement",
    "topicId": "y7-8a",
    "topicCode": "8A",
    "topicTitle": "Units of measurement",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "Complete the statement: $\\frac{3}{10} t = \\text{___ } kg$.",
    "options": [
      "$300\\text{ kg}$",
      "$3000\\text{ kg}$",
      "$30\\text{ kg}$",
      "$30000\\text{ kg}$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n      <p><strong>Step-by-step breakdown:</strong></p>\n      <p>Multiply by $1000$ to convert tonnes to kg:<br>$\\frac{3}{10} \\times 1000 = 300\\text{ kg}$.</p>\n    </div>",
    "createdAt": "2026-05-17T12:19:48.824Z"
  },
  {
    "chapterId": "y7-8",
    "chapterTitle": "Chapter 8: Measurement",
    "topicId": "y7-8a",
    "topicCode": "8A",
    "topicTitle": "Units of measurement",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "Express $7\\text{ km } 45\\text{ m}$ in metres.",
    "options": [
      "$7045 m$",
      "$7450 m$",
      "$745 m$",
      "$70045 m$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n      <p><strong>Step-by-step breakdown:</strong></p>\n      <p>$7\\text{ km} = 7 \\times 1000 = 7000\\text{ m}$. Adding $45\\text{ m}$ gives: $7000 + 45 = 7045\\text{ m}$.</p>\n    </div>",
    "createdAt": "2026-05-17T12:19:48.824Z"
  },
  {
    "chapterId": "y7-8",
    "chapterTitle": "Chapter 8: Measurement",
    "topicId": "y7-8a",
    "topicCode": "8A",
    "topicTitle": "Units of measurement",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "Express $12\\text{ km } 80\\text{ m}$ in metres.",
    "options": [
      "$12080 m$",
      "$12800 m$",
      "$1208 m$",
      "$120080 m$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n      <p><strong>Step-by-step breakdown:</strong></p>\n      <p>$12\\text{ km} = 12000\\text{ m}$. Adding $80\\text{ m}$ gives: $12000 + 80 = 12080\\text{ m}$.</p>\n    </div>",
    "createdAt": "2026-05-17T12:19:48.824Z"
  },
  {
    "chapterId": "y7-8",
    "chapterTitle": "Chapter 8: Measurement",
    "topicId": "y7-8a",
    "topicCode": "8A",
    "topicTitle": "Units of measurement",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "Express $5\\text{ t } 60\\text{ kg}$ in kilograms.",
    "options": [
      "$5060 kg$",
      "$5600 kg$",
      "$50060 kg$",
      "$506 kg$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n      <p><strong>Step-by-step breakdown:</strong></p>\n      <p>$5\\text{ t} = 5 \\times 1000 = 5000\\text{ kg}$. Adding $60\\text{ kg}$ gives: $5000 + 60 = 5060\\text{ kg}$.</p>\n    </div>",
    "createdAt": "2026-05-17T12:19:48.824Z"
  },
  {
    "chapterId": "y7-8",
    "chapterTitle": "Chapter 8: Measurement",
    "topicId": "y7-8a",
    "topicCode": "8A",
    "topicTitle": "Units of measurement",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "Express $18\\text{ t } 90\\text{ kg}$ in kilograms.",
    "options": [
      "$18090 kg$",
      "$18900 kg$",
      "$1809 kg$",
      "$180090 kg$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n      <p><strong>Step-by-step breakdown:</strong></p>\n      <p>$18\\text{ t} = 18000\\text{ kg}$. Adding $90\\text{ kg}$ gives: $18000 + 90 = 18090\\text{ kg}$.</p>\n    </div>",
    "createdAt": "2026-05-17T12:19:48.824Z"
  },
  {
    "chapterId": "y7-8",
    "chapterTitle": "Chapter 8: Measurement",
    "topicId": "y7-8a",
    "topicCode": "8A",
    "topicTitle": "Units of measurement",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "Complete the statement: $600 mL = \\text{___ } L$.",
    "options": [
      "$0.6\\text{ L}$",
      "$6\\text{ L}$",
      "$0.06\\text{ L}$",
      "$60\\text{ L}$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n      <p><strong>Step-by-step breakdown:</strong></p>\n      <p>Since $1\\text{ L} = 1000\\text{ mL}$, divide by $1000$:<br>$600 \\div 1000 = 0.6\\text{ L}$.</p>\n    </div>",
    "createdAt": "2026-05-17T12:19:48.824Z"
  },
  {
    "chapterId": "y7-8",
    "chapterTitle": "Chapter 8: Measurement",
    "topicId": "y7-8a",
    "topicCode": "8A",
    "topicTitle": "Units of measurement",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "Complete the statement: $2.4 L = \\text{___ } mL$.",
    "options": [
      "$2400\\text{ mL}$",
      "$24000\\text{ mL}$",
      "$240\\text{ mL}$",
      "$240000\\text{ mL}$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n      <p><strong>Step-by-step breakdown:</strong></p>\n      <p>Multiply by $1000$ to convert L to mL:<br>$2.4 \\times 1000 = 2400\\text{ mL}$.</p>\n    </div>",
    "createdAt": "2026-05-17T12:19:48.824Z"
  },
  {
    "chapterId": "y7-8",
    "chapterTitle": "Chapter 8: Measurement",
    "topicId": "y7-8a",
    "topicCode": "8A",
    "topicTitle": "Units of measurement",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "Complete the statement: $7005 mL = \\text{___ } L$.",
    "options": [
      "$7.005\\text{ L}$",
      "$70.05\\text{ L}$",
      "$0.7005\\text{ L}$",
      "$700.5\\text{ L}$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n      <p><strong>Step-by-step breakdown:</strong></p>\n      <p>Divide by $1000$ to convert mL to L:<br>$7005 \\div 1000 = 7.005\\text{ L}$.</p>\n    </div>",
    "createdAt": "2026-05-17T12:19:48.824Z"
  },
  {
    "chapterId": "y7-8",
    "chapterTitle": "Chapter 8: Measurement",
    "topicId": "y7-8a",
    "topicCode": "8A",
    "topicTitle": "Units of measurement",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "Complete the statement: $5824 L = \\text{___ } kL$.",
    "options": [
      "$5.824\\text{ kL}$",
      "$58.239999999999995\\text{ kL}$",
      "$0.5824\\text{ kL}$",
      "$582.4\\text{ kL}$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n      <p><strong>Step-by-step breakdown:</strong></p>\n      <p>Since $1\\text{ kL} = 1000\\text{ L}$, divide by $1000$:<br>$5824 \\div 1000 = 5.824\\text{ kL}$.</p>\n    </div>",
    "createdAt": "2026-05-17T12:19:48.824Z"
  },
  {
    "chapterId": "y7-8",
    "chapterTitle": "Chapter 8: Measurement",
    "topicId": "y7-8a",
    "topicCode": "8A",
    "topicTitle": "Units of measurement",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "Each lap of a swimming pool is $25\\text{ m}$. How many laps must I swim to cover a total distance of $1.5\\text{ km}$?",
    "options": [
      "60",
      "40",
      "50",
      "80"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n    <p><strong>Step-by-step breakdown:</strong></p>\n    <p><strong>Step 1:</strong> Convert the target distance from kilometres to metres:<br>$1.5\\text{ km} = 1.5 \\times 1000 = 1500\\text{ m}$.</p>\n    <p><strong>Step 2:</strong> Divide the total distance in metres by the length of one lap:<br>$\\text{Number of laps} = \\frac{1500\\text{ m}}{25\\text{ m}} = 60\\text{ laps}$.</p>\n  </div>",
    "createdAt": "2026-05-17T12:19:48.824Z"
  },
  {
    "chapterId": "y7-8",
    "chapterTitle": "Chapter 8: Measurement",
    "topicId": "y7-8a",
    "topicCode": "8A",
    "topicTitle": "Units of measurement",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "A small bag of flour weighs $250\\text{ g}$ and a large bag weighs $2\\text{ kg}$. What is the total weight in both grams and kilograms if you buy $4$ small bags and $3$ large bags of flour?",
    "options": [
      "7000 g or 7 kg",
      "6500 g or 6.5 kg",
      "7500 g or 7.5 kg",
      "8000 g or 8 kg"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n    <p><strong>Step-by-step breakdown:</strong></p>\n    <p><strong>Step 1:</strong> Calculate the weight of the 4 small bags:<br>$4 \\times 250\\text{ g} = 1000\\text{ g} = 1\\text{ kg}$.</p>\n    <p><strong>Step 2:</strong> Calculate the weight of the 3 large bags:<br>$3 \\times 2\\text{ kg} = 6\\text{ kg} = 6000\\text{ g}$.</p>\n    <p><strong>Step 3:</strong> Sum the weights to find the total:<br>$\\text{In kilograms:} \\; 1\\text{ kg} + 6\\text{ kg} = 7\\text{ kg}$<br>$\\text{In grams:} \\; 1000\\text{ g} + 6000\\text{ g} = 7000\\text{ g}$.</p>\n  </div>",
    "createdAt": "2026-05-17T12:19:48.824Z"
  },
  {
    "chapterId": "y7-8",
    "chapterTitle": "Chapter 8: Measurement",
    "topicId": "y7-8a",
    "topicCode": "8A",
    "topicTitle": "Units of measurement",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "hard",
    "isActive": true,
    "isManual": true,
    "question": "Markers on a running track are placed $50\\text{ m}$ apart. If the total distance from the first marker to the last one is $2\\text{ km}$, how many markers are there in total?",
    "options": [
      "41",
      "40",
      "39",
      "42"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n    <p><strong>Step-by-step breakdown:</strong></p>\n    <p><strong>Step 1:</strong> Convert the total track distance to metres:<br>$2\\text{ km} = 2000\\text{ m}$.</p>\n    <p><strong>Step 2:</strong> Calculate the number of intervals between the markers:<br>$\\text{Intervals} = \\frac{2000\\text{ m}}{50\\text{ m}} = 40$.</p>\n    <p><strong>Step 3:</strong> Since there is a marker at both the starting and ending point, the number of markers is always $1$ more than the number of intervals:<br>$\\text{Total markers} = 40 + 1 = 41$.</p>\n  </div>",
    "createdAt": "2026-05-17T12:19:48.824Z"
  },
  {
    "chapterId": "y7-8",
    "chapterTitle": "Chapter 8: Measurement",
    "topicId": "y7-8a",
    "topicCode": "8A",
    "topicTitle": "Units of measurement",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "hard",
    "isActive": true,
    "isManual": true,
    "question": "A whiteboard, which is $1.2\\text{ m}$ wide, is to be placed in the exact centre of a classroom wall. The total length of the wall from left to right is $6\\text{ m}$. What is the distance from the left-hand edge of the wall to the left-hand edge of the whiteboard?",
    "options": [
      "2.4 m",
      "2.6 m",
      "2.2 m",
      "4.8 m"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n    <p><strong>Step-by-step breakdown:</strong></p>\n    <p><strong>Step 1:</strong> Convert all measurements to the same unit (metres):<br>Wall length $= 6\\text{ m}$<br>Whiteboard width $= 1.2\\text{ m}$.</p>\n    <p><strong>Step 2:</strong> Find the total leftover space on the wall by subtracting the whiteboard width from the total wall length:<br>$\\text{Leftover space} = 6\\text{ m} - 1.2\\text{ m} = 4.8\\text{ m}$.</p>\n    <p><strong>Step 3:</strong> Since the whiteboard is centered, this leftover space is divided equally between the left and right sides:<br>$\\text{Left side distance} = \\frac{4.8\\text{ m}}{2} = 2.4\\text{ m}$.</p>\n  </div>",
    "createdAt": "2026-05-17T12:19:48.824Z"
  },
  {
    "chapterId": "y7-8",
    "chapterTitle": "Chapter 8: Measurement",
    "topicId": "y7-8a",
    "topicCode": "8A",
    "topicTitle": "Units of measurement",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "Calculate: $2.06\\text{ kg} \\times 8$",
    "options": [
      "$16.48 kg$",
      "$16.8 kg$",
      "$164.8 kg$",
      "$1.648 kg$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n      <p><strong>Step-by-step breakdown:</strong></p>\n      <p>Multiply the numbers: $2.06 \\times 8 = 16.48$. Keep the unit: $16.48\\text{ kg}$.</p>\n    </div>",
    "createdAt": "2026-05-17T12:19:48.824Z"
  },
  {
    "chapterId": "y7-8",
    "chapterTitle": "Chapter 8: Measurement",
    "topicId": "y7-8a",
    "topicCode": "8A",
    "topicTitle": "Units of measurement",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "Calculate: $3.504\\text{ m} \\times 6$",
    "options": [
      "$21.024 m$",
      "$21.24 m$",
      "$210.24 m$",
      "$2.1024 m$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n      <p><strong>Step-by-step breakdown:</strong></p>\n      <p>Multiply the numbers: $3.504 \\times 6 = 21.024$. Keep the unit: $21.024\\text{ m}$.</p>\n    </div>",
    "createdAt": "2026-05-17T12:19:48.824Z"
  },
  {
    "chapterId": "y7-8",
    "chapterTitle": "Chapter 8: Measurement",
    "topicId": "y7-8a",
    "topicCode": "8A",
    "topicTitle": "Units of measurement",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "Calculate: $15.4\\text{ cm} \\times 12$",
    "options": [
      "$184.8 cm$",
      "$18.48 cm$",
      "$1848 cm$",
      "$1.848 m$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n      <p><strong>Step-by-step breakdown:</strong></p>\n      <p>Multiply the numbers: $15.4 \\times 12 = 184.8$. Keep the unit: $184.8\\text{ cm}$.</p>\n    </div>",
    "createdAt": "2026-05-17T12:19:48.824Z"
  },
  {
    "chapterId": "y7-8",
    "chapterTitle": "Chapter 8: Measurement",
    "topicId": "y7-8a",
    "topicCode": "8A",
    "topicTitle": "Units of measurement",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "Calculate: $135\\text{ kg} \\times 14$",
    "options": [
      "$1890 kg$",
      "$18900 kg$",
      "$189 kg$",
      "$18.9 kg$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n      <p><strong>Step-by-step breakdown:</strong></p>\n      <p>Multiply the numbers: $135 \\times 14 = 1890$. Keep the unit: $1890\\text{ kg}$.</p>\n    </div>",
    "createdAt": "2026-05-17T12:19:48.824Z"
  },
  {
    "chapterId": "y7-8",
    "chapterTitle": "Chapter 8: Measurement",
    "topicId": "y7-8a",
    "topicCode": "8A",
    "topicTitle": "Units of measurement",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "Calculate: $2.508\\text{ t} \\times 24$",
    "options": [
      "$60.192 t$",
      "$601.92 t$",
      "$6.0192 t$",
      "$60192 kg$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n      <p><strong>Step-by-step breakdown:</strong></p>\n      <p>Multiply the numbers: $2.508 \\times 24 = 60.192$. Keep the unit: $60.192\\text{ t}$.</p>\n    </div>",
    "createdAt": "2026-05-17T12:19:48.824Z"
  },
  {
    "chapterId": "y7-8",
    "chapterTitle": "Chapter 8: Measurement",
    "topicId": "y7-8a",
    "topicCode": "8A",
    "topicTitle": "Units of measurement",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "Calculate: $96\\text{ m} \\div 8$",
    "options": [
      "$12 m$",
      "$14 m$",
      "$10.5 m$",
      "$11.8 m$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n      <p><strong>Step-by-step breakdown:</strong></p>\n      <p>Divide the numbers: $96 \\div 8 = 12$. Keep the unit: $12\\text{ m}$.</p>\n    </div>",
    "createdAt": "2026-05-17T12:19:48.824Z"
  },
  {
    "chapterId": "y7-8",
    "chapterTitle": "Chapter 8: Measurement",
    "topicId": "y7-8a",
    "topicCode": "8A",
    "topicTitle": "Units of measurement",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "Calculate: $42.56\\text{ t} \\div 16$",
    "options": [
      "$2.66 t$",
      "$2.6 t$",
      "$26.6 t$",
      "$0.266 t$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n      <p><strong>Step-by-step breakdown:</strong></p>\n      <p>Divide the numbers: $42.56 \\div 16 = 2.66$. Keep the unit: $2.66\\text{ t}$.</p>\n    </div>",
    "createdAt": "2026-05-17T12:19:48.824Z"
  },
  {
    "chapterId": "y7-8",
    "chapterTitle": "Chapter 8: Measurement",
    "topicId": "y7-8a",
    "topicCode": "8A",
    "topicTitle": "Units of measurement",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "Calculate: $84.288\\text{ kg} \\div 6$",
    "options": [
      "$14.048 kg$",
      "$14.48 kg$",
      "$1.4048 kg$",
      "$140.48 kg$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n      <p><strong>Step-by-step breakdown:</strong></p>\n      <p>Divide the numbers: $84.288 \\div 6 = 14.048$. Keep the unit: $14.048\\text{ kg}$.</p>\n    </div>",
    "createdAt": "2026-05-17T12:19:48.824Z"
  },
  {
    "chapterId": "y7-8",
    "chapterTitle": "Chapter 8: Measurement",
    "topicId": "y7-8a",
    "topicCode": "8A",
    "topicTitle": "Units of measurement",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "Calculate: $7.875\\text{ km} \\div 5$",
    "options": [
      "$1.575 km$",
      "$1.55 km$",
      "$15.75 km$",
      "$0.1575 km$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n      <p><strong>Step-by-step breakdown:</strong></p>\n      <p>Divide the numbers: $7.875 \\div 5 = 1.575$. Keep the unit: $1.575\\text{ km}$.</p>\n    </div>",
    "createdAt": "2026-05-17T12:19:48.824Z"
  },
  {
    "chapterId": "y7-8",
    "chapterTitle": "Chapter 8: Measurement",
    "topicId": "y7-8a",
    "topicCode": "8A",
    "topicTitle": "Units of measurement",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "Find the cost of: $8\\text{ m}$ of string at $85\\text{ c}$ a metre",
    "options": [
      "$6.80",
      "$68.00",
      "$0.68",
      "$7.20"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n      <p><strong>Step-by-step breakdown:</strong></p>\n      <p>Cost = length $\\times$ price $= 8 \\times 85\\text{ c} = 680\\text{ c} = \\$6.80$.</p>\n    </div>",
    "createdAt": "2026-05-17T12:19:48.825Z"
  },
  {
    "chapterId": "y7-8",
    "chapterTitle": "Chapter 8: Measurement",
    "topicId": "y7-8a",
    "topicCode": "8A",
    "topicTitle": "Units of measurement",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "Find the cost of: $400\\text{ mm}$ of ribbon at $95\\text{ c}$ a metre",
    "options": [
      "$0.38",
      "$3.80",
      "$38.00",
      "$0.40"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n      <p><strong>Step-by-step breakdown:</strong></p>\n      <p>Convert length to metres: $400\\text{ mm} = 0.4\\text{ m}$. <br>Cost $= 0.4 \\times 95\\text{ c} = 38\\text{ c} = \\$0.38$.</p>\n    </div>",
    "createdAt": "2026-05-17T12:19:48.825Z"
  },
  {
    "chapterId": "y7-8",
    "chapterTitle": "Chapter 8: Measurement",
    "topicId": "y7-8a",
    "topicCode": "8A",
    "topicTitle": "Units of measurement",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "Find the cost of: $6\\text{ L}$ of oil at $\\$1.80$ per litre",
    "options": [
      "$10.80",
      "$108.00",
      "$1.08",
      "$12.00"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n      <p><strong>Step-by-step breakdown:</strong></p>\n      <p>Cost = volume $\\times$ price per litre $= 6 \\times \\$1.80 = \\$10.80$.</p>\n    </div>",
    "createdAt": "2026-05-17T12:19:48.825Z"
  },
  {
    "chapterId": "y7-8",
    "chapterTitle": "Chapter 8: Measurement",
    "topicId": "y7-8a",
    "topicCode": "8A",
    "topicTitle": "Units of measurement",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "Find the cost of: $200\\text{ g}$ of fudge at $\\$4.50$ a kilogram",
    "options": [
      "$0.90",
      "$9.00",
      "$0.09",
      "$1.80"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n      <p><strong>Step-by-step breakdown:</strong></p>\n      <p>Convert mass to kg: $200\\text{ g} = 0.2\\text{ kg}$.<br>Cost $= 0.2 \\times \\$4.50 = \\$0.90$.</p>\n    </div>",
    "createdAt": "2026-05-17T12:19:48.825Z"
  },
  {
    "chapterId": "y7-8",
    "chapterTitle": "Chapter 8: Measurement",
    "topicId": "y7-8a",
    "topicCode": "8A",
    "topicTitle": "Units of measurement",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "Find the cost of: $12\\text{ kg}$ of rice at $\\$0.95$ a kilogram",
    "options": [
      "$11.40",
      "$114.00",
      "$1.14",
      "$10.80"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n      <p><strong>Step-by-step breakdown:</strong></p>\n      <p>Cost = mass $\\times$ price per kg $= 12 \\times \\$0.95 = \\$11.40$.</p>\n    </div>",
    "createdAt": "2026-05-17T12:19:48.825Z"
  },
  {
    "chapterId": "y7-8",
    "chapterTitle": "Chapter 8: Measurement",
    "topicId": "y7-8a",
    "topicCode": "8A",
    "topicTitle": "Units of measurement",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "Find the cost of: $350\\text{ m}$ of rope at $\\$140$ a kilometre",
    "options": [
      "$49.00",
      "$490.00",
      "$4.90",
      "$56.00"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n      <p><strong>Step-by-step breakdown:</strong></p>\n      <p>Convert length to km: $350\\text{ m} = 0.35\\text{ km}$.<br>Cost $= 0.35 \\times \\$140 = \\$49.00$.</p>\n    </div>",
    "createdAt": "2026-05-17T12:19:48.825Z"
  },
  {
    "chapterId": "y7-8",
    "chapterTitle": "Chapter 8: Measurement",
    "topicId": "y7-8a",
    "topicCode": "8A",
    "topicTitle": "Units of measurement",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "Find the cost of: carting $8\\text{ t}$ of rubbish at $\\$35$ a tonne",
    "options": [
      "$280.00",
      "$28.00",
      "$2800.00",
      "$240.00"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n      <p><strong>Step-by-step breakdown:</strong></p>\n      <p>Cost = mass $\\times$ rate per tonne $= 8 \\times \\$35 = \\$280.00$.</p>\n    </div>",
    "createdAt": "2026-05-17T12:19:48.825Z"
  },
  {
    "chapterId": "y7-8",
    "chapterTitle": "Chapter 8: Measurement",
    "topicId": "y7-8a",
    "topicCode": "8A",
    "topicTitle": "Units of measurement",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "Find the cost of: $300\\text{ mL}$ of shampoo at $\\$8.50$ a litre",
    "options": [
      "$2.55",
      "$25.50",
      "$0.255",
      "$3.00"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n      <p><strong>Step-by-step breakdown:</strong></p>\n      <p>Convert volume to litres: $300\\text{ mL} = 0.3\\text{ L}$.<br>Cost $= 0.3 \\times \\$8.50 = \\$2.55$.</p>\n    </div>",
    "createdAt": "2026-05-17T12:19:48.825Z"
  },
  {
    "chapterId": "y7-8",
    "chapterTitle": "Chapter 8: Measurement",
    "topicId": "y7-8a",
    "topicCode": "8A",
    "topicTitle": "Units of measurement",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "Find the cost of: $800\\text{ kg}$ of sand at $\\$25$ a tonne",
    "options": [
      "$20.00",
      "$2.00",
      "$200.00",
      "$25.00"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n      <p><strong>Step-by-step breakdown:</strong></p>\n      <p>Convert mass to tonnes: $800\\text{ kg} = 0.8\\text{ t}$.<br>Cost $= 0.8 \\times \\$25 = \\$20.00$.</p>\n    </div>",
    "createdAt": "2026-05-17T12:19:48.825Z"
  }
];

export const importYear7Ch8A = async (forceReset = false) => {
  console.log('[Ch8A Year 7 Import] STARTING PHYSICAL SYNC...');
  let importedCount = 0;
  try {
    const qRef = collection(db, 'questions');
    
    if (forceReset) {
      console.log('Force reset enabled. Deleting existing Y7 Ch8A questions...');
      const existingSnap = await getDocs(query(qRef, where('topicId', '==', 'y7-8a')));
      for (const doc of existingSnap.docs) {
        await deleteDoc(doc.ref);
      }
      console.log('Deleted ' + existingSnap.size + ' existing questions.');
    }

    const existingSnap = await getDocs(query(qRef, where('topicId', '==', 'y7-8a')));
    const existingQuestions = new Set(existingSnap.docs.map(doc => doc.data().question.trim()));
    
    for (const q of allQuestions) {
      if (!existingQuestions.has(q.question.trim())) {
        await addDoc(collection(db, 'questions'), q);
        importedCount++;
      }
    }
    console.log('[Ch8A Year 7 Import] SUCCESS! ' + importedCount + ' new questions imported.');
    return importedCount;
  } catch (error) {
    console.error('[Ch8A Year 7 Import] ERROR:', error);
    return 0;
  }
};
