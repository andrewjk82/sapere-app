import { db } from '../firebase/config.js';
import { collection, addDoc, getDocs, query, where, deleteDoc } from 'firebase/firestore';

export const allQuestions = [
  {
    "chapterId": "y7-14",
    "chapterTitle": "Chapter 14: Percentages and Ratios",
    "topicId": "y7-14a",
    "topicCode": "14A",
    "topicTitle": "Percentages, fractions and decimals",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isActive": true,
    "isManual": true,
    "question": "What percentage of the square grid below is shaded?\n\n<div style=\"display: flex; justify-content: center; margin: 16px 0;\">\n    <svg viewBox=\"0 0 150 150\" width=\"150\" height=\"150\" xmlns=\"http://www.w3.org/2000/svg\" style=\"border: 1px solid #475569; border-radius: 4px;\">\n      <rect x=\"0\" y=\"0\" width=\"15\" height=\"15\" fill=\"#3b82f6\" stroke=\"#94a3b8\" stroke-width=\"1\" />\n<rect x=\"15\" y=\"0\" width=\"15\" height=\"15\" fill=\"#3b82f6\" stroke=\"#94a3b8\" stroke-width=\"1\" />\n<rect x=\"30\" y=\"0\" width=\"15\" height=\"15\" fill=\"#3b82f6\" stroke=\"#94a3b8\" stroke-width=\"1\" />\n<rect x=\"45\" y=\"0\" width=\"15\" height=\"15\" fill=\"#3b82f6\" stroke=\"#94a3b8\" stroke-width=\"1\" />\n<rect x=\"60\" y=\"0\" width=\"15\" height=\"15\" fill=\"#3b82f6\" stroke=\"#94a3b8\" stroke-width=\"1\" />\n<rect x=\"75\" y=\"0\" width=\"15\" height=\"15\" fill=\"#3b82f6\" stroke=\"#94a3b8\" stroke-width=\"1\" />\n<rect x=\"90\" y=\"0\" width=\"15\" height=\"15\" fill=\"#3b82f6\" stroke=\"#94a3b8\" stroke-width=\"1\" />\n<rect x=\"105\" y=\"0\" width=\"15\" height=\"15\" fill=\"#3b82f6\" stroke=\"#94a3b8\" stroke-width=\"1\" />\n<rect x=\"120\" y=\"0\" width=\"15\" height=\"15\" fill=\"#3b82f6\" stroke=\"#94a3b8\" stroke-width=\"1\" />\n<rect x=\"135\" y=\"0\" width=\"15\" height=\"15\" fill=\"#3b82f6\" stroke=\"#94a3b8\" stroke-width=\"1\" />\n<rect x=\"0\" y=\"15\" width=\"15\" height=\"15\" fill=\"#3b82f6\" stroke=\"#94a3b8\" stroke-width=\"1\" />\n<rect x=\"15\" y=\"15\" width=\"15\" height=\"15\" fill=\"#3b82f6\" stroke=\"#94a3b8\" stroke-width=\"1\" />\n<rect x=\"30\" y=\"15\" width=\"15\" height=\"15\" fill=\"#3b82f6\" stroke=\"#94a3b8\" stroke-width=\"1\" />\n<rect x=\"45\" y=\"15\" width=\"15\" height=\"15\" fill=\"#3b82f6\" stroke=\"#94a3b8\" stroke-width=\"1\" />\n<rect x=\"60\" y=\"15\" width=\"15\" height=\"15\" fill=\"#3b82f6\" stroke=\"#94a3b8\" stroke-width=\"1\" />\n<rect x=\"75\" y=\"15\" width=\"15\" height=\"15\" fill=\"#3b82f6\" stroke=\"#94a3b8\" stroke-width=\"1\" />\n<rect x=\"90\" y=\"15\" width=\"15\" height=\"15\" fill=\"#3b82f6\" stroke=\"#94a3b8\" stroke-width=\"1\" />\n<rect x=\"105\" y=\"15\" width=\"15\" height=\"15\" fill=\"#3b82f6\" stroke=\"#94a3b8\" stroke-width=\"1\" />\n<rect x=\"120\" y=\"15\" width=\"15\" height=\"15\" fill=\"#3b82f6\" stroke=\"#94a3b8\" stroke-width=\"1\" />\n<rect x=\"135\" y=\"15\" width=\"15\" height=\"15\" fill=\"#3b82f6\" stroke=\"#94a3b8\" stroke-width=\"1\" />\n<rect x=\"0\" y=\"30\" width=\"15\" height=\"15\" fill=\"#3b82f6\" stroke=\"#94a3b8\" stroke-width=\"1\" />\n<rect x=\"15\" y=\"30\" width=\"15\" height=\"15\" fill=\"#3b82f6\" stroke=\"#94a3b8\" stroke-width=\"1\" />\n<rect x=\"30\" y=\"30\" width=\"15\" height=\"15\" fill=\"#3b82f6\" stroke=\"#94a3b8\" stroke-width=\"1\" />\n<rect x=\"45\" y=\"30\" width=\"15\" height=\"15\" fill=\"#3b82f6\" stroke=\"#94a3b8\" stroke-width=\"1\" />\n<rect x=\"60\" y=\"30\" width=\"15\" height=\"15\" fill=\"#3b82f6\" stroke=\"#94a3b8\" stroke-width=\"1\" />\n<rect x=\"75\" y=\"30\" width=\"15\" height=\"15\" fill=\"#3b82f6\" stroke=\"#94a3b8\" stroke-width=\"1\" />\n<rect x=\"90\" y=\"30\" width=\"15\" height=\"15\" fill=\"#3b82f6\" stroke=\"#94a3b8\" stroke-width=\"1\" />\n<rect x=\"105\" y=\"30\" width=\"15\" height=\"15\" fill=\"#3b82f6\" stroke=\"#94a3b8\" stroke-width=\"1\" />\n<rect x=\"120\" y=\"30\" width=\"15\" height=\"15\" fill=\"#3b82f6\" stroke=\"#94a3b8\" stroke-width=\"1\" />\n<rect x=\"135\" y=\"30\" width=\"15\" height=\"15\" fill=\"#3b82f6\" stroke=\"#94a3b8\" stroke-width=\"1\" />\n<rect x=\"0\" y=\"45\" width=\"15\" height=\"15\" fill=\"#3b82f6\" stroke=\"#94a3b8\" stroke-width=\"1\" />\n<rect x=\"15\" y=\"45\" width=\"15\" height=\"15\" fill=\"#3b82f6\" stroke=\"#94a3b8\" stroke-width=\"1\" />\n<rect x=\"30\" y=\"45\" width=\"15\" height=\"15\" fill=\"#3b82f6\" stroke=\"#94a3b8\" stroke-width=\"1\" />\n<rect x=\"45\" y=\"45\" width=\"15\" height=\"15\" fill=\"#3b82f6\" stroke=\"#94a3b8\" stroke-width=\"1\" />\n<rect x=\"60\" y=\"45\" width=\"15\" height=\"15\" fill=\"#3b82f6\" stroke=\"#94a3b8\" stroke-width=\"1\" />\n<rect x=\"75\" y=\"45\" width=\"15\" height=\"15\" fill=\"#3b82f6\" stroke=\"#94a3b8\" stroke-width=\"1\" />\n<rect x=\"90\" y=\"45\" width=\"15\" height=\"15\" fill=\"#3b82f6\" stroke=\"#94a3b8\" stroke-width=\"1\" />\n<rect x=\"105\" y=\"45\" width=\"15\" height=\"15\" fill=\"#3b82f6\" stroke=\"#94a3b8\" stroke-width=\"1\" />\n<rect x=\"120\" y=\"45\" width=\"15\" height=\"15\" fill=\"#3b82f6\" stroke=\"#94a3b8\" stroke-width=\"1\" />\n<rect x=\"135\" y=\"45\" width=\"15\" height=\"15\" fill=\"#3b82f6\" stroke=\"#94a3b8\" stroke-width=\"1\" />\n<rect x=\"0\" y=\"60\" width=\"15\" height=\"15\" fill=\"#3b82f6\" stroke=\"#94a3b8\" stroke-width=\"1\" />\n<rect x=\"15\" y=\"60\" width=\"15\" height=\"15\" fill=\"#3b82f6\" stroke=\"#94a3b8\" stroke-width=\"1\" />\n<rect x=\"30\" y=\"60\" width=\"15\" height=\"15\" fill=\"#3b82f6\" stroke=\"#94a3b8\" stroke-width=\"1\" />\n<rect x=\"45\" y=\"60\" width=\"15\" height=\"15\" fill=\"#3b82f6\" stroke=\"#94a3b8\" stroke-width=\"1\" />\n<rect x=\"60\" y=\"60\" width=\"15\" height=\"15\" fill=\"#3b82f6\" stroke=\"#94a3b8\" stroke-width=\"1\" />\n<rect x=\"75\" y=\"60\" width=\"15\" height=\"15\" fill=\"#3b82f6\" stroke=\"#94a3b8\" stroke-width=\"1\" />\n<rect x=\"90\" y=\"60\" width=\"15\" height=\"15\" fill=\"#3b82f6\" stroke=\"#94a3b8\" stroke-width=\"1\" />\n<rect x=\"105\" y=\"60\" width=\"15\" height=\"15\" fill=\"#3b82f6\" stroke=\"#94a3b8\" stroke-width=\"1\" />\n<rect x=\"120\" y=\"60\" width=\"15\" height=\"15\" fill=\"#3b82f6\" stroke=\"#94a3b8\" stroke-width=\"1\" />\n<rect x=\"135\" y=\"60\" width=\"15\" height=\"15\" fill=\"#3b82f6\" stroke=\"#94a3b8\" stroke-width=\"1\" />\n<rect x=\"0\" y=\"75\" width=\"15\" height=\"15\" fill=\"#3b82f6\" stroke=\"#94a3b8\" stroke-width=\"1\" />\n<rect x=\"15\" y=\"75\" width=\"15\" height=\"15\" fill=\"#3b82f6\" stroke=\"#94a3b8\" stroke-width=\"1\" />\n<rect x=\"30\" y=\"75\" width=\"15\" height=\"15\" fill=\"#3b82f6\" stroke=\"#94a3b8\" stroke-width=\"1\" />\n<rect x=\"45\" y=\"75\" width=\"15\" height=\"15\" fill=\"#3b82f6\" stroke=\"#94a3b8\" stroke-width=\"1\" />\n<rect x=\"60\" y=\"75\" width=\"15\" height=\"15\" fill=\"#3b82f6\" stroke=\"#94a3b8\" stroke-width=\"1\" />\n<rect x=\"75\" y=\"75\" width=\"15\" height=\"15\" fill=\"#3b82f6\" stroke=\"#94a3b8\" stroke-width=\"1\" />\n<rect x=\"90\" y=\"75\" width=\"15\" height=\"15\" fill=\"#3b82f6\" stroke=\"#94a3b8\" stroke-width=\"1\" />\n<rect x=\"105\" y=\"75\" width=\"15\" height=\"15\" fill=\"#3b82f6\" stroke=\"#94a3b8\" stroke-width=\"1\" />\n<rect x=\"120\" y=\"75\" width=\"15\" height=\"15\" fill=\"#3b82f6\" stroke=\"#94a3b8\" stroke-width=\"1\" />\n<rect x=\"135\" y=\"75\" width=\"15\" height=\"15\" fill=\"#3b82f6\" stroke=\"#94a3b8\" stroke-width=\"1\" />\n<rect x=\"0\" y=\"90\" width=\"15\" height=\"15\" fill=\"#3b82f6\" stroke=\"#94a3b8\" stroke-width=\"1\" />\n<rect x=\"15\" y=\"90\" width=\"15\" height=\"15\" fill=\"#3b82f6\" stroke=\"#94a3b8\" stroke-width=\"1\" />\n<rect x=\"30\" y=\"90\" width=\"15\" height=\"15\" fill=\"#3b82f6\" stroke=\"#94a3b8\" stroke-width=\"1\" />\n<rect x=\"45\" y=\"90\" width=\"15\" height=\"15\" fill=\"#3b82f6\" stroke=\"#94a3b8\" stroke-width=\"1\" />\n<rect x=\"60\" y=\"90\" width=\"15\" height=\"15\" fill=\"#3b82f6\" stroke=\"#94a3b8\" stroke-width=\"1\" />\n<rect x=\"75\" y=\"90\" width=\"15\" height=\"15\" fill=\"#3b82f6\" stroke=\"#94a3b8\" stroke-width=\"1\" />\n<rect x=\"90\" y=\"90\" width=\"15\" height=\"15\" fill=\"#3b82f6\" stroke=\"#94a3b8\" stroke-width=\"1\" />\n<rect x=\"105\" y=\"90\" width=\"15\" height=\"15\" fill=\"#3b82f6\" stroke=\"#94a3b8\" stroke-width=\"1\" />\n<rect x=\"120\" y=\"90\" width=\"15\" height=\"15\" fill=\"#3b82f6\" stroke=\"#94a3b8\" stroke-width=\"1\" />\n<rect x=\"135\" y=\"90\" width=\"15\" height=\"15\" fill=\"#3b82f6\" stroke=\"#94a3b8\" stroke-width=\"1\" />\n<rect x=\"0\" y=\"105\" width=\"15\" height=\"15\" fill=\"#3b82f6\" stroke=\"#94a3b8\" stroke-width=\"1\" />\n<rect x=\"15\" y=\"105\" width=\"15\" height=\"15\" fill=\"#3b82f6\" stroke=\"#94a3b8\" stroke-width=\"1\" />\n<rect x=\"30\" y=\"105\" width=\"15\" height=\"15\" fill=\"#3b82f6\" stroke=\"#94a3b8\" stroke-width=\"1\" />\n<rect x=\"45\" y=\"105\" width=\"15\" height=\"15\" fill=\"#3b82f6\" stroke=\"#94a3b8\" stroke-width=\"1\" />\n<rect x=\"60\" y=\"105\" width=\"15\" height=\"15\" fill=\"#3b82f6\" stroke=\"#94a3b8\" stroke-width=\"1\" />\n<rect x=\"75\" y=\"105\" width=\"15\" height=\"15\" fill=\"#3b82f6\" stroke=\"#94a3b8\" stroke-width=\"1\" />\n<rect x=\"90\" y=\"105\" width=\"15\" height=\"15\" fill=\"#ffffff\" stroke=\"#94a3b8\" stroke-width=\"1\" />\n<rect x=\"105\" y=\"105\" width=\"15\" height=\"15\" fill=\"#ffffff\" stroke=\"#94a3b8\" stroke-width=\"1\" />\n<rect x=\"120\" y=\"105\" width=\"15\" height=\"15\" fill=\"#ffffff\" stroke=\"#94a3b8\" stroke-width=\"1\" />\n<rect x=\"135\" y=\"105\" width=\"15\" height=\"15\" fill=\"#ffffff\" stroke=\"#94a3b8\" stroke-width=\"1\" />\n<rect x=\"0\" y=\"120\" width=\"15\" height=\"15\" fill=\"#ffffff\" stroke=\"#94a3b8\" stroke-width=\"1\" />\n<rect x=\"15\" y=\"120\" width=\"15\" height=\"15\" fill=\"#ffffff\" stroke=\"#94a3b8\" stroke-width=\"1\" />\n<rect x=\"30\" y=\"120\" width=\"15\" height=\"15\" fill=\"#ffffff\" stroke=\"#94a3b8\" stroke-width=\"1\" />\n<rect x=\"45\" y=\"120\" width=\"15\" height=\"15\" fill=\"#ffffff\" stroke=\"#94a3b8\" stroke-width=\"1\" />\n<rect x=\"60\" y=\"120\" width=\"15\" height=\"15\" fill=\"#ffffff\" stroke=\"#94a3b8\" stroke-width=\"1\" />\n<rect x=\"75\" y=\"120\" width=\"15\" height=\"15\" fill=\"#ffffff\" stroke=\"#94a3b8\" stroke-width=\"1\" />\n<rect x=\"90\" y=\"120\" width=\"15\" height=\"15\" fill=\"#ffffff\" stroke=\"#94a3b8\" stroke-width=\"1\" />\n<rect x=\"105\" y=\"120\" width=\"15\" height=\"15\" fill=\"#ffffff\" stroke=\"#94a3b8\" stroke-width=\"1\" />\n<rect x=\"120\" y=\"120\" width=\"15\" height=\"15\" fill=\"#ffffff\" stroke=\"#94a3b8\" stroke-width=\"1\" />\n<rect x=\"135\" y=\"120\" width=\"15\" height=\"15\" fill=\"#ffffff\" stroke=\"#94a3b8\" stroke-width=\"1\" />\n<rect x=\"0\" y=\"135\" width=\"15\" height=\"15\" fill=\"#ffffff\" stroke=\"#94a3b8\" stroke-width=\"1\" />\n<rect x=\"15\" y=\"135\" width=\"15\" height=\"15\" fill=\"#ffffff\" stroke=\"#94a3b8\" stroke-width=\"1\" />\n<rect x=\"30\" y=\"135\" width=\"15\" height=\"15\" fill=\"#ffffff\" stroke=\"#94a3b8\" stroke-width=\"1\" />\n<rect x=\"45\" y=\"135\" width=\"15\" height=\"15\" fill=\"#ffffff\" stroke=\"#94a3b8\" stroke-width=\"1\" />\n<rect x=\"60\" y=\"135\" width=\"15\" height=\"15\" fill=\"#ffffff\" stroke=\"#94a3b8\" stroke-width=\"1\" />\n<rect x=\"75\" y=\"135\" width=\"15\" height=\"15\" fill=\"#ffffff\" stroke=\"#94a3b8\" stroke-width=\"1\" />\n<rect x=\"90\" y=\"135\" width=\"15\" height=\"15\" fill=\"#ffffff\" stroke=\"#94a3b8\" stroke-width=\"1\" />\n<rect x=\"105\" y=\"135\" width=\"15\" height=\"15\" fill=\"#ffffff\" stroke=\"#94a3b8\" stroke-width=\"1\" />\n<rect x=\"120\" y=\"135\" width=\"15\" height=\"15\" fill=\"#ffffff\" stroke=\"#94a3b8\" stroke-width=\"1\" />\n<rect x=\"135\" y=\"135\" width=\"15\" height=\"15\" fill=\"#ffffff\" stroke=\"#94a3b8\" stroke-width=\"1\" />\n\n    </svg>\n  </div>",
    "options": [
      "76%",
      "24%",
      "7.6%",
      "84%"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>A standard square grid contains 10 rows by 10 columns, which equals 100 small squares in total.</p><p>By counting, exactly 76 small squares are shaded.</p><p>Percentage = $$\\frac{76}{100} \\times 100\\% = 76\\%$$</p></div>",
    "createdAt": "2026-05-17T13:33:12.189Z"
  },
  {
    "chapterId": "y7-14",
    "chapterTitle": "Chapter 14: Percentages and Ratios",
    "topicId": "y7-14a",
    "topicCode": "14A",
    "topicTitle": "Percentages, fractions and decimals",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isActive": true,
    "isManual": true,
    "question": "What percentage of the square grid below is shaded?\n\n<div style=\"display: flex; justify-content: center; margin: 16px 0;\">\n    <svg viewBox=\"0 0 150 150\" width=\"150\" height=\"150\" xmlns=\"http://www.w3.org/2000/svg\" style=\"border: 1px solid #475569; border-radius: 4px;\">\n      <rect x=\"0\" y=\"0\" width=\"15\" height=\"15\" fill=\"#3b82f6\" stroke=\"#94a3b8\" stroke-width=\"1\" />\n<rect x=\"15\" y=\"0\" width=\"15\" height=\"15\" fill=\"#3b82f6\" stroke=\"#94a3b8\" stroke-width=\"1\" />\n<rect x=\"30\" y=\"0\" width=\"15\" height=\"15\" fill=\"#3b82f6\" stroke=\"#94a3b8\" stroke-width=\"1\" />\n<rect x=\"45\" y=\"0\" width=\"15\" height=\"15\" fill=\"#3b82f6\" stroke=\"#94a3b8\" stroke-width=\"1\" />\n<rect x=\"60\" y=\"0\" width=\"15\" height=\"15\" fill=\"#3b82f6\" stroke=\"#94a3b8\" stroke-width=\"1\" />\n<rect x=\"75\" y=\"0\" width=\"15\" height=\"15\" fill=\"#3b82f6\" stroke=\"#94a3b8\" stroke-width=\"1\" />\n<rect x=\"90\" y=\"0\" width=\"15\" height=\"15\" fill=\"#3b82f6\" stroke=\"#94a3b8\" stroke-width=\"1\" />\n<rect x=\"105\" y=\"0\" width=\"15\" height=\"15\" fill=\"#3b82f6\" stroke=\"#94a3b8\" stroke-width=\"1\" />\n<rect x=\"120\" y=\"0\" width=\"15\" height=\"15\" fill=\"#3b82f6\" stroke=\"#94a3b8\" stroke-width=\"1\" />\n<rect x=\"135\" y=\"0\" width=\"15\" height=\"15\" fill=\"#3b82f6\" stroke=\"#94a3b8\" stroke-width=\"1\" />\n<rect x=\"0\" y=\"15\" width=\"15\" height=\"15\" fill=\"#3b82f6\" stroke=\"#94a3b8\" stroke-width=\"1\" />\n<rect x=\"15\" y=\"15\" width=\"15\" height=\"15\" fill=\"#3b82f6\" stroke=\"#94a3b8\" stroke-width=\"1\" />\n<rect x=\"30\" y=\"15\" width=\"15\" height=\"15\" fill=\"#3b82f6\" stroke=\"#94a3b8\" stroke-width=\"1\" />\n<rect x=\"45\" y=\"15\" width=\"15\" height=\"15\" fill=\"#3b82f6\" stroke=\"#94a3b8\" stroke-width=\"1\" />\n<rect x=\"60\" y=\"15\" width=\"15\" height=\"15\" fill=\"#3b82f6\" stroke=\"#94a3b8\" stroke-width=\"1\" />\n<rect x=\"75\" y=\"15\" width=\"15\" height=\"15\" fill=\"#3b82f6\" stroke=\"#94a3b8\" stroke-width=\"1\" />\n<rect x=\"90\" y=\"15\" width=\"15\" height=\"15\" fill=\"#3b82f6\" stroke=\"#94a3b8\" stroke-width=\"1\" />\n<rect x=\"105\" y=\"15\" width=\"15\" height=\"15\" fill=\"#3b82f6\" stroke=\"#94a3b8\" stroke-width=\"1\" />\n<rect x=\"120\" y=\"15\" width=\"15\" height=\"15\" fill=\"#3b82f6\" stroke=\"#94a3b8\" stroke-width=\"1\" />\n<rect x=\"135\" y=\"15\" width=\"15\" height=\"15\" fill=\"#3b82f6\" stroke=\"#94a3b8\" stroke-width=\"1\" />\n<rect x=\"0\" y=\"30\" width=\"15\" height=\"15\" fill=\"#3b82f6\" stroke=\"#94a3b8\" stroke-width=\"1\" />\n<rect x=\"15\" y=\"30\" width=\"15\" height=\"15\" fill=\"#3b82f6\" stroke=\"#94a3b8\" stroke-width=\"1\" />\n<rect x=\"30\" y=\"30\" width=\"15\" height=\"15\" fill=\"#3b82f6\" stroke=\"#94a3b8\" stroke-width=\"1\" />\n<rect x=\"45\" y=\"30\" width=\"15\" height=\"15\" fill=\"#3b82f6\" stroke=\"#94a3b8\" stroke-width=\"1\" />\n<rect x=\"60\" y=\"30\" width=\"15\" height=\"15\" fill=\"#3b82f6\" stroke=\"#94a3b8\" stroke-width=\"1\" />\n<rect x=\"75\" y=\"30\" width=\"15\" height=\"15\" fill=\"#3b82f6\" stroke=\"#94a3b8\" stroke-width=\"1\" />\n<rect x=\"90\" y=\"30\" width=\"15\" height=\"15\" fill=\"#3b82f6\" stroke=\"#94a3b8\" stroke-width=\"1\" />\n<rect x=\"105\" y=\"30\" width=\"15\" height=\"15\" fill=\"#3b82f6\" stroke=\"#94a3b8\" stroke-width=\"1\" />\n<rect x=\"120\" y=\"30\" width=\"15\" height=\"15\" fill=\"#3b82f6\" stroke=\"#94a3b8\" stroke-width=\"1\" />\n<rect x=\"135\" y=\"30\" width=\"15\" height=\"15\" fill=\"#3b82f6\" stroke=\"#94a3b8\" stroke-width=\"1\" />\n<rect x=\"0\" y=\"45\" width=\"15\" height=\"15\" fill=\"#3b82f6\" stroke=\"#94a3b8\" stroke-width=\"1\" />\n<rect x=\"15\" y=\"45\" width=\"15\" height=\"15\" fill=\"#3b82f6\" stroke=\"#94a3b8\" stroke-width=\"1\" />\n<rect x=\"30\" y=\"45\" width=\"15\" height=\"15\" fill=\"#3b82f6\" stroke=\"#94a3b8\" stroke-width=\"1\" />\n<rect x=\"45\" y=\"45\" width=\"15\" height=\"15\" fill=\"#3b82f6\" stroke=\"#94a3b8\" stroke-width=\"1\" />\n<rect x=\"60\" y=\"45\" width=\"15\" height=\"15\" fill=\"#3b82f6\" stroke=\"#94a3b8\" stroke-width=\"1\" />\n<rect x=\"75\" y=\"45\" width=\"15\" height=\"15\" fill=\"#3b82f6\" stroke=\"#94a3b8\" stroke-width=\"1\" />\n<rect x=\"90\" y=\"45\" width=\"15\" height=\"15\" fill=\"#3b82f6\" stroke=\"#94a3b8\" stroke-width=\"1\" />\n<rect x=\"105\" y=\"45\" width=\"15\" height=\"15\" fill=\"#3b82f6\" stroke=\"#94a3b8\" stroke-width=\"1\" />\n<rect x=\"120\" y=\"45\" width=\"15\" height=\"15\" fill=\"#3b82f6\" stroke=\"#94a3b8\" stroke-width=\"1\" />\n<rect x=\"135\" y=\"45\" width=\"15\" height=\"15\" fill=\"#3b82f6\" stroke=\"#94a3b8\" stroke-width=\"1\" />\n<rect x=\"0\" y=\"60\" width=\"15\" height=\"15\" fill=\"#3b82f6\" stroke=\"#94a3b8\" stroke-width=\"1\" />\n<rect x=\"15\" y=\"60\" width=\"15\" height=\"15\" fill=\"#3b82f6\" stroke=\"#94a3b8\" stroke-width=\"1\" />\n<rect x=\"30\" y=\"60\" width=\"15\" height=\"15\" fill=\"#3b82f6\" stroke=\"#94a3b8\" stroke-width=\"1\" />\n<rect x=\"45\" y=\"60\" width=\"15\" height=\"15\" fill=\"#3b82f6\" stroke=\"#94a3b8\" stroke-width=\"1\" />\n<rect x=\"60\" y=\"60\" width=\"15\" height=\"15\" fill=\"#3b82f6\" stroke=\"#94a3b8\" stroke-width=\"1\" />\n<rect x=\"75\" y=\"60\" width=\"15\" height=\"15\" fill=\"#3b82f6\" stroke=\"#94a3b8\" stroke-width=\"1\" />\n<rect x=\"90\" y=\"60\" width=\"15\" height=\"15\" fill=\"#3b82f6\" stroke=\"#94a3b8\" stroke-width=\"1\" />\n<rect x=\"105\" y=\"60\" width=\"15\" height=\"15\" fill=\"#3b82f6\" stroke=\"#94a3b8\" stroke-width=\"1\" />\n<rect x=\"120\" y=\"60\" width=\"15\" height=\"15\" fill=\"#3b82f6\" stroke=\"#94a3b8\" stroke-width=\"1\" />\n<rect x=\"135\" y=\"60\" width=\"15\" height=\"15\" fill=\"#3b82f6\" stroke=\"#94a3b8\" stroke-width=\"1\" />\n<rect x=\"0\" y=\"75\" width=\"15\" height=\"15\" fill=\"#3b82f6\" stroke=\"#94a3b8\" stroke-width=\"1\" />\n<rect x=\"15\" y=\"75\" width=\"15\" height=\"15\" fill=\"#3b82f6\" stroke=\"#94a3b8\" stroke-width=\"1\" />\n<rect x=\"30\" y=\"75\" width=\"15\" height=\"15\" fill=\"#3b82f6\" stroke=\"#94a3b8\" stroke-width=\"1\" />\n<rect x=\"45\" y=\"75\" width=\"15\" height=\"15\" fill=\"#3b82f6\" stroke=\"#94a3b8\" stroke-width=\"1\" />\n<rect x=\"60\" y=\"75\" width=\"15\" height=\"15\" fill=\"#3b82f6\" stroke=\"#94a3b8\" stroke-width=\"1\" />\n<rect x=\"75\" y=\"75\" width=\"15\" height=\"15\" fill=\"#3b82f6\" stroke=\"#94a3b8\" stroke-width=\"1\" />\n<rect x=\"90\" y=\"75\" width=\"15\" height=\"15\" fill=\"#3b82f6\" stroke=\"#94a3b8\" stroke-width=\"1\" />\n<rect x=\"105\" y=\"75\" width=\"15\" height=\"15\" fill=\"#3b82f6\" stroke=\"#94a3b8\" stroke-width=\"1\" />\n<rect x=\"120\" y=\"75\" width=\"15\" height=\"15\" fill=\"#3b82f6\" stroke=\"#94a3b8\" stroke-width=\"1\" />\n<rect x=\"135\" y=\"75\" width=\"15\" height=\"15\" fill=\"#3b82f6\" stroke=\"#94a3b8\" stroke-width=\"1\" />\n<rect x=\"0\" y=\"90\" width=\"15\" height=\"15\" fill=\"#3b82f6\" stroke=\"#94a3b8\" stroke-width=\"1\" />\n<rect x=\"15\" y=\"90\" width=\"15\" height=\"15\" fill=\"#3b82f6\" stroke=\"#94a3b8\" stroke-width=\"1\" />\n<rect x=\"30\" y=\"90\" width=\"15\" height=\"15\" fill=\"#3b82f6\" stroke=\"#94a3b8\" stroke-width=\"1\" />\n<rect x=\"45\" y=\"90\" width=\"15\" height=\"15\" fill=\"#3b82f6\" stroke=\"#94a3b8\" stroke-width=\"1\" />\n<rect x=\"60\" y=\"90\" width=\"15\" height=\"15\" fill=\"#ffffff\" stroke=\"#94a3b8\" stroke-width=\"1\" />\n<rect x=\"75\" y=\"90\" width=\"15\" height=\"15\" fill=\"#ffffff\" stroke=\"#94a3b8\" stroke-width=\"1\" />\n<rect x=\"90\" y=\"90\" width=\"15\" height=\"15\" fill=\"#ffffff\" stroke=\"#94a3b8\" stroke-width=\"1\" />\n<rect x=\"105\" y=\"90\" width=\"15\" height=\"15\" fill=\"#ffffff\" stroke=\"#94a3b8\" stroke-width=\"1\" />\n<rect x=\"120\" y=\"90\" width=\"15\" height=\"15\" fill=\"#ffffff\" stroke=\"#94a3b8\" stroke-width=\"1\" />\n<rect x=\"135\" y=\"90\" width=\"15\" height=\"15\" fill=\"#ffffff\" stroke=\"#94a3b8\" stroke-width=\"1\" />\n<rect x=\"0\" y=\"105\" width=\"15\" height=\"15\" fill=\"#ffffff\" stroke=\"#94a3b8\" stroke-width=\"1\" />\n<rect x=\"15\" y=\"105\" width=\"15\" height=\"15\" fill=\"#ffffff\" stroke=\"#94a3b8\" stroke-width=\"1\" />\n<rect x=\"30\" y=\"105\" width=\"15\" height=\"15\" fill=\"#ffffff\" stroke=\"#94a3b8\" stroke-width=\"1\" />\n<rect x=\"45\" y=\"105\" width=\"15\" height=\"15\" fill=\"#ffffff\" stroke=\"#94a3b8\" stroke-width=\"1\" />\n<rect x=\"60\" y=\"105\" width=\"15\" height=\"15\" fill=\"#ffffff\" stroke=\"#94a3b8\" stroke-width=\"1\" />\n<rect x=\"75\" y=\"105\" width=\"15\" height=\"15\" fill=\"#ffffff\" stroke=\"#94a3b8\" stroke-width=\"1\" />\n<rect x=\"90\" y=\"105\" width=\"15\" height=\"15\" fill=\"#ffffff\" stroke=\"#94a3b8\" stroke-width=\"1\" />\n<rect x=\"105\" y=\"105\" width=\"15\" height=\"15\" fill=\"#ffffff\" stroke=\"#94a3b8\" stroke-width=\"1\" />\n<rect x=\"120\" y=\"105\" width=\"15\" height=\"15\" fill=\"#ffffff\" stroke=\"#94a3b8\" stroke-width=\"1\" />\n<rect x=\"135\" y=\"105\" width=\"15\" height=\"15\" fill=\"#ffffff\" stroke=\"#94a3b8\" stroke-width=\"1\" />\n<rect x=\"0\" y=\"120\" width=\"15\" height=\"15\" fill=\"#ffffff\" stroke=\"#94a3b8\" stroke-width=\"1\" />\n<rect x=\"15\" y=\"120\" width=\"15\" height=\"15\" fill=\"#ffffff\" stroke=\"#94a3b8\" stroke-width=\"1\" />\n<rect x=\"30\" y=\"120\" width=\"15\" height=\"15\" fill=\"#ffffff\" stroke=\"#94a3b8\" stroke-width=\"1\" />\n<rect x=\"45\" y=\"120\" width=\"15\" height=\"15\" fill=\"#ffffff\" stroke=\"#94a3b8\" stroke-width=\"1\" />\n<rect x=\"60\" y=\"120\" width=\"15\" height=\"15\" fill=\"#ffffff\" stroke=\"#94a3b8\" stroke-width=\"1\" />\n<rect x=\"75\" y=\"120\" width=\"15\" height=\"15\" fill=\"#ffffff\" stroke=\"#94a3b8\" stroke-width=\"1\" />\n<rect x=\"90\" y=\"120\" width=\"15\" height=\"15\" fill=\"#ffffff\" stroke=\"#94a3b8\" stroke-width=\"1\" />\n<rect x=\"105\" y=\"120\" width=\"15\" height=\"15\" fill=\"#ffffff\" stroke=\"#94a3b8\" stroke-width=\"1\" />\n<rect x=\"120\" y=\"120\" width=\"15\" height=\"15\" fill=\"#ffffff\" stroke=\"#94a3b8\" stroke-width=\"1\" />\n<rect x=\"135\" y=\"120\" width=\"15\" height=\"15\" fill=\"#ffffff\" stroke=\"#94a3b8\" stroke-width=\"1\" />\n<rect x=\"0\" y=\"135\" width=\"15\" height=\"15\" fill=\"#ffffff\" stroke=\"#94a3b8\" stroke-width=\"1\" />\n<rect x=\"15\" y=\"135\" width=\"15\" height=\"15\" fill=\"#ffffff\" stroke=\"#94a3b8\" stroke-width=\"1\" />\n<rect x=\"30\" y=\"135\" width=\"15\" height=\"15\" fill=\"#ffffff\" stroke=\"#94a3b8\" stroke-width=\"1\" />\n<rect x=\"45\" y=\"135\" width=\"15\" height=\"15\" fill=\"#ffffff\" stroke=\"#94a3b8\" stroke-width=\"1\" />\n<rect x=\"60\" y=\"135\" width=\"15\" height=\"15\" fill=\"#ffffff\" stroke=\"#94a3b8\" stroke-width=\"1\" />\n<rect x=\"75\" y=\"135\" width=\"15\" height=\"15\" fill=\"#ffffff\" stroke=\"#94a3b8\" stroke-width=\"1\" />\n<rect x=\"90\" y=\"135\" width=\"15\" height=\"15\" fill=\"#ffffff\" stroke=\"#94a3b8\" stroke-width=\"1\" />\n<rect x=\"105\" y=\"135\" width=\"15\" height=\"15\" fill=\"#ffffff\" stroke=\"#94a3b8\" stroke-width=\"1\" />\n<rect x=\"120\" y=\"135\" width=\"15\" height=\"15\" fill=\"#ffffff\" stroke=\"#94a3b8\" stroke-width=\"1\" />\n<rect x=\"135\" y=\"135\" width=\"15\" height=\"15\" fill=\"#ffffff\" stroke=\"#94a3b8\" stroke-width=\"1\" />\n\n    </svg>\n  </div>",
    "options": [
      "64%",
      "36%",
      "6.4%",
      "74%"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>The grid has 100 small squares. The blue shaded portion contains 6 full rows of 10 plus 4 extra squares, making exactly 64 squares.</p><p>Percentage = $$\\frac{64}{100} \\times 100\\% = 64\\%$$</p></div>",
    "createdAt": "2026-05-17T13:33:12.191Z"
  },
  {
    "chapterId": "y7-14",
    "chapterTitle": "Chapter 14: Percentages and Ratios",
    "topicId": "y7-14a",
    "topicCode": "14A",
    "topicTitle": "Percentages, fractions and decimals",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isActive": true,
    "isManual": true,
    "question": "What percentage of the rectangular strip grid below is shaded?\n\n<div style=\"display: flex; justify-content: center; margin: 16px 0;\">\n    <svg viewBox=\"0 0 150 150\" width=\"150\" height=\"150\" xmlns=\"http://www.w3.org/2000/svg\" style=\"border: 1px solid #475569; border-radius: 4px;\">\n      <rect x=\"0\" y=\"0\" width=\"15\" height=\"150\" fill=\"#3b82f6\" stroke=\"#94a3b8\" stroke-width=\"1\" />\n<rect x=\"15\" y=\"0\" width=\"15\" height=\"150\" fill=\"#3b82f6\" stroke=\"#94a3b8\" stroke-width=\"1\" />\n<rect x=\"30\" y=\"0\" width=\"15\" height=\"150\" fill=\"#3b82f6\" stroke=\"#94a3b8\" stroke-width=\"1\" />\n<rect x=\"45\" y=\"0\" width=\"15\" height=\"150\" fill=\"#3b82f6\" stroke=\"#94a3b8\" stroke-width=\"1\" />\n<rect x=\"60\" y=\"0\" width=\"15\" height=\"150\" fill=\"#ffffff\" stroke=\"#94a3b8\" stroke-width=\"1\" />\n<rect x=\"75\" y=\"0\" width=\"15\" height=\"150\" fill=\"#ffffff\" stroke=\"#94a3b8\" stroke-width=\"1\" />\n<rect x=\"90\" y=\"0\" width=\"15\" height=\"150\" fill=\"#ffffff\" stroke=\"#94a3b8\" stroke-width=\"1\" />\n<rect x=\"105\" y=\"0\" width=\"15\" height=\"150\" fill=\"#ffffff\" stroke=\"#94a3b8\" stroke-width=\"1\" />\n<rect x=\"120\" y=\"0\" width=\"15\" height=\"150\" fill=\"#ffffff\" stroke=\"#94a3b8\" stroke-width=\"1\" />\n<rect x=\"135\" y=\"0\" width=\"15\" height=\"150\" fill=\"#ffffff\" stroke=\"#94a3b8\" stroke-width=\"1\" />\n\n    </svg>\n  </div>",
    "options": [
      "40%",
      "60%",
      "4%",
      "44%"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>The grid is divided into 10 equal vertical strips.</p><p>Exactly 4 strips are shaded blue.</p><p>Percentage = $$\\frac{4}{10} = \\frac{40}{100} = 40\\%$$</p></div>",
    "createdAt": "2026-05-17T13:33:12.191Z"
  },
  {
    "chapterId": "y7-14",
    "chapterTitle": "Chapter 14: Percentages and Ratios",
    "topicId": "y7-14a",
    "topicCode": "14A",
    "topicTitle": "Percentages, fractions and decimals",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isActive": true,
    "isManual": true,
    "question": "What percentage of the rectangular strip grid below is shaded?\n\n<div style=\"display: flex; justify-content: center; margin: 16px 0;\">\n    <svg viewBox=\"0 0 150 150\" width=\"150\" height=\"150\" xmlns=\"http://www.w3.org/2000/svg\" style=\"border: 1px solid #475569; border-radius: 4px;\">\n      <rect x=\"0\" y=\"0\" width=\"15\" height=\"150\" fill=\"#3b82f6\" stroke=\"#94a3b8\" stroke-width=\"1\" />\n<rect x=\"15\" y=\"0\" width=\"15\" height=\"150\" fill=\"#3b82f6\" stroke=\"#94a3b8\" stroke-width=\"1\" />\n<rect x=\"30\" y=\"0\" width=\"15\" height=\"150\" fill=\"#ffffff\" stroke=\"#94a3b8\" stroke-width=\"1\" />\n<rect x=\"45\" y=\"0\" width=\"15\" height=\"150\" fill=\"#3b82f6\" stroke=\"#94a3b8\" stroke-width=\"1\" />\n<rect x=\"60\" y=\"0\" width=\"15\" height=\"150\" fill=\"#3b82f6\" stroke=\"#94a3b8\" stroke-width=\"1\" />\n<rect x=\"75\" y=\"0\" width=\"15\" height=\"150\" fill=\"#ffffff\" stroke=\"#94a3b8\" stroke-width=\"1\" />\n<rect x=\"90\" y=\"0\" width=\"15\" height=\"150\" fill=\"#3b82f6\" stroke=\"#94a3b8\" stroke-width=\"1\" />\n<rect x=\"105\" y=\"0\" width=\"15\" height=\"150\" fill=\"#3b82f6\" stroke=\"#94a3b8\" stroke-width=\"1\" />\n<rect x=\"120\" y=\"0\" width=\"15\" height=\"150\" fill=\"#ffffff\" stroke=\"#94a3b8\" stroke-width=\"1\" />\n<rect x=\"135\" y=\"0\" width=\"15\" height=\"150\" fill=\"#ffffff\" stroke=\"#94a3b8\" stroke-width=\"1\" />\n\n    </svg>\n  </div>",
    "options": [
      "60%",
      "40%",
      "6%",
      "50%"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>The grid is divided into 10 equal vertical strips.</p><p>Exactly 6 strips are shaded blue.</p><p>Percentage = $$\\frac{6}{10} = \\frac{60}{100} = 60\\%$$</p></div>",
    "createdAt": "2026-05-17T13:33:12.191Z"
  },
  {
    "chapterId": "y7-14",
    "chapterTitle": "Chapter 14: Percentages and Ratios",
    "topicId": "y7-14a",
    "topicCode": "14A",
    "topicTitle": "Percentages, fractions and decimals",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "What percentage of the square below is shaded?\n\n<div style=\"display: flex; justify-content: center; margin: 16px 0;\">\n    <svg viewBox=\"0 0 200 200\" width=\"150\" height=\"150\" xmlns=\"http://www.w3.org/2000/svg\" style=\"border: 1px solid #475569; border-radius: 4px;\">\n      <polygon points=\"100,100 100,0 0,0\" fill=\"#3b82f6\" stroke=\"#94a3b8\" stroke-width=\"1.5\" />\n<polygon points=\"100,100 0,0 0,100\" fill=\"#ffffff\" stroke=\"#94a3b8\" stroke-width=\"1.5\" />\n<polygon points=\"100,100 0,100 0,200\" fill=\"#3b82f6\" stroke=\"#94a3b8\" stroke-width=\"1.5\" />\n<polygon points=\"100,100 0,200 100,200\" fill=\"#3b82f6\" stroke=\"#94a3b8\" stroke-width=\"1.5\" />\n<polygon points=\"100,100 100,200 200,200\" fill=\"#ffffff\" stroke=\"#94a3b8\" stroke-width=\"1.5\" />\n<polygon points=\"100,100 200,200 200,100\" fill=\"#3b82f6\" stroke=\"#94a3b8\" stroke-width=\"1.5\" />\n<polygon points=\"100,100 200,100 200,0\" fill=\"#ffffff\" stroke=\"#94a3b8\" stroke-width=\"1.5\" />\n<polygon points=\"100,100 200,0 100,0\" fill=\"#3b82f6\" stroke=\"#94a3b8\" stroke-width=\"1.5\" />\n\n    </svg>\n  </div>",
    "options": [
      "62.5%",
      "37.5%",
      "50%",
      "75%"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>The square is divided into 8 equal triangles.</p><p>Exactly 5 triangles are shaded blue.</p><p>Fraction shaded = $$\\frac{5}{8}$$</p><p>To convert this fraction into a percentage:</p><p>$$\\frac{5}{8} \\times 100\\% = 0.625 \\times 100\\% = 62.5\\%$$</p></div>",
    "createdAt": "2026-05-17T13:33:12.191Z"
  },
  {
    "chapterId": "y7-14",
    "chapterTitle": "Chapter 14: Percentages and Ratios",
    "topicId": "y7-14a",
    "topicCode": "14A",
    "topicTitle": "Percentages, fractions and decimals",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "Convert the percentage $$6%$$ to a simplified fraction or mixed numeral.",
    "options": [
      "$$\\frac{3}{50}$$",
      "$$\\frac{6}{50}$$",
      "$$\\frac{3}{25}$$",
      "$$\\frac{1}{20}$$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>To convert a percentage to a fraction, divide by 100 and then simplify the fraction by finding the greatest common divisor (GCD) of the numerator and the denominator:</p><p>$$6\\% = \\frac{6}{100} = \\frac{3}{50}$$</p></div>",
    "createdAt": "2026-05-17T13:33:12.191Z"
  },
  {
    "chapterId": "y7-14",
    "chapterTitle": "Chapter 14: Percentages and Ratios",
    "topicId": "y7-14a",
    "topicCode": "14A",
    "topicTitle": "Percentages, fractions and decimals",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "Convert the percentage $$18%$$ to a simplified fraction or mixed numeral.",
    "options": [
      "$$\\frac{9}{50}$$",
      "$$\\frac{18}{50}$$",
      "$$\\frac{9}{25}$$",
      "$$\\frac{2}{25}$$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>To convert a percentage to a fraction, divide by 100 and then simplify the fraction by finding the greatest common divisor (GCD) of the numerator and the denominator:</p><p>$$18\\% = \\frac{18}{100} = \\frac{9}{50}$$</p></div>",
    "createdAt": "2026-05-17T13:33:12.191Z"
  },
  {
    "chapterId": "y7-14",
    "chapterTitle": "Chapter 14: Percentages and Ratios",
    "topicId": "y7-14a",
    "topicCode": "14A",
    "topicTitle": "Percentages, fractions and decimals",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "Convert the percentage $$85%$$ to a simplified fraction or mixed numeral.",
    "options": [
      "$$\\frac{17}{20}$$",
      "$$\\frac{85}{100}$$",
      "$$\\frac{17}{25}$$",
      "$$\\frac{4}{5}$$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>To convert a percentage to a fraction, divide by 100 and then simplify the fraction by finding the greatest common divisor (GCD) of the numerator and the denominator:</p><p>$$85\\% = \\frac{85}{100} = \\frac{17}{20}$$</p></div>",
    "createdAt": "2026-05-17T13:33:12.191Z"
  },
  {
    "chapterId": "y7-14",
    "chapterTitle": "Chapter 14: Percentages and Ratios",
    "topicId": "y7-14a",
    "topicCode": "14A",
    "topicTitle": "Percentages, fractions and decimals",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "Convert the percentage $$45%$$ to a simplified fraction or mixed numeral.",
    "options": [
      "$$\\frac{9}{20}$$",
      "$$\\frac{45}{100}$$",
      "$$\\frac{9}{25}$$",
      "$$\\frac{3}{10}$$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>To convert a percentage to a fraction, divide by 100 and then simplify the fraction by finding the greatest common divisor (GCD) of the numerator and the denominator:</p><p>$$45\\% = \\frac{45}{100} = \\frac{9}{20}$$</p></div>",
    "createdAt": "2026-05-17T13:33:12.191Z"
  },
  {
    "chapterId": "y7-14",
    "chapterTitle": "Chapter 14: Percentages and Ratios",
    "topicId": "y7-14a",
    "topicCode": "14A",
    "topicTitle": "Percentages, fractions and decimals",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "Convert the percentage $$35%$$ to a simplified fraction or mixed numeral.",
    "options": [
      "$$\\frac{7}{20}$$",
      "$$\\frac{35}{100}$$",
      "$$\\frac{7}{25}$$",
      "$$\\frac{3}{20}$$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>To convert a percentage to a fraction, divide by 100 and then simplify the fraction by finding the greatest common divisor (GCD) of the numerator and the denominator:</p><p>$$35\\% = \\frac{35}{100} = \\frac{7}{20}$$</p></div>",
    "createdAt": "2026-05-17T13:33:12.191Z"
  },
  {
    "chapterId": "y7-14",
    "chapterTitle": "Chapter 14: Percentages and Ratios",
    "topicId": "y7-14a",
    "topicCode": "14A",
    "topicTitle": "Percentages, fractions and decimals",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "Convert the percentage $$95%$$ to a simplified fraction or mixed numeral.",
    "options": [
      "$$\\frac{19}{20}$$",
      "$$\\frac{95}{100}$$",
      "$$\\frac{19}{25}$$",
      "$$\\frac{9}{10}$$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>To convert a percentage to a fraction, divide by 100 and then simplify the fraction by finding the greatest common divisor (GCD) of the numerator and the denominator:</p><p>$$95\\% = \\frac{95}{100} = \\frac{19}{20}$$</p></div>",
    "createdAt": "2026-05-17T13:33:12.191Z"
  },
  {
    "chapterId": "y7-14",
    "chapterTitle": "Chapter 14: Percentages and Ratios",
    "topicId": "y7-14a",
    "topicCode": "14A",
    "topicTitle": "Percentages, fractions and decimals",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "Convert the percentage $$140%$$ to a simplified fraction or mixed numeral.",
    "options": [
      "$$1\\frac{2}{5}$$",
      "$$1\\frac{4}{5}$$",
      "$$1\\frac{2}{25}$$",
      "$$2\\frac{1}{5}$$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>To convert a percentage to a fraction, divide by 100 and then simplify the fraction by finding the greatest common divisor (GCD) of the numerator and the denominator:</p><p>$$140\\% = \\frac{140}{100} = \\frac{7}{5} = 1\\frac{2}{5}$$</p></div>",
    "createdAt": "2026-05-17T13:33:12.191Z"
  },
  {
    "chapterId": "y7-14",
    "chapterTitle": "Chapter 14: Percentages and Ratios",
    "topicId": "y7-14a",
    "topicCode": "14A",
    "topicTitle": "Percentages, fractions and decimals",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "Convert the percentage $$175%$$ to a simplified fraction or mixed numeral.",
    "options": [
      "$$1\\frac{3}{4}$$",
      "$$1\\frac{3}{5}$$",
      "$$1\\frac{1}{4}$$",
      "$$2\\frac{3}{4}$$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>To convert a percentage to a fraction, divide by 100 and then simplify the fraction by finding the greatest common divisor (GCD) of the numerator and the denominator:</p><p>$$175\\% = \\frac{175}{100} = \\frac{7}{4} = 1\\frac{3}{4}$$</p></div>",
    "createdAt": "2026-05-17T13:33:12.191Z"
  },
  {
    "chapterId": "y7-14",
    "chapterTitle": "Chapter 14: Percentages and Ratios",
    "topicId": "y7-14a",
    "topicCode": "14A",
    "topicTitle": "Percentages, fractions and decimals",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "Convert the percentage $$240%$$ to a simplified fraction or mixed numeral.",
    "options": [
      "$$2\\frac{2}{5}$$",
      "$$2\\frac{4}{5}$$",
      "$$2\\frac{1}{5}$$",
      "$$1\\frac{2}{5}$$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>To convert a percentage to a fraction, divide by 100 and then simplify the fraction by finding the greatest common divisor (GCD) of the numerator and the denominator:</p><p>$$240\\% = \\frac{240}{100} = \\frac{12}{5} = 2\\frac{2}{5}$$</p></div>",
    "createdAt": "2026-05-17T13:33:12.191Z"
  },
  {
    "chapterId": "y7-14",
    "chapterTitle": "Chapter 14: Percentages and Ratios",
    "topicId": "y7-14a",
    "topicCode": "14A",
    "topicTitle": "Percentages, fractions and decimals",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "Convert the percentage $$350%$$ to a simplified fraction or mixed numeral.",
    "options": [
      "$$3\\frac{1}{2}$$",
      "$$3\\frac{1}{4}$$",
      "$$3\\frac{3}{4}$$",
      "$$2\\frac{1}{2}$$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>To convert a percentage to a fraction, divide by 100 and then simplify the fraction by finding the greatest common divisor (GCD) of the numerator and the denominator:</p><p>$$350\\% = \\frac{350}{100} = \\frac{7}{2} = 3\\frac{1}{2}$$</p></div>",
    "createdAt": "2026-05-17T13:33:12.191Z"
  },
  {
    "chapterId": "y7-14",
    "chapterTitle": "Chapter 14: Percentages and Ratios",
    "topicId": "y7-14a",
    "topicCode": "14A",
    "topicTitle": "Percentages, fractions and decimals",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "Convert the percentage $$225%$$ to a simplified fraction or mixed numeral.",
    "options": [
      "$$2\\frac{1}{4}$$",
      "$$2\\frac{3}{4}$$",
      "$$2\\frac{1}{2}$$",
      "$$1\\frac{1}{4}$$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>To convert a percentage to a fraction, divide by 100 and then simplify the fraction by finding the greatest common divisor (GCD) of the numerator and the denominator:</p><p>$$225\\% = \\frac{225}{100} = \\frac{9}{4} = 2\\frac{1}{4}$$</p></div>",
    "createdAt": "2026-05-17T13:33:12.191Z"
  },
  {
    "chapterId": "y7-14",
    "chapterTitle": "Chapter 14: Percentages and Ratios",
    "topicId": "y7-14a",
    "topicCode": "14A",
    "topicTitle": "Percentages, fractions and decimals",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "Convert the percentage $$376%$$ to a simplified fraction or mixed numeral.",
    "options": [
      "$$3\\frac{19}{25}$$",
      "$$3\\frac{38}{50}$$",
      "$$3\\frac{9}{25}$$",
      "$$3\\frac{19}{50}$$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>To convert a percentage to a fraction, divide by 100 and then simplify the fraction by finding the greatest common divisor (GCD) of the numerator and the denominator:</p><p>$$376\\% = \\frac{376}{100} = 3\\frac{76}{100} = 3\\frac{19}{25}$$</p></div>",
    "createdAt": "2026-05-17T13:33:12.191Z"
  },
  {
    "chapterId": "y7-14",
    "chapterTitle": "Chapter 14: Percentages and Ratios",
    "topicId": "y7-14a",
    "topicCode": "14A",
    "topicTitle": "Percentages, fractions and decimals",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isActive": true,
    "isManual": true,
    "question": "Convert the percentage $$9%$$ to a decimal.",
    "options": [
      "$$0.09$$",
      "$$0.9$$",
      "$$0.009$$",
      "$$9.0$$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>To convert a percentage to a decimal, divide by 100 (which is equivalent to shifting the decimal point two places to the left):</p><p>$$9% = \\frac{9}{100} = 0.09$$</p></div>",
    "createdAt": "2026-05-17T13:33:12.191Z"
  },
  {
    "chapterId": "y7-14",
    "chapterTitle": "Chapter 14: Percentages and Ratios",
    "topicId": "y7-14a",
    "topicCode": "14A",
    "topicTitle": "Percentages, fractions and decimals",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isActive": true,
    "isManual": true,
    "question": "Convert the percentage $$24%$$ to a decimal.",
    "options": [
      "$$0.24$$",
      "$$2.4$$",
      "$$0.024$$",
      "$$0.25$$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>To convert a percentage to a decimal, divide by 100 (which is equivalent to shifting the decimal point two places to the left):</p><p>$$24% = \\frac{24}{100} = 0.24$$</p></div>",
    "createdAt": "2026-05-17T13:33:12.191Z"
  },
  {
    "chapterId": "y7-14",
    "chapterTitle": "Chapter 14: Percentages and Ratios",
    "topicId": "y7-14a",
    "topicCode": "14A",
    "topicTitle": "Percentages, fractions and decimals",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isActive": true,
    "isManual": true,
    "question": "Convert the percentage $$85%$$ to a decimal.",
    "options": [
      "$$0.85$$",
      "$$8.5$$",
      "$$0.085$$",
      "$$0.8$$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>To convert a percentage to a decimal, divide by 100 (which is equivalent to shifting the decimal point two places to the left):</p><p>$$85% = \\frac{85}{100} = 0.85$$</p></div>",
    "createdAt": "2026-05-17T13:33:12.191Z"
  },
  {
    "chapterId": "y7-14",
    "chapterTitle": "Chapter 14: Percentages and Ratios",
    "topicId": "y7-14a",
    "topicCode": "14A",
    "topicTitle": "Percentages, fractions and decimals",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isActive": true,
    "isManual": true,
    "question": "Convert the percentage $$48%$$ to a decimal.",
    "options": [
      "$$0.48$$",
      "$$4.8$$",
      "$$0.048$$",
      "$$0.04$$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>To convert a percentage to a decimal, divide by 100 (which is equivalent to shifting the decimal point two places to the left):</p><p>$$48% = \\frac{48}{100} = 0.48$$</p></div>",
    "createdAt": "2026-05-17T13:33:12.191Z"
  },
  {
    "chapterId": "y7-14",
    "chapterTitle": "Chapter 14: Percentages and Ratios",
    "topicId": "y7-14a",
    "topicCode": "14A",
    "topicTitle": "Percentages, fractions and decimals",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isActive": true,
    "isManual": true,
    "question": "Convert the percentage $$80%$$ to a decimal.",
    "options": [
      "$$0.8$$",
      "$$0.08$$",
      "$$8.0$$",
      "$$0.88$$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>To convert a percentage to a decimal, divide by 100 (which is equivalent to shifting the decimal point two places to the left):</p><p>$$80% = \\frac{80}{100} = 0.8$$</p></div>",
    "createdAt": "2026-05-17T13:33:12.191Z"
  },
  {
    "chapterId": "y7-14",
    "chapterTitle": "Chapter 14: Percentages and Ratios",
    "topicId": "y7-14a",
    "topicCode": "14A",
    "topicTitle": "Percentages, fractions and decimals",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isActive": true,
    "isManual": true,
    "question": "Convert the percentage $$136%$$ to a decimal.",
    "options": [
      "$$1.36$$",
      "$$13.6$$",
      "$$0.136$$",
      "$$1.036$$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>To convert a percentage to a decimal, divide by 100 (which is equivalent to shifting the decimal point two places to the left):</p><p>$$136% = \\frac{136}{100} = 1.36$$</p></div>",
    "createdAt": "2026-05-17T13:33:12.191Z"
  },
  {
    "chapterId": "y7-14",
    "chapterTitle": "Chapter 14: Percentages and Ratios",
    "topicId": "y7-14a",
    "topicCode": "14A",
    "topicTitle": "Percentages, fractions and decimals",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isActive": true,
    "isManual": true,
    "question": "Convert the percentage $$320%$$ to a decimal.",
    "options": [
      "$$3.2$$",
      "$$0.32$$",
      "$$32.0$$",
      "$$0.032$$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>To convert a percentage to a decimal, divide by 100 (which is equivalent to shifting the decimal point two places to the left):</p><p>$$320% = \\frac{320}{100} = 3.2$$</p></div>",
    "createdAt": "2026-05-17T13:33:12.191Z"
  },
  {
    "chapterId": "y7-14",
    "chapterTitle": "Chapter 14: Percentages and Ratios",
    "topicId": "y7-14a",
    "topicCode": "14A",
    "topicTitle": "Percentages, fractions and decimals",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isActive": true,
    "isManual": true,
    "question": "Convert the percentage $$540%$$ to a decimal.",
    "options": [
      "$$5.4$$",
      "$$0.54$$",
      "$$54.0$$",
      "$$0.054$$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>To convert a percentage to a decimal, divide by 100 (which is equivalent to shifting the decimal point two places to the left):</p><p>$$540% = \\frac{540}{100} = 5.4$$</p></div>",
    "createdAt": "2026-05-17T13:33:12.191Z"
  },
  {
    "chapterId": "y7-14",
    "chapterTitle": "Chapter 14: Percentages and Ratios",
    "topicId": "y7-14a",
    "topicCode": "14A",
    "topicTitle": "Percentages, fractions and decimals",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isActive": true,
    "isManual": true,
    "question": "Convert the percentage $$190%$$ to a decimal.",
    "options": [
      "$$1.9$$",
      "$$0.19$$",
      "$$19.0$$",
      "$$0.019$$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>To convert a percentage to a decimal, divide by 100 (which is equivalent to shifting the decimal point two places to the left):</p><p>$$190% = \\frac{190}{100} = 1.9$$</p></div>",
    "createdAt": "2026-05-17T13:33:12.191Z"
  },
  {
    "chapterId": "y7-14",
    "chapterTitle": "Chapter 14: Percentages and Ratios",
    "topicId": "y7-14a",
    "topicCode": "14A",
    "topicTitle": "Percentages, fractions and decimals",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isActive": true,
    "isManual": true,
    "question": "Convert the percentage $$14.5%$$ to a decimal.",
    "options": [
      "$$0.145$$",
      "$$1.45$$",
      "$$0.0145$$",
      "$$14.5$$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>To convert a percentage to a decimal, divide by 100 (which is equivalent to shifting the decimal point two places to the left):</p><p>$$14.5% = \\frac{14.5}{100} = 0.145$$</p></div>",
    "createdAt": "2026-05-17T13:33:12.191Z"
  },
  {
    "chapterId": "y7-14",
    "chapterTitle": "Chapter 14: Percentages and Ratios",
    "topicId": "y7-14a",
    "topicCode": "14A",
    "topicTitle": "Percentages, fractions and decimals",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isActive": true,
    "isManual": true,
    "question": "Convert the percentage $$7.8%$$ to a decimal.",
    "options": [
      "$$0.078$$",
      "$$0.78$$",
      "$$0.0078$$",
      "$$7.8$$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>To convert a percentage to a decimal, divide by 100 (which is equivalent to shifting the decimal point two places to the left):</p><p>$$7.8% = \\frac{7.8}{100} = 0.078$$</p></div>",
    "createdAt": "2026-05-17T13:33:12.191Z"
  },
  {
    "chapterId": "y7-14",
    "chapterTitle": "Chapter 14: Percentages and Ratios",
    "topicId": "y7-14a",
    "topicCode": "14A",
    "topicTitle": "Percentages, fractions and decimals",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isActive": true,
    "isManual": true,
    "question": "Convert the percentage $$42.5%$$ to a decimal.",
    "options": [
      "$$0.425$$",
      "$$4.25$$",
      "$$0.0425$$",
      "$$0.45$$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>To convert a percentage to a decimal, divide by 100 (which is equivalent to shifting the decimal point two places to the left):</p><p>$$42.5% = \\frac{42.5}{100} = 0.425$$</p></div>",
    "createdAt": "2026-05-17T13:33:12.191Z"
  },
  {
    "chapterId": "y7-14",
    "chapterTitle": "Chapter 14: Percentages and Ratios",
    "topicId": "y7-14a",
    "topicCode": "14A",
    "topicTitle": "Percentages, fractions and decimals",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isActive": true,
    "isManual": true,
    "question": "Express the following fraction as a percentage: $$\\frac{31}{100}$$",
    "options": [
      "31%",
      "3.1%",
      "0.31%",
      "310%"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>To write a fraction as a percentage, we convert it to an equivalent fraction with a denominator of 100:</p><p>$$\\frac{31}{100} = 31\\%$$</p></div>",
    "createdAt": "2026-05-17T13:33:12.191Z"
  },
  {
    "chapterId": "y7-14",
    "chapterTitle": "Chapter 14: Percentages and Ratios",
    "topicId": "y7-14a",
    "topicCode": "14A",
    "topicTitle": "Percentages, fractions and decimals",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isActive": true,
    "isManual": true,
    "question": "Express the following fraction as a percentage: $$\\frac{89}{100}$$",
    "options": [
      "89%",
      "8.9%",
      "0.89%",
      "890%"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>To write a fraction as a percentage, we convert it to an equivalent fraction with a denominator of 100:</p><p>$$\\frac{89}{100} = 89\\%$$</p></div>",
    "createdAt": "2026-05-17T13:33:12.191Z"
  },
  {
    "chapterId": "y7-14",
    "chapterTitle": "Chapter 14: Percentages and Ratios",
    "topicId": "y7-14a",
    "topicCode": "14A",
    "topicTitle": "Percentages, fractions and decimals",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isActive": true,
    "isManual": true,
    "question": "Express the following fraction as a percentage: $$\\frac{17}{100}$$",
    "options": [
      "17%",
      "1.7%",
      "0.17%",
      "170%"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>To write a fraction as a percentage, we convert it to an equivalent fraction with a denominator of 100:</p><p>$$\\frac{17}{100} = 17\\%$$</p></div>",
    "createdAt": "2026-05-17T13:33:12.191Z"
  },
  {
    "chapterId": "y7-14",
    "chapterTitle": "Chapter 14: Percentages and Ratios",
    "topicId": "y7-14a",
    "topicCode": "14A",
    "topicTitle": "Percentages, fractions and decimals",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isActive": true,
    "isManual": true,
    "question": "Express the following fraction as a percentage: $$\\frac{243}{100}$$",
    "options": [
      "243%",
      "24.3%",
      "2.43%",
      "2430%"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>To write a fraction as a percentage, we convert it to an equivalent fraction with a denominator of 100:</p><p>$$\\frac{243}{100} = 243\\%$$</p></div>",
    "createdAt": "2026-05-17T13:33:12.191Z"
  },
  {
    "chapterId": "y7-14",
    "chapterTitle": "Chapter 14: Percentages and Ratios",
    "topicId": "y7-14a",
    "topicCode": "14A",
    "topicTitle": "Percentages, fractions and decimals",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isActive": true,
    "isManual": true,
    "question": "Express the following fraction as a percentage: $$\\frac{3}{10}$$",
    "options": [
      "30%",
      "3%",
      "0.3%",
      "300%"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>To write a fraction as a percentage, we convert it to an equivalent fraction with a denominator of 100:</p><p>$$\\frac{3}{10} = \\frac{30}{100} = 30\\%$$</p></div>",
    "createdAt": "2026-05-17T13:33:12.191Z"
  },
  {
    "chapterId": "y7-14",
    "chapterTitle": "Chapter 14: Percentages and Ratios",
    "topicId": "y7-14a",
    "topicCode": "14A",
    "topicTitle": "Percentages, fractions and decimals",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isActive": true,
    "isManual": true,
    "question": "Express the following fraction as a percentage: $$\\frac{7}{10}$$",
    "options": [
      "70%",
      "7%",
      "0.7%",
      "700%"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>To write a fraction as a percentage, we convert it to an equivalent fraction with a denominator of 100:</p><p>$$\\frac{7}{10} = \\frac{70}{100} = 70\\%$$</p></div>",
    "createdAt": "2026-05-17T13:33:12.191Z"
  },
  {
    "chapterId": "y7-14",
    "chapterTitle": "Chapter 14: Percentages and Ratios",
    "topicId": "y7-14a",
    "topicCode": "14A",
    "topicTitle": "Percentages, fractions and decimals",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isActive": true,
    "isManual": true,
    "question": "Express the following fraction as a percentage: $$\\frac{9}{1000}$$",
    "options": [
      "0.9%",
      "9%",
      "0.09%",
      "90%"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>To write a fraction as a percentage, we convert it to an equivalent fraction with a denominator of 100:</p><p>$$\\frac{9}{1000} = \\frac{0.9}{100} = 0.9\\%$$</p></div>",
    "createdAt": "2026-05-17T13:33:12.191Z"
  },
  {
    "chapterId": "y7-14",
    "chapterTitle": "Chapter 14: Percentages and Ratios",
    "topicId": "y7-14a",
    "topicCode": "14A",
    "topicTitle": "Percentages, fractions and decimals",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isActive": true,
    "isManual": true,
    "question": "Express the following fraction as a percentage: $$\\frac{643}{1000}$$",
    "options": [
      "64.3%",
      "6.43%",
      "0.643%",
      "643%"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>To write a fraction as a percentage, we convert it to an equivalent fraction with a denominator of 100:</p><p>$$\\frac{643}{1000} = \\frac{64.3}{100} = 64.3\\%$$</p></div>",
    "createdAt": "2026-05-17T13:33:12.191Z"
  },
  {
    "chapterId": "y7-14",
    "chapterTitle": "Chapter 14: Percentages and Ratios",
    "topicId": "y7-14a",
    "topicCode": "14A",
    "topicTitle": "Percentages, fractions and decimals",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "Express the following fraction as a percentage: $$\\frac{4}{5}$$",
    "options": [
      "80%",
      "40%",
      "20%",
      "8%"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>To convert a fraction to a percentage, find an equivalent fraction with a denominator of 100, or multiply by 100%:</p><p>$$\\frac{4}{5} = \\frac{4 \\times 20}{5 \\times 20} = \\frac{80}{100} = 80\\%$$</p></div>",
    "createdAt": "2026-05-17T13:33:12.191Z"
  },
  {
    "chapterId": "y7-14",
    "chapterTitle": "Chapter 14: Percentages and Ratios",
    "topicId": "y7-14a",
    "topicCode": "14A",
    "topicTitle": "Percentages, fractions and decimals",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "Express the following fraction as a percentage: $$\\frac{13}{20}$$",
    "options": [
      "65%",
      "13%",
      "35%",
      "60%"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>To convert a fraction to a percentage, find an equivalent fraction with a denominator of 100, or multiply by 100%:</p><p>$$\\frac{13}{20} = \\frac{13 \\times 5}{20 \\times 5} = \\frac{65}{100} = 65\\%$$</p></div>",
    "createdAt": "2026-05-17T13:33:12.191Z"
  },
  {
    "chapterId": "y7-14",
    "chapterTitle": "Chapter 14: Percentages and Ratios",
    "topicId": "y7-14a",
    "topicCode": "14A",
    "topicTitle": "Percentages, fractions and decimals",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "Express the following fraction as a percentage: $$\\frac{18}{25}$$",
    "options": [
      "72%",
      "18%",
      "36%",
      "75%"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>To convert a fraction to a percentage, find an equivalent fraction with a denominator of 100, or multiply by 100%:</p><p>$$\\frac{18}{25} = \\frac{18 \\times 4}{25 \\times 4} = \\frac{72}{100} = 72\\%$$</p></div>",
    "createdAt": "2026-05-17T13:33:12.191Z"
  },
  {
    "chapterId": "y7-14",
    "chapterTitle": "Chapter 14: Percentages and Ratios",
    "topicId": "y7-14a",
    "topicCode": "14A",
    "topicTitle": "Percentages, fractions and decimals",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "Express the following fraction as a percentage: $$\\frac{27}{50}$$",
    "options": [
      "54%",
      "27%",
      "50%",
      "46%"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>To convert a fraction to a percentage, find an equivalent fraction with a denominator of 100, or multiply by 100%:</p><p>$$\\frac{27}{50} = \\frac{27 \\times 2}{50 \\times 2} = \\frac{54}{100} = 54\\%$$</p></div>",
    "createdAt": "2026-05-17T13:33:12.191Z"
  },
  {
    "chapterId": "y7-14",
    "chapterTitle": "Chapter 14: Percentages and Ratios",
    "topicId": "y7-14a",
    "topicCode": "14A",
    "topicTitle": "Percentages, fractions and decimals",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "Express the following fraction as a percentage: $$\\frac{21}{25}$$",
    "options": [
      "84%",
      "42%",
      "21%",
      "80%"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>To convert a fraction to a percentage, find an equivalent fraction with a denominator of 100, or multiply by 100%:</p><p>$$\\frac{21}{25} = \\frac{21 \\times 4}{25 \\times 4} = \\frac{84}{100} = 84\\%$$</p></div>",
    "createdAt": "2026-05-17T13:33:12.191Z"
  },
  {
    "chapterId": "y7-14",
    "chapterTitle": "Chapter 14: Percentages and Ratios",
    "topicId": "y7-14a",
    "topicCode": "14A",
    "topicTitle": "Percentages, fractions and decimals",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "Express the following fraction as a percentage: $$\\frac{11}{20}$$",
    "options": [
      "55%",
      "11%",
      "22%",
      "50%"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>To convert a fraction to a percentage, find an equivalent fraction with a denominator of 100, or multiply by 100%:</p><p>$$\\frac{11}{20} = \\frac{11 \\times 5}{20 \\times 5} = \\frac{55}{100} = 55\\%$$</p></div>",
    "createdAt": "2026-05-17T13:33:12.191Z"
  },
  {
    "chapterId": "y7-14",
    "chapterTitle": "Chapter 14: Percentages and Ratios",
    "topicId": "y7-14a",
    "topicCode": "14A",
    "topicTitle": "Percentages, fractions and decimals",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "Express the following fraction as a percentage: $$\\frac{57}{50}$$",
    "options": [
      "114%",
      "57%",
      "228%",
      "120%"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>To convert a fraction to a percentage, find an equivalent fraction with a denominator of 100, or multiply by 100%:</p><p>$$\\frac{57}{50} = \\frac{57 \\times 2}{50 \\times 2} = \\frac{114}{100} = 114\\%$$</p></div>",
    "createdAt": "2026-05-17T13:33:12.191Z"
  },
  {
    "chapterId": "y7-14",
    "chapterTitle": "Chapter 14: Percentages and Ratios",
    "topicId": "y7-14a",
    "topicCode": "14A",
    "topicTitle": "Percentages, fractions and decimals",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "Express the following fraction as a percentage: $$\\frac{37}{25}$$",
    "options": [
      "148%",
      "74%",
      "37%",
      "140%"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>To convert a fraction to a percentage, find an equivalent fraction with a denominator of 100, or multiply by 100%:</p><p>$$\\frac{37}{25} = \\frac{37 \\times 4}{25 \\times 4} = \\frac{148}{100} = 148\\%$$</p></div>",
    "createdAt": "2026-05-17T13:33:12.191Z"
  },
  {
    "chapterId": "y7-14",
    "chapterTitle": "Chapter 14: Percentages and Ratios",
    "topicId": "y7-14a",
    "topicCode": "14A",
    "topicTitle": "Percentages, fractions and decimals",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "Express the following fraction as a percentage: $$\\frac{63}{20}$$",
    "options": [
      "315%",
      "63%",
      "126%",
      "305%"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>To convert a fraction to a percentage, find an equivalent fraction with a denominator of 100, or multiply by 100%:</p><p>$$\\frac{63}{20} = \\frac{63 \\times 5}{20 \\times 5} = \\frac{315}{100} = 315\\%$$</p></div>",
    "createdAt": "2026-05-17T13:33:12.191Z"
  },
  {
    "chapterId": "y7-14",
    "chapterTitle": "Chapter 14: Percentages and Ratios",
    "topicId": "y7-14a",
    "topicCode": "14A",
    "topicTitle": "Percentages, fractions and decimals",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "Express the following fraction as a percentage: $$\\frac{9}{40}$$",
    "options": [
      "22.5%",
      "2.25%",
      "9%",
      "45%"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>To convert a fraction to a percentage, find an equivalent fraction with a denominator of 100, or multiply by 100%:</p><p>$$\\frac{9}{40} = \\frac{9 \\times 2.5}{40 \\times 2.5} = \\frac{22.5}{100} = 22.5\\%$$</p></div>",
    "createdAt": "2026-05-17T13:33:12.191Z"
  },
  {
    "chapterId": "y7-14",
    "chapterTitle": "Chapter 14: Percentages and Ratios",
    "topicId": "y7-14a",
    "topicCode": "14A",
    "topicTitle": "Percentages, fractions and decimals",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "Express the following fraction as a percentage: $$\\frac{11}{40}$$",
    "options": [
      "27.5%",
      "2.75%",
      "11%",
      "55%"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>To convert a fraction to a percentage, find an equivalent fraction with a denominator of 100, or multiply by 100%:</p><p>$$\\frac{11}{40} = \\frac{11 \\times 2.5}{40 \\times 2.5} = \\frac{27.5}{100} = 27.5\\%$$</p></div>",
    "createdAt": "2026-05-17T13:33:12.191Z"
  },
  {
    "chapterId": "y7-14",
    "chapterTitle": "Chapter 14: Percentages and Ratios",
    "topicId": "y7-14a",
    "topicCode": "14A",
    "topicTitle": "Percentages, fractions and decimals",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "Express the following fraction as a percentage: $$\\frac{23}{40}$$",
    "options": [
      "57.5%",
      "5.75%",
      "23%",
      "72.5%"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>To convert a fraction to a percentage, find an equivalent fraction with a denominator of 100, or multiply by 100%:</p><p>$$\\frac{23}{40} = \\frac{23 \\times 2.5}{40 \\times 2.5} = \\frac{57.5}{100} = 57.5\\%$$</p></div>",
    "createdAt": "2026-05-17T13:33:12.191Z"
  },
  {
    "chapterId": "y7-14",
    "chapterTitle": "Chapter 14: Percentages and Ratios",
    "topicId": "y7-14a",
    "topicCode": "14A",
    "topicTitle": "Percentages, fractions and decimals",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isActive": true,
    "isManual": true,
    "question": "Write the following decimal as a percentage: $$0.45$$",
    "options": [
      "45%",
      "4.5%",
      "0.45%",
      "450%"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>To write a decimal as a percentage, multiply by 100 (which is equivalent to shifting the decimal point two places to the right):</p><p>$$0.45 \\times 100\\% = 45%$$</p></div>",
    "createdAt": "2026-05-17T13:33:12.191Z"
  },
  {
    "chapterId": "y7-14",
    "chapterTitle": "Chapter 14: Percentages and Ratios",
    "topicId": "y7-14a",
    "topicCode": "14A",
    "topicTitle": "Percentages, fractions and decimals",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isActive": true,
    "isManual": true,
    "question": "Write the following decimal as a percentage: $$0.38$$",
    "options": [
      "38%",
      "3.8%",
      "0.38%",
      "380%"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>To write a decimal as a percentage, multiply by 100 (which is equivalent to shifting the decimal point two places to the right):</p><p>$$0.38 \\times 100\\% = 38%$$</p></div>",
    "createdAt": "2026-05-17T13:33:12.191Z"
  },
  {
    "chapterId": "y7-14",
    "chapterTitle": "Chapter 14: Percentages and Ratios",
    "topicId": "y7-14a",
    "topicCode": "14A",
    "topicTitle": "Percentages, fractions and decimals",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isActive": true,
    "isManual": true,
    "question": "Write the following decimal as a percentage: $$0.81$$",
    "options": [
      "81%",
      "8.1%",
      "0.81%",
      "810%"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>To write a decimal as a percentage, multiply by 100 (which is equivalent to shifting the decimal point two places to the right):</p><p>$$0.81 \\times 100\\% = 81%$$</p></div>",
    "createdAt": "2026-05-17T13:33:12.191Z"
  },
  {
    "chapterId": "y7-14",
    "chapterTitle": "Chapter 14: Percentages and Ratios",
    "topicId": "y7-14a",
    "topicCode": "14A",
    "topicTitle": "Percentages, fractions and decimals",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isActive": true,
    "isManual": true,
    "question": "Write the following decimal as a percentage: $$2.4$$",
    "options": [
      "240%",
      "24%",
      "2.4%",
      "0.24%"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>To write a decimal as a percentage, multiply by 100 (which is equivalent to shifting the decimal point two places to the right):</p><p>$$2.4 \\times 100\\% = 240%$$</p></div>",
    "createdAt": "2026-05-17T13:33:12.191Z"
  },
  {
    "chapterId": "y7-14",
    "chapterTitle": "Chapter 14: Percentages and Ratios",
    "topicId": "y7-14a",
    "topicCode": "14A",
    "topicTitle": "Percentages, fractions and decimals",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isActive": true,
    "isManual": true,
    "question": "Write the following decimal as a percentage: $$4.8$$",
    "options": [
      "480%",
      "48%",
      "4.8%",
      "0.48%"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>To write a decimal as a percentage, multiply by 100 (which is equivalent to shifting the decimal point two places to the right):</p><p>$$4.8 \\times 100\\% = 480%$$</p></div>",
    "createdAt": "2026-05-17T13:33:12.191Z"
  },
  {
    "chapterId": "y7-14",
    "chapterTitle": "Chapter 14: Percentages and Ratios",
    "topicId": "y7-14a",
    "topicCode": "14A",
    "topicTitle": "Percentages, fractions and decimals",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isActive": true,
    "isManual": true,
    "question": "Write the following decimal as a percentage: $$1.67$$",
    "options": [
      "167%",
      "16.7%",
      "1.67%",
      "1670%"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>To write a decimal as a percentage, multiply by 100 (which is equivalent to shifting the decimal point two places to the right):</p><p>$$1.67 \\times 100\\% = 167%$$</p></div>",
    "createdAt": "2026-05-17T13:33:12.191Z"
  },
  {
    "chapterId": "y7-14",
    "chapterTitle": "Chapter 14: Percentages and Ratios",
    "topicId": "y7-14a",
    "topicCode": "14A",
    "topicTitle": "Percentages, fractions and decimals",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isActive": true,
    "isManual": true,
    "question": "Write the following decimal as a percentage: $$0.235$$",
    "options": [
      "23.5%",
      "2.35%",
      "0.235%",
      "235%"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>To write a decimal as a percentage, multiply by 100 (which is equivalent to shifting the decimal point two places to the right):</p><p>$$0.235 \\times 100\\% = 23.5%$$</p></div>",
    "createdAt": "2026-05-17T13:33:12.191Z"
  },
  {
    "chapterId": "y7-14",
    "chapterTitle": "Chapter 14: Percentages and Ratios",
    "topicId": "y7-14a",
    "topicCode": "14A",
    "topicTitle": "Percentages, fractions and decimals",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isActive": true,
    "isManual": true,
    "question": "Write the following decimal as a percentage: $$0.625$$",
    "options": [
      "62.5%",
      "6.25%",
      "0.625%",
      "625%"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>To write a decimal as a percentage, multiply by 100 (which is equivalent to shifting the decimal point two places to the right):</p><p>$$0.625 \\times 100\\% = 62.5%$$</p></div>",
    "createdAt": "2026-05-17T13:33:12.191Z"
  },
  {
    "chapterId": "y7-14",
    "chapterTitle": "Chapter 14: Percentages and Ratios",
    "topicId": "y7-14a",
    "topicCode": "14A",
    "topicTitle": "Percentages, fractions and decimals",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "hard",
    "isActive": true,
    "isManual": true,
    "question": "Write the following percentage as a simplified fraction: $$1\\frac{1}{2}\\%$$",
    "options": [
      "$$\\frac{3}{200}$$",
      "$$\\frac{1}{200}$$",
      "$$\\frac{3}{100}$$",
      "$$\\frac{3}{50}$$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>To convert a percentage containing a fraction to a simplified fraction:</p><ul><li>Convert the mixed number to an improper fraction.</li><li>Divide by 100 (multiply the denominator by 100).</li><li>Simplify the fraction.</li></ul><p>$$1\\frac{1}{2}\\% = \\frac{3}{2}\\% = \\frac{3}{2} \\div 100 = \\frac{3}{2 \\times 100} = \\frac{3}{200}$$</p></div>",
    "createdAt": "2026-05-17T13:33:12.191Z"
  },
  {
    "chapterId": "y7-14",
    "chapterTitle": "Chapter 14: Percentages and Ratios",
    "topicId": "y7-14a",
    "topicCode": "14A",
    "topicTitle": "Percentages, fractions and decimals",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "hard",
    "isActive": true,
    "isManual": true,
    "question": "Write the following percentage as a simplified fraction: $$3\\frac{1}{2}\\%$$",
    "options": [
      "$$\\frac{7}{200}$$",
      "$$\\frac{3}{200}$$",
      "$$\\frac{7}{100}$$",
      "$$\\frac{7}{50}$$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>To convert a percentage containing a fraction to a simplified fraction:</p><ul><li>Convert the mixed number to an improper fraction.</li><li>Divide by 100 (multiply the denominator by 100).</li><li>Simplify the fraction.</li></ul><p>$$3\\frac{1}{2}\\% = \\frac{7}{2}\\% = \\frac{7}{2} \\div 100 = \\frac{7}{2 \\times 100} = \\frac{7}{200}$$</p></div>",
    "createdAt": "2026-05-17T13:33:12.191Z"
  },
  {
    "chapterId": "y7-14",
    "chapterTitle": "Chapter 14: Percentages and Ratios",
    "topicId": "y7-14a",
    "topicCode": "14A",
    "topicTitle": "Percentages, fractions and decimals",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "hard",
    "isActive": true,
    "isManual": true,
    "question": "Write the following percentage as a simplified fraction: $$8\\frac{3}{4}\\%$$",
    "options": [
      "$$\\frac{7}{80}$$",
      "$$\\frac{35}{400}$$",
      "$$\\frac{7}{40}$$",
      "$$\\frac{35}{100}$$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>To convert a percentage containing a fraction to a simplified fraction:</p><ul><li>Convert the mixed number to an improper fraction.</li><li>Divide by 100 (multiply the denominator by 100).</li><li>Simplify the fraction.</li></ul><p>$$8\\frac{3}{4}\\% = \\frac{35}{4}\\% = \\frac{35}{4} \\div 100 = \\frac{35}{400} = \\frac{7}{80}$$</p></div>",
    "createdAt": "2026-05-17T13:33:12.191Z"
  },
  {
    "chapterId": "y7-14",
    "chapterTitle": "Chapter 14: Percentages and Ratios",
    "topicId": "y7-14a",
    "topicCode": "14A",
    "topicTitle": "Percentages, fractions and decimals",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "hard",
    "isActive": true,
    "isManual": true,
    "question": "Write the following percentage as a simplified fraction: $$62\\frac{1}{2}\\%$$",
    "options": [
      "$$\\frac{5}{8}$$",
      "$$\\frac{125}{200}$$",
      "$$\\frac{5}{4}$$",
      "$$\\frac{3}{8}$$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>To convert a percentage containing a fraction to a simplified fraction:</p><ul><li>Convert the mixed number to an improper fraction.</li><li>Divide by 100 (multiply the denominator by 100).</li><li>Simplify the fraction.</li></ul><p>$$62\\frac{1}{2}\\% = \\frac{125}{2}\\% = \\frac{125}{2} \\div 100 = \\frac{125}{200} = \\frac{5}{8}$$</p></div>",
    "createdAt": "2026-05-17T13:33:12.191Z"
  },
  {
    "chapterId": "y7-14",
    "chapterTitle": "Chapter 14: Percentages and Ratios",
    "topicId": "y7-14a",
    "topicCode": "14A",
    "topicTitle": "Percentages, fractions and decimals",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "A quantity has a decimal representation of 0.6. What are its equivalent representations?",
    "options": [
      "$$\\frac{3}{5} \\text{ and } 60\\%$$",
      "$$\\frac{3}{5} \\text{ and } 6\\%$$",
      "$$\\frac{3}{10} \\text{ and } 60\\%$$",
      "$$\\frac{2}{3} \\text{ and } 60\\%$$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>Converting the value step-by-step:</p><p>$$0.6 = \\frac{6}{10} = \\frac{3}{5}$$ and $$0.6 \\times 100\\% = 60\\%$$</p></div>",
    "createdAt": "2026-05-17T13:33:12.191Z"
  },
  {
    "chapterId": "y7-14",
    "chapterTitle": "Chapter 14: Percentages and Ratios",
    "topicId": "y7-14a",
    "topicCode": "14A",
    "topicTitle": "Percentages, fractions and decimals",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "A quantity has a fraction representation of \\frac{3}{8}. What are its equivalent representations?",
    "options": [
      "$$0.375 \\text{ and } 37.5\\%$$",
      "$$0.375 \\text{ and } 3.75\\%$$",
      "$$0.125 \\text{ and } 12.5\\%$$",
      "$$0.625 \\text{ and } 62.5\\%$$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>Converting the value step-by-step:</p><p>$$\\frac{3}{8} = 3 \\div 8 = 0.375$$ and $$0.375 \\times 100\\% = 37.5\\%$$</p></div>",
    "createdAt": "2026-05-17T13:33:12.191Z"
  },
  {
    "chapterId": "y7-14",
    "chapterTitle": "Chapter 14: Percentages and Ratios",
    "topicId": "y7-14a",
    "topicCode": "14A",
    "topicTitle": "Percentages, fractions and decimals",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "A quantity has a percentage representation of 85\\%. What are its equivalent representations?",
    "options": [
      "$$0.85 \\text{ and } \\frac{17}{20}$$",
      "$$8.5 \\text{ and } \\frac{17}{20}$$",
      "$$0.85 \\text{ and } \\frac{85}{100}$$",
      "$$0.85 \\text{ and } \\frac{4}{5}$$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>Converting the value step-by-step:</p><p>$$85\\% = \\frac{85}{100} = 0.85$$ and $$\\frac{85}{100} = \\frac{17}{20}$$</p></div>",
    "createdAt": "2026-05-17T13:33:12.191Z"
  },
  {
    "chapterId": "y7-14",
    "chapterTitle": "Chapter 14: Percentages and Ratios",
    "topicId": "y7-14a",
    "topicCode": "14A",
    "topicTitle": "Percentages, fractions and decimals",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "A quantity has a decimal representation of 0.8. What are its equivalent representations?",
    "options": [
      "$$\\frac{4}{5} \\text{ and } 80\\%$$",
      "$$\\frac{4}{5} \\text{ and } 8\\%$$",
      "$$\\frac{8}{10} \\text{ and } 8\\%$$",
      "$$\\frac{3}{4} \\text{ and } 80\\%$$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>Converting the value step-by-step:</p><p>$$0.8 = \\frac{8}{10} = \\frac{4}{5}$$ and $$0.8 \\times 100\\% = 80\\%$$</p></div>",
    "createdAt": "2026-05-17T13:33:12.191Z"
  },
  {
    "chapterId": "y7-14",
    "chapterTitle": "Chapter 14: Percentages and Ratios",
    "topicId": "y7-14a",
    "topicCode": "14A",
    "topicTitle": "Percentages, fractions and decimals",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "A quantity has a percentage representation of 150\\%. What are its equivalent representations?",
    "options": [
      "$$1.5 \\text{ and } 1\\frac{1}{2}$$",
      "$$15.0 \\text{ and } 1\\frac{1}{2}$$",
      "$$1.5 \\text{ and } \\frac{3}{4}$$",
      "$$0.15 \\text{ and } 1\\frac{1}{2}$$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>Converting the value step-by-step:</p><p>$$150\\% = \\frac{150}{100} = 1.5$$ and $$\\frac{150}{100} = \\frac{3}{2} = 1\\frac{1}{2}$$</p></div>",
    "createdAt": "2026-05-17T13:33:12.191Z"
  },
  {
    "chapterId": "y7-14",
    "chapterTitle": "Chapter 14: Percentages and Ratios",
    "topicId": "y7-14a",
    "topicCode": "14A",
    "topicTitle": "Percentages, fractions and decimals",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "A quantity has a decimal representation of 0.563. What are its equivalent representations?",
    "options": [
      "$$\\frac{563}{1000} \\text{ and } 56.3\\%$$",
      "$$\\frac{563}{100} \\text{ and } 56.3\\%$$",
      "$$\\frac{563}{1000} \\text{ and } 5.63\\%$$",
      "$$\\frac{563}{1000} \\text{ and } 563\\%$$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>Converting the value step-by-step:</p><p>$$0.563 = \\frac{563}{1000}$$ and $$0.563 \\times 100\\% = 56.3\\%$$</p></div>",
    "createdAt": "2026-05-17T13:33:12.191Z"
  },
  {
    "chapterId": "y7-14",
    "chapterTitle": "Chapter 14: Percentages and Ratios",
    "topicId": "y7-14a",
    "topicCode": "14A",
    "topicTitle": "Percentages, fractions and decimals",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "A quantity has a fraction representation of \\frac{17}{100}. What are its equivalent representations?",
    "options": [
      "$$0.17 \\text{ and } 17\\%$$",
      "$$1.7 \\text{ and } 17\\%$$",
      "$$0.17 \\text{ and } 1.7\\%$$",
      "$$0.017 \\text{ and } 1.7\\%$$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>Converting the value step-by-step:</p><p>$$\\frac{17}{100} = 0.17$$ and $$\\frac{17}{100} \\times 100\\% = 17\\%$$</p></div>",
    "createdAt": "2026-05-17T13:33:12.191Z"
  },
  {
    "chapterId": "y7-14",
    "chapterTitle": "Chapter 14: Percentages and Ratios",
    "topicId": "y7-14a",
    "topicCode": "14A",
    "topicTitle": "Percentages, fractions and decimals",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "A quantity has a decimal representation of 0.307. What are its equivalent representations?",
    "options": [
      "$$\\frac{307}{1000} \\text{ and } 30.7\\%$$",
      "$$\\frac{307}{100} \\text{ and } 3.07\\%$$",
      "$$\\frac{307}{1000} \\text{ and } 3.07\\%$$",
      "$$\\frac{307}{1000} \\text{ and } 307\\%$$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>Converting the value step-by-step:</p><p>$$0.307 = \\frac{307}{1000}$$ and $$0.307 \\times 100\\% = 30.7\\%$$</p></div>",
    "createdAt": "2026-05-17T13:33:12.192Z"
  },
  {
    "chapterId": "y7-14",
    "chapterTitle": "Chapter 14: Percentages and Ratios",
    "topicId": "y7-14a",
    "topicCode": "14A",
    "topicTitle": "Percentages, fractions and decimals",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "A quantity has a fraction representation of \\frac{7}{8}. What are its equivalent representations?",
    "options": [
      "$$0.875 \\text{ and } 87.5\\%$$",
      "$$0.875 \\text{ and } 8.75\\%$$",
      "$$0.785 \\text{ and } 78.5\\%$$",
      "$$0.625 \\text{ and } 62.5\\%$$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>Converting the value step-by-step:</p><p>$$\\frac{7}{8} = 7 \\div 8 = 0.875$$ and $$0.875 \\times 100\\% = 87.5\\%$$</p></div>",
    "createdAt": "2026-05-17T13:33:12.192Z"
  },
  {
    "chapterId": "y7-14",
    "chapterTitle": "Chapter 14: Percentages and Ratios",
    "topicId": "y7-14a",
    "topicCode": "14A",
    "topicTitle": "Percentages, fractions and decimals",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "hard",
    "isActive": true,
    "isManual": true,
    "question": "Write the following fraction as a percentage: $$\\frac{5}{6}$$",
    "options": [
      "83\\frac{1}{3}\\%",
      "83.3\\%",
      "83\\frac{2}{3}\\%",
      "80%"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>To write a fraction as a percentage, multiply by 100%:</p><p>$$\\frac{5}{6} \\times 100\\% = \\frac{500}{6}\\% = \\frac{250}{3}\\% = 83\\frac{1}{3}\\%$$</p></div>",
    "createdAt": "2026-05-17T13:33:12.192Z"
  },
  {
    "chapterId": "y7-14",
    "chapterTitle": "Chapter 14: Percentages and Ratios",
    "topicId": "y7-14a",
    "topicCode": "14A",
    "topicTitle": "Percentages, fractions and decimals",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "hard",
    "isActive": true,
    "isManual": true,
    "question": "Write the following fraction as a percentage: $$\\frac{3}{8}$$",
    "options": [
      "37.5\\%",
      "37\\frac{1}{4}\\%",
      "35.5\\%",
      "37.8\\%"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>To write a fraction as a percentage, multiply by 100%:</p><p>$$\\frac{3}{8} \\times 100\\% = \\frac{300}{8}\\% = \\frac{75}{2}\\% = 37.5\\%$$</p></div>",
    "createdAt": "2026-05-17T13:33:12.192Z"
  },
  {
    "chapterId": "y7-14",
    "chapterTitle": "Chapter 14: Percentages and Ratios",
    "topicId": "y7-14a",
    "topicCode": "14A",
    "topicTitle": "Percentages, fractions and decimals",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "hard",
    "isActive": true,
    "isManual": true,
    "question": "Write the following fraction as a percentage: $$\\frac{5}{8}$$",
    "options": [
      "62.5\\%",
      "62\\frac{1}{4}\\%",
      "65.5\\%",
      "60%"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>To write a fraction as a percentage, multiply by 100%:</p><p>$$\\frac{5}{8} \\times 100\\% = \\frac{500}{8}\\% = \\frac{125}{2}\\% = 62.5\\%$$</p></div>",
    "createdAt": "2026-05-17T13:33:12.192Z"
  },
  {
    "chapterId": "y7-14",
    "chapterTitle": "Chapter 14: Percentages and Ratios",
    "topicId": "y7-14a",
    "topicCode": "14A",
    "topicTitle": "Percentages, fractions and decimals",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "hard",
    "isActive": true,
    "isManual": true,
    "question": "Write the following fraction as a percentage: $$\\frac{3}{7}$$",
    "options": [
      "42\\frac{6}{7}\\%",
      "42.8\\%",
      "42\\frac{3}{7}\\%",
      "43\\%"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>To write a fraction as a percentage, multiply by 100%:</p><p>$$\\frac{3}{7} \\times 100\\% = \\frac{300}{7}\\% = 42\\frac{6}{7}\\%$$</p></div>",
    "createdAt": "2026-05-17T13:33:12.192Z"
  },
  {
    "chapterId": "y7-14",
    "chapterTitle": "Chapter 14: Percentages and Ratios",
    "topicId": "y7-14a",
    "topicCode": "14A",
    "topicTitle": "Percentages, fractions and decimals",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "hard",
    "isActive": true,
    "isManual": true,
    "question": "Write the following fraction as a percentage: $$\\frac{1}{6}$$",
    "options": [
      "16\\frac{2}{3}\\%",
      "16.6\\%",
      "16\\frac{1}{3}\\%",
      "15%"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>To write a fraction as a percentage, multiply by 100%:</p><p>$$\\frac{1}{6} \\times 100\\% = \\frac{100}{6}\\% = \\frac{50}{3}\\% = 16\\frac{2}{3}\\%$$</p></div>",
    "createdAt": "2026-05-17T13:33:12.192Z"
  },
  {
    "chapterId": "y7-14",
    "chapterTitle": "Chapter 14: Percentages and Ratios",
    "topicId": "y7-14a",
    "topicCode": "14A",
    "topicTitle": "Percentages, fractions and decimals",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "hard",
    "isActive": true,
    "isManual": true,
    "question": "Write the following fraction as a percentage: $$\\frac{4}{9}$$",
    "options": [
      "44\\frac{4}{9}\\%",
      "44.4\\%",
      "44\\frac{1}{9}\\%",
      "40%"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>To write a fraction as a percentage, multiply by 100%:</p><p>$$\\frac{4}{9} \\times 100\\% = \\frac{400}{9}\\% = 44\\frac{4}{9}\\%$$</p></div>",
    "createdAt": "2026-05-17T13:33:12.192Z"
  },
  {
    "chapterId": "y7-14",
    "chapterTitle": "Chapter 14: Percentages and Ratios",
    "topicId": "y7-14a",
    "topicCode": "14A",
    "topicTitle": "Percentages, fractions and decimals",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "hard",
    "isActive": true,
    "isManual": true,
    "question": "Write the following fraction as a percentage: $$\\frac{6}{11}$$",
    "options": [
      "54\\frac{6}{11}\\%",
      "54.5\\%",
      "54\\frac{5}{11}\\%",
      "50%"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>To write a fraction as a percentage, multiply by 100%:</p><p>$$\\frac{6}{11} \\times 100\\% = \\frac{600}{11}\\% = 54\\frac{6}{11}\\%$$</p></div>",
    "createdAt": "2026-05-17T13:33:12.192Z"
  },
  {
    "chapterId": "y7-14",
    "chapterTitle": "Chapter 14: Percentages and Ratios",
    "topicId": "y7-14a",
    "topicCode": "14A",
    "topicTitle": "Percentages, fractions and decimals",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "hard",
    "isActive": true,
    "isManual": true,
    "question": "Write the following fraction as a percentage: $$\\frac{5}{12}$$",
    "options": [
      "41\\frac{2}{3}\\%",
      "41.6\\%",
      "41\\frac{1}{3}\\%",
      "40%"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>To write a fraction as a percentage, multiply by 100%:</p><p>$$\\frac{5}{12} \\times 100\\% = \\frac{500}{12}\\% = \\frac{125}{3}\\% = 41\\frac{2}{3}\\%$$</p></div>",
    "createdAt": "2026-05-17T13:33:12.192Z"
  },
  {
    "chapterId": "y7-14",
    "chapterTitle": "Chapter 14: Percentages and Ratios",
    "topicId": "y7-14a",
    "topicCode": "14A",
    "topicTitle": "Percentages, fractions and decimals",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "hard",
    "isActive": true,
    "isManual": true,
    "question": "Write the following fraction as a percentage: $$\\frac{6}{7}$$",
    "options": [
      "85\\frac{5}{7}\\%",
      "85.7\\%",
      "85\\frac{3}{7}\\%",
      "86%"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>To write a fraction as a percentage, multiply by 100%:</p><p>$$\\frac{6}{7} \\times 100\\% = \\frac{600}{7}\\% = 85\\frac{5}{7}\\%$$</p></div>",
    "createdAt": "2026-05-17T13:33:12.192Z"
  },
  {
    "chapterId": "y7-14",
    "chapterTitle": "Chapter 14: Percentages and Ratios",
    "topicId": "y7-14a",
    "topicCode": "14A",
    "topicTitle": "Percentages, fractions and decimals",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "hard",
    "isActive": true,
    "isManual": true,
    "question": "Write the following fraction as a percentage: $$\\frac{7}{12}$$",
    "options": [
      "58\\frac{1}{3}\\%",
      "58.3\\%",
      "58\\frac{2}{3}\\%",
      "60%"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>To write a fraction as a percentage, multiply by 100%:</p><p>$$\\frac{7}{12} \\times 100\\% = \\frac{700}{12}\\% = \\frac{175}{3}\\% = 58\\frac{1}{3}\\%$$</p></div>",
    "createdAt": "2026-05-17T13:33:12.192Z"
  }
];

export const importYear7Ch14A = async (forceReset = false) => {
  console.log('[Ch14A Year 7 Import] STARTING PHYSICAL SYNC...');
  let importedCount = 0;
  try {
    const qRef = collection(db, 'questions');
    
    if (forceReset) {
      console.log('Force reset enabled. Deleting existing Y7 Ch14 (14a to 14f) questions...');
      const topicsToDelete = ['y7-14a', 'y7-14b', 'y7-14c', 'y7-14d', 'y7-14e', 'y7-14f'];
      for (const tId of topicsToDelete) {
        const existingSnap = await getDocs(query(qRef, where('topicId', '==', tId)));
        for (const doc of existingSnap.docs) {
          await deleteDoc(doc.ref);
        }
      }
      console.log('Deleted existing Ch14 topic questions.');
    }

    const existingQuestions = new Set();
    const topicsToCheck = ['y7-14a', 'y7-14b', 'y7-14c', 'y7-14d', 'y7-14e', 'y7-14f'];
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
    console.log('[Ch14A Year 7 Import] SUCCESS! ' + importedCount + ' new questions imported.');
    return importedCount;
  } catch (error) {
    console.error('[Ch14A Year 7 Import] ERROR:', error);
    return 0;
  }
};
