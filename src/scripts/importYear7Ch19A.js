import { db } from '../firebase/config.js';
import { collection, addDoc, getDocs, query, where, deleteDoc } from 'firebase/firestore';

export const allQuestions = [
  {
    "chapterId": "y7-19",
    "chapterTitle": "Chapter 19: Numerical Data",
    "topicId": "y7-19a",
    "topicCode": "19A",
    "topicTitle": "Data and dot plots",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isActive": true,
    "isManual": true,
    "question": "The local vet weighed each dog brought into the practice for one week. The tallies of the dogs with each of the different weights are shown in the table below:\n\n<div style=\"display: flex; justify-content: center; margin: 16px 0;\">\n  <table style=\"width: 100%; max-width: 600px; border-collapse: collapse; font-family: inherit; font-size: 13px; text-align: center; border: 1px solid #cbd5e1; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);\">\n    <thead>\n      <tr style=\"background: #4f46e5; color: white;\">\n        <th style=\"padding: 10px 8px; font-weight: 600; border: 1px solid #cbd5e1; width: 22%;\">Weight (correct to nearest kg)</th>\n        <th style=\"padding: 6px; font-weight: 600; border: 1px solid #cbd5e1; width: 6.5%;\">27</th>\n        <th style=\"padding: 6px; font-weight: 600; border: 1px solid #cbd5e1; width: 6.5%;\">28</th>\n        <th style=\"padding: 6px; font-weight: 600; border: 1px solid #cbd5e1; width: 6.5%;\">29</th>\n        <th style=\"padding: 6px; font-weight: 600; border: 1px solid #cbd5e1; width: 6.5%;\">30</th>\n        <th style=\"padding: 6px; font-weight: 600; border: 1px solid #cbd5e1; width: 6.5%;\">31</th>\n        <th style=\"padding: 6px; font-weight: 600; border: 1px solid #cbd5e1; width: 6.5%;\">32</th>\n        <th style=\"padding: 6px; font-weight: 600; border: 1px solid #cbd5e1; width: 6.5%;\">33</th>\n        <th style=\"padding: 6px; font-weight: 600; border: 1px solid #cbd5e1; width: 6.5%;\">34</th>\n        <th style=\"padding: 6px; font-weight: 600; border: 1px solid #cbd5e1; width: 6.5%;\">35</th>\n        <th style=\"padding: 6px; font-weight: 600; border: 1px solid #cbd5e1; width: 6.5%;\">36</th>\n        <th style=\"padding: 6px; font-weight: 600; border: 1px solid #cbd5e1; width: 6.5%;\">37</th>\n        <th style=\"padding: 6px; font-weight: 600; border: 1px solid #cbd5e1; width: 6.5%;\">38</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr style=\"background: #f8fafc;\">\n        <td style=\"padding: 8px; border: 1px solid #cbd5e1; font-weight: 600; text-align: left; color: #4f46e5;\">Tally</td>\n        <td style=\"padding: 8px; border: 1px solid #cbd5e1; color: #e11d48; font-weight: bold;\">|</td>\n        <td style=\"padding: 8px; border: 1px solid #cbd5e1; color: #94a3b8; font-style: italic;\"></td>\n        <td style=\"padding: 8px; border: 1px solid #cbd5e1; color: #e11d48; font-weight: bold;\">|||</td>\n        <td style=\"padding: 8px; border: 1px solid #cbd5e1; color: #e11d48; font-weight: bold;\">|</td>\n        <td style=\"padding: 8px; border: 1px solid #cbd5e1; color: #e11d48; font-weight: bold;\">||||</td>\n        <td style=\"padding: 8px; border: 1px solid #cbd5e1; color: #e11d48; font-weight: bold;\"><s>||||</s> <s>||||</s></td>\n        <td style=\"padding: 8px; border: 1px solid #cbd5e1; color: #e11d48; font-weight: bold;\">|||</td>\n        <td style=\"padding: 8px; border: 1px solid #cbd5e1; color: #e11d48; font-weight: bold;\">|||</td>\n        <td style=\"padding: 8px; border: 1px solid #cbd5e1; color: #e11d48; font-weight: bold;\"><s>||||</s></td>\n        <td style=\"padding: 8px; border: 1px solid #cbd5e1; color: #e11d48; font-weight: bold;\"><s>||||</s></td>\n        <td style=\"padding: 8px; border: 1px solid #cbd5e1; color: #94a3b8; font-style: italic;\"></td>\n        <td style=\"padding: 8px; border: 1px solid #cbd5e1; color: #e11d48; font-weight: bold;\">|||</td>\n      </tr>\n      <tr>\n        <td style=\"padding: 8px; border: 1px solid #cbd5e1; font-weight: 600; text-align: left; color: #475569;\">Frequency</td>\n        <td style=\"padding: 8px; border: 1px solid #cbd5e1; color: #94a3b8; font-style: italic;\">?</td>\n        <td style=\"padding: 8px; border: 1px solid #cbd5e1; color: #94a3b8; font-style: italic;\">?</td>\n        <td style=\"padding: 8px; border: 1px solid #cbd5e1; color: #94a3b8; font-style: italic;\">?</td>\n        <td style=\"padding: 8px; border: 1px solid #cbd5e1; color: #94a3b8; font-style: italic;\">?</td>\n        <td style=\"padding: 8px; border: 1px solid #cbd5e1; color: #94a3b8; font-style: italic;\">?</td>\n        <td style=\"padding: 8px; border: 1px solid #cbd5e1; color: #94a3b8; font-style: italic;\">?</td>\n        <td style=\"padding: 8px; border: 1px solid #cbd5e1; color: #94a3b8; font-style: italic;\">?</td>\n        <td style=\"padding: 8px; border: 1px solid #cbd5e1; color: #94a3b8; font-style: italic;\">?</td>\n        <td style=\"padding: 8px; border: 1px solid #cbd5e1; color: #94a3b8; font-style: italic;\">?</td>\n        <td style=\"padding: 8px; border: 1px solid #cbd5e1; color: #94a3b8; font-style: italic;\">?</td>\n        <td style=\"padding: 8px; border: 1px solid #cbd5e1; color: #94a3b8; font-style: italic;\">?</td>\n        <td style=\"padding: 8px; border: 1px solid #cbd5e1; color: #94a3b8; font-style: italic;\">?</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n\nComplete the frequency row of the table. What are the correct frequencies for the dog weights **31 kg, 32 kg, and 35 kg**?",
    "options": [
      "31 kg: 4; 32 kg: 10; 35 kg: 5",
      "31 kg: 4; 32 kg: 9; 35 kg: 4",
      "31 kg: 3; 32 kg: 10; 35 kg: 5",
      "31 kg: 5; 32 kg: 10; 35 kg: 6"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>Let's convert each tally into numerical frequencies step-by-step:</p><ul><li><strong>Weight 31 kg:</strong> The tally is four vertical strokes: <code>||||</code>, which represents a frequency of <strong>4</strong>.</li><li><strong>Weight 32 kg:</strong> The tally consists of two groups of five strokes: <code><s>||||</s> <s>||||</s></code>, which represents a frequency of $5 + 5 = <strong>10</strong>$.</li><li><strong>Weight 35 kg:</strong> The tally is one group of five strokes: <code><s>||||</s></code>, which represents a frequency of <strong>5</strong>.</li></ul></div>",
    "createdAt": "2026-05-18T07:46:49.148Z"
  },
  {
    "chapterId": "y7-19",
    "chapterTitle": "Chapter 19: Numerical Data",
    "topicId": "y7-19a",
    "topicCode": "19A",
    "topicTitle": "Data and dot plots",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isActive": true,
    "isManual": true,
    "question": "The local vet weighed each dog brought into the practice for one week. The tallies of the dogs with each of the different weights are shown in the table below:\n\n<div style=\"display: flex; justify-content: center; margin: 16px 0;\">\n  <table style=\"width: 100%; max-width: 600px; border-collapse: collapse; font-family: inherit; font-size: 13px; text-align: center; border: 1px solid #cbd5e1; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);\">\n    <thead>\n      <tr style=\"background: #4f46e5; color: white;\">\n        <th style=\"padding: 10px 8px; font-weight: 600; border: 1px solid #cbd5e1; width: 22%;\">Weight (correct to nearest kg)</th>\n        <th style=\"padding: 6px; font-weight: 600; border: 1px solid #cbd5e1; width: 6.5%;\">27</th>\n        <th style=\"padding: 6px; font-weight: 600; border: 1px solid #cbd5e1; width: 6.5%;\">28</th>\n        <th style=\"padding: 6px; font-weight: 600; border: 1px solid #cbd5e1; width: 6.5%;\">29</th>\n        <th style=\"padding: 6px; font-weight: 600; border: 1px solid #cbd5e1; width: 6.5%;\">30</th>\n        <th style=\"padding: 6px; font-weight: 600; border: 1px solid #cbd5e1; width: 6.5%;\">31</th>\n        <th style=\"padding: 6px; font-weight: 600; border: 1px solid #cbd5e1; width: 6.5%;\">32</th>\n        <th style=\"padding: 6px; font-weight: 600; border: 1px solid #cbd5e1; width: 6.5%;\">33</th>\n        <th style=\"padding: 6px; font-weight: 600; border: 1px solid #cbd5e1; width: 6.5%;\">34</th>\n        <th style=\"padding: 6px; font-weight: 600; border: 1px solid #cbd5e1; width: 6.5%;\">35</th>\n        <th style=\"padding: 6px; font-weight: 600; border: 1px solid #cbd5e1; width: 6.5%;\">36</th>\n        <th style=\"padding: 6px; font-weight: 600; border: 1px solid #cbd5e1; width: 6.5%;\">37</th>\n        <th style=\"padding: 6px; font-weight: 600; border: 1px solid #cbd5e1; width: 6.5%;\">38</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr style=\"background: #f8fafc;\">\n        <td style=\"padding: 8px; border: 1px solid #cbd5e1; font-weight: 600; text-align: left; color: #4f46e5;\">Tally</td>\n        <td style=\"padding: 8px; border: 1px solid #cbd5e1; color: #e11d48; font-weight: bold;\">|</td>\n        <td style=\"padding: 8px; border: 1px solid #cbd5e1; color: #94a3b8; font-style: italic;\"></td>\n        <td style=\"padding: 8px; border: 1px solid #cbd5e1; color: #e11d48; font-weight: bold;\">|||</td>\n        <td style=\"padding: 8px; border: 1px solid #cbd5e1; color: #e11d48; font-weight: bold;\">|</td>\n        <td style=\"padding: 8px; border: 1px solid #cbd5e1; color: #e11d48; font-weight: bold;\">||||</td>\n        <td style=\"padding: 8px; border: 1px solid #cbd5e1; color: #e11d48; font-weight: bold;\"><s>||||</s> <s>||||</s></td>\n        <td style=\"padding: 8px; border: 1px solid #cbd5e1; color: #e11d48; font-weight: bold;\">|||</td>\n        <td style=\"padding: 8px; border: 1px solid #cbd5e1; color: #e11d48; font-weight: bold;\">|||</td>\n        <td style=\"padding: 8px; border: 1px solid #cbd5e1; color: #e11d48; font-weight: bold;\"><s>||||</s></td>\n        <td style=\"padding: 8px; border: 1px solid #cbd5e1; color: #e11d48; font-weight: bold;\"><s>||||</s></td>\n        <td style=\"padding: 8px; border: 1px solid #cbd5e1; color: #94a3b8; font-style: italic;\"></td>\n        <td style=\"padding: 8px; border: 1px solid #cbd5e1; color: #e11d48; font-weight: bold;\">|||</td>\n      </tr>\n      <tr>\n        <td style=\"padding: 8px; border: 1px solid #cbd5e1; font-weight: 600; text-align: left; color: #475569;\">Frequency</td>\n        <td style=\"padding: 8px; border: 1px solid #cbd5e1; color: #94a3b8; font-style: italic;\">?</td>\n        <td style=\"padding: 8px; border: 1px solid #cbd5e1; color: #94a3b8; font-style: italic;\">?</td>\n        <td style=\"padding: 8px; border: 1px solid #cbd5e1; color: #94a3b8; font-style: italic;\">?</td>\n        <td style=\"padding: 8px; border: 1px solid #cbd5e1; color: #94a3b8; font-style: italic;\">?</td>\n        <td style=\"padding: 8px; border: 1px solid #cbd5e1; color: #94a3b8; font-style: italic;\">?</td>\n        <td style=\"padding: 8px; border: 1px solid #cbd5e1; color: #94a3b8; font-style: italic;\">?</td>\n        <td style=\"padding: 8px; border: 1px solid #cbd5e1; color: #94a3b8; font-style: italic;\">?</td>\n        <td style=\"padding: 8px; border: 1px solid #cbd5e1; color: #94a3b8; font-style: italic;\">?</td>\n        <td style=\"padding: 8px; border: 1px solid #cbd5e1; color: #94a3b8; font-style: italic;\">?</td>\n        <td style=\"padding: 8px; border: 1px solid #cbd5e1; color: #94a3b8; font-style: italic;\">?</td>\n        <td style=\"padding: 8px; border: 1px solid #cbd5e1; color: #94a3b8; font-style: italic;\">?</td>\n        <td style=\"padding: 8px; border: 1px solid #cbd5e1; color: #94a3b8; font-style: italic;\">?</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n\nHow many dogs in total were brought into the vet during this week?",
    "options": [
      "38 dogs",
      "35 dogs",
      "40 dogs",
      "36 dogs"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>To find the total number of dogs, we sum up all frequencies obtained from the tally table:</p><ul><li>$$\\text{Total} = 1 + 0 + 3 + 1 + 4 + 10 + 3 + 3 + 5 + 5 + 0 + 3$$</li><li>$$\\text{Total} = 38\\text{ dogs}$$</li></ul><p>Therefore, a total of <strong>38 dogs</strong> were brought into the vet practice during the week.</p></div>",
    "createdAt": "2026-05-18T07:46:49.155Z"
  },
  {
    "chapterId": "y7-19",
    "chapterTitle": "Chapter 19: Numerical Data",
    "topicId": "y7-19a",
    "topicCode": "19A",
    "topicTitle": "Data and dot plots",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "The local vet weighed each dog brought into the practice for one week. The tallies of the dogs with each of the different weights are shown in the table below:\n\n<div style=\"display: flex; justify-content: center; margin: 16px 0;\">\n  <table style=\"width: 100%; max-width: 600px; border-collapse: collapse; font-family: inherit; font-size: 13px; text-align: center; border: 1px solid #cbd5e1; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);\">\n    <thead>\n      <tr style=\"background: #4f46e5; color: white;\">\n        <th style=\"padding: 10px 8px; font-weight: 600; border: 1px solid #cbd5e1; width: 22%;\">Weight (correct to nearest kg)</th>\n        <th style=\"padding: 6px; font-weight: 600; border: 1px solid #cbd5e1; width: 6.5%;\">27</th>\n        <th style=\"padding: 6px; font-weight: 600; border: 1px solid #cbd5e1; width: 6.5%;\">28</th>\n        <th style=\"padding: 6px; font-weight: 600; border: 1px solid #cbd5e1; width: 6.5%;\">29</th>\n        <th style=\"padding: 6px; font-weight: 600; border: 1px solid #cbd5e1; width: 6.5%;\">30</th>\n        <th style=\"padding: 6px; font-weight: 600; border: 1px solid #cbd5e1; width: 6.5%;\">31</th>\n        <th style=\"padding: 6px; font-weight: 600; border: 1px solid #cbd5e1; width: 6.5%;\">32</th>\n        <th style=\"padding: 6px; font-weight: 600; border: 1px solid #cbd5e1; width: 6.5%;\">33</th>\n        <th style=\"padding: 6px; font-weight: 600; border: 1px solid #cbd5e1; width: 6.5%;\">34</th>\n        <th style=\"padding: 6px; font-weight: 600; border: 1px solid #cbd5e1; width: 6.5%;\">35</th>\n        <th style=\"padding: 6px; font-weight: 600; border: 1px solid #cbd5e1; width: 6.5%;\">36</th>\n        <th style=\"padding: 6px; font-weight: 600; border: 1px solid #cbd5e1; width: 6.5%;\">37</th>\n        <th style=\"padding: 6px; font-weight: 600; border: 1px solid #cbd5e1; width: 6.5%;\">38</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr style=\"background: #f8fafc;\">\n        <td style=\"padding: 8px; border: 1px solid #cbd5e1; font-weight: 600; text-align: left; color: #4f46e5;\">Tally</td>\n        <td style=\"padding: 8px; border: 1px solid #cbd5e1; color: #e11d48; font-weight: bold;\">|</td>\n        <td style=\"padding: 8px; border: 1px solid #cbd5e1; color: #94a3b8; font-style: italic;\"></td>\n        <td style=\"padding: 8px; border: 1px solid #cbd5e1; color: #e11d48; font-weight: bold;\">|||</td>\n        <td style=\"padding: 8px; border: 1px solid #cbd5e1; color: #e11d48; font-weight: bold;\">|</td>\n        <td style=\"padding: 8px; border: 1px solid #cbd5e1; color: #e11d48; font-weight: bold;\">||||</td>\n        <td style=\"padding: 8px; border: 1px solid #cbd5e1; color: #e11d48; font-weight: bold;\"><s>||||</s> <s>||||</s></td>\n        <td style=\"padding: 8px; border: 1px solid #cbd5e1; color: #e11d48; font-weight: bold;\">|||</td>\n        <td style=\"padding: 8px; border: 1px solid #cbd5e1; color: #e11d48; font-weight: bold;\">|||</td>\n        <td style=\"padding: 8px; border: 1px solid #cbd5e1; color: #e11d48; font-weight: bold;\"><s>||||</s></td>\n        <td style=\"padding: 8px; border: 1px solid #cbd5e1; color: #e11d48; font-weight: bold;\"><s>||||</s></td>\n        <td style=\"padding: 8px; border: 1px solid #cbd5e1; color: #94a3b8; font-style: italic;\"></td>\n        <td style=\"padding: 8px; border: 1px solid #cbd5e1; color: #e11d48; font-weight: bold;\">|||</td>\n      </tr>\n      <tr>\n        <td style=\"padding: 8px; border: 1px solid #cbd5e1; font-weight: 600; text-align: left; color: #475569;\">Frequency</td>\n        <td style=\"padding: 8px; border: 1px solid #cbd5e1; color: #94a3b8; font-style: italic;\">?</td>\n        <td style=\"padding: 8px; border: 1px solid #cbd5e1; color: #94a3b8; font-style: italic;\">?</td>\n        <td style=\"padding: 8px; border: 1px solid #cbd5e1; color: #94a3b8; font-style: italic;\">?</td>\n        <td style=\"padding: 8px; border: 1px solid #cbd5e1; color: #94a3b8; font-style: italic;\">?</td>\n        <td style=\"padding: 8px; border: 1px solid #cbd5e1; color: #94a3b8; font-style: italic;\">?</td>\n        <td style=\"padding: 8px; border: 1px solid #cbd5e1; color: #94a3b8; font-style: italic;\">?</td>\n        <td style=\"padding: 8px; border: 1px solid #cbd5e1; color: #94a3b8; font-style: italic;\">?</td>\n        <td style=\"padding: 8px; border: 1px solid #cbd5e1; color: #94a3b8; font-style: italic;\">?</td>\n        <td style=\"padding: 8px; border: 1px solid #cbd5e1; color: #94a3b8; font-style: italic;\">?</td>\n        <td style=\"padding: 8px; border: 1px solid #cbd5e1; color: #94a3b8; font-style: italic;\">?</td>\n        <td style=\"padding: 8px; border: 1px solid #cbd5e1; color: #94a3b8; font-style: italic;\">?</td>\n        <td style=\"padding: 8px; border: 1px solid #cbd5e1; color: #94a3b8; font-style: italic;\">?</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n\nIf we were to draw a dot plot representing this dataset, which weight (correct to the nearest kg) would have the tallest column of dots, and how many dots would be in that column?",
    "options": [
      "32 kg, with 10 dots",
      "31 kg, with 4 dots",
      "35 kg, with 5 dots",
      "36 kg, with 5 dots"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>In a dot plot, the height of each column represents the frequency of that category:</p><ul><li>The category with the highest frequency will have the tallest column of dots.</li><li>Looking at our table, the highest frequency is <strong>10</strong>, which corresponds to the weight **32 kg**.</li><li>Therefore, the column for **32 kg** will have the tallest column consisting of exactly <strong>10 dots</strong>.</li></ul></div>",
    "createdAt": "2026-05-18T07:46:49.155Z"
  },
  {
    "chapterId": "y7-19",
    "chapterTitle": "Chapter 19: Numerical Data",
    "topicId": "y7-19a",
    "topicCode": "19A",
    "topicTitle": "Data and dot plots",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "Brad's golf scores over the past 20 weeks are recorded as follows:\n\n<div style=\"background: #f1f5f9; padding: 12px; border-radius: 8px; font-weight: bold; text-align: center; margin: 16px 0; font-family: monospace; letter-spacing: 1px;\">\n  82, 79, 84, 82, 81, 79, 78, 72, 79, 79, 77, 88, 79, 81, 79, 79, 84, 78, 72, 72\n</div>\n\nComplete a frequency table for this dataset. What is the frequency of the scores **79** and **72**?",
    "options": [
      "Score 79: frequency of 7; Score 72: frequency of 3",
      "Score 79: frequency of 6; Score 72: frequency of 3",
      "Score 79: frequency of 7; Score 72: frequency of 2",
      "Score 79: frequency of 8; Score 72: frequency of 4"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>Let's count how many times each golf score appears in the dataset:</p><ul><li><strong>For score 72:</strong> It appears at positions 8, 19, and 20. Count = <strong>3</strong>.</li><li><strong>For score 79:</strong> It appears at positions 2, 6, 9, 10, 13, 15, and 16. Count = <strong>7</strong>.</li></ul><p>Therefore, the frequency of score 79 is 7, and the frequency of score 72 is 3.</p></div>",
    "createdAt": "2026-05-18T07:46:49.155Z"
  },
  {
    "chapterId": "y7-19",
    "chapterTitle": "Chapter 19: Numerical Data",
    "topicId": "y7-19a",
    "topicCode": "19A",
    "topicTitle": "Data and dot plots",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isActive": true,
    "isManual": true,
    "question": "Brad's golf scores over the past 20 weeks are recorded as follows:\n\n<div style=\"background: #f1f5f9; padding: 12px; border-radius: 8px; font-weight: bold; text-align: center; margin: 16px 0; font-family: monospace; letter-spacing: 1px;\">\n  82, 79, 84, 82, 81, 79, 78, 72, 79, 79, 77, 88, 79, 81, 79, 79, 84, 78, 72, 72\n</div>\n\nWhat was Brad's highest golf score during these 20 weeks?",
    "options": [
      "88",
      "84",
      "82",
      "79"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>To find the highest golf score, we search for the maximum value in the list:</p><ul><li>The list of scores is: <code>82, 79, 84, 82, 81, 79, 78, 72, 79, 79, 77, 88, 79, 81, 79, 79, 84, 78, 72, 72</code>.</li><li>Comparing all values, the absolute highest score is **88** (achieved in week 12).</li></ul></div>",
    "createdAt": "2026-05-18T07:46:49.155Z"
  },
  {
    "chapterId": "y7-19",
    "chapterTitle": "Chapter 19: Numerical Data",
    "topicId": "y7-19a",
    "topicCode": "19A",
    "topicTitle": "Data and dot plots",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isActive": true,
    "isManual": true,
    "question": "Brad's golf scores over the past 20 weeks are recorded as follows:\n\n<div style=\"background: #f1f5f9; padding: 12px; border-radius: 8px; font-weight: bold; text-align: center; margin: 16px 0; font-family: monospace; letter-spacing: 1px;\">\n  82, 79, 84, 82, 81, 79, 78, 72, 79, 79, 77, 88, 79, 81, 79, 79, 84, 78, 72, 72\n</div>\n\nWhich golf score was most frequent (the mode of Brad's golf scores)?",
    "options": [
      "79",
      "72",
      "82",
      "81"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>The most frequent score is the value that appears most often (highest frequency):</p><ul><li>72 appears 3 times.</li><li>77 appears 1 time.</li><li>78 appears 2 times.</li><li><strong>79 appears 7 times.</strong></li><li>81 appears 2 times.</li><li>82 appears 2 times.</li><li>84 appears 2 times.</li><li>88 appears 1 time.</li></ul><p>Since **79** has the highest frequency (7 occurrences), it is the most frequent golf score.</p></div>",
    "createdAt": "2026-05-18T07:46:49.155Z"
  },
  {
    "chapterId": "y7-19",
    "chapterTitle": "Chapter 19: Numerical Data",
    "topicId": "y7-19a",
    "topicCode": "19A",
    "topicTitle": "Data and dot plots",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "Brad's golf scores over the past 20 weeks are recorded as follows:\n\n<div style=\"background: #f1f5f9; padding: 12px; border-radius: 8px; font-weight: bold; text-align: center; margin: 16px 0; font-family: monospace; letter-spacing: 1px;\">\n  82, 79, 84, 82, 81, 79, 78, 72, 79, 79, 77, 88, 79, 81, 79, 79, 84, 78, 72, 72\n</div>\n\nIf you were to draw a dot plot for Brad's golf scores, how many dots in total would be placed on scores **78 or lower**?",
    "options": [
      "6 dots",
      "5 dots",
      "7 dots",
      "4 dots"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>To find the number of dots placed on <strong>78 or lower</strong>, we find all scores that are less than or equal to 78 and sum their frequencies:</p><ul><li>Scores $\\le 78$ are **72**, **77**, and **78**.</li><li>Frequency of 72 = 3 dots.</li><li>Frequency of 77 = 1 dot.</li><li>Frequency of 78 = 2 dots.</li><li>$$\\text{Total} = 3 + 1 + 2 = 6\\text{ dots}$$.</li></ul></div>",
    "createdAt": "2026-05-18T07:46:49.155Z"
  },
  {
    "chapterId": "y7-19",
    "chapterTitle": "Chapter 19: Numerical Data",
    "topicId": "y7-19a",
    "topicCode": "19A",
    "topicTitle": "Data and dot plots",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "A zoologist counted organisms living in droplets of water. The data are as follows:\n\n<div style=\"background: #f8fafc; padding: 12px; border: 1px solid #e2e8f0; border-radius: 8px; font-weight: bold; text-align: center; margin: 16px 0; font-family: monospace; letter-spacing: 1px;\">\n  21, 23, 24, 23, 21, 25, 34, 32, 21, 23, 34, 23, 22, 24, 25, 25, 26, 21, 24, 21, 20, 23, 27\n</div>\n\nAnalyze the data and select the correct option summarizing parts (a) and (b):\n* **a** Complete a frequency table for the data.\n* **b** Determine the key features if you were to draw a dot plot.",
    "options": [
      "(a) Frequency table: 20:1, 21:5, 22:1, 23:5, 24:3, 25:3, 26:1, 27:1, 32:1, 34:2. (b) The tallest columns are 21 and 23 with 5 dots each; there are gaps at 28-31 and 33.",
      "(a) Frequency table: 20:2, 21:4, 22:1, 23:5, 24:3, 25:3, 26:1, 27:1, 32:1, 34:2. (b) The tallest column is 23 with 5 dots; there are no gaps.",
      "(a) Frequency table: 20:1, 21:5, 22:2, 23:4, 24:3, 25:3, 26:1, 27:1, 32:1, 34:2. (b) The tallest column is 21 with 5 dots; there is a gap at 28-31 only.",
      "(a) Frequency table: 20:1, 21:5, 22:1, 23:5, 24:2, 25:4, 26:1, 27:1, 32:2, 34:1. (b) The tallest columns are 21 and 25 with 5 dots each; there is a gap at 28-31."
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>Let's systematically solve both parts:</p><ul><li><strong>Part (a) Frequency Table:</strong> Let's tally the occurrences of each count:<br /><ul><li><strong>20:</strong> 1 occurrence</li><li><strong>21:</strong> 5 occurrences</li><li><strong>22:</strong> 1 occurrence</li><li><strong>23:</strong> 5 occurrences</li><li><strong>24:</strong> 3 occurrences</li><li><strong>25:</strong> 3 occurrences</li><li><strong>26:</strong> 1 occurrence</li><li><strong>27:</strong> 1 occurrence</li><li><strong>32:</strong> 1 occurrence</li><li><strong>34:</strong> 2 occurrences</li></ul></li><li><strong>Part (b) Dot Plot Features:</strong><ul><li>The tallest stacks are at <strong>21</strong> and <strong>23</strong> (each has a frequency of 5 dots).</li><li>The values jump from 27 to 32 (meaning there are **no dots** on 28, 29, 30, and 31 – a <strong>gap of size 4</strong>).</li><li>The values jump from 32 to 34 (meaning there is **no dot** on 33 – a <strong>gap of size 1</strong>).</li></ul></li></ul></div>",
    "createdAt": "2026-05-18T07:46:49.155Z"
  },
  {
    "chapterId": "y7-19",
    "chapterTitle": "Chapter 19: Numerical Data",
    "topicId": "y7-19a",
    "topicCode": "19A",
    "topicTitle": "Data and dot plots",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "hard",
    "isActive": true,
    "isManual": true,
    "question": "For a class activity, the handspans of 24 students in a class were recorded (correct to the nearest centimetre) as shown in the dataset below. The diagram below illustrates how to measure a handspan:\n\n<div style=\"text-align: center; margin: 16px 0;\"><img src=\"/images/ch19/q4_hand.png\" alt=\"Handspan Measurement\" style=\"max-width: 160px; border: 1px solid #e2e8f0; border-radius: 8px; padding: 6px; background: white;\" /></div>\n\nDataset:\n<div style=\"background: #f1f5f9; padding: 12px; border-radius: 8px; font-weight: bold; text-align: center; margin: 16px 0; font-family: monospace; letter-spacing: 1px;\">\n  17, 18, 19, 17, 20, 18, 19, 21, 18, 19, 22, 20, 19, 18, 20, 19, 21, 17, 19, 18, 20, 19, 18, 20\n</div>\n\nAnalyze the dataset and select the correct option summarizing parts (a) to (e):\n* **a** Complete a frequency table of the results.\n* **b** What is the shortest length?\n* **c** What is the longest length?\n* **d** What is the most commonly occurring length?\n* **e** Determine the highest stack on a dot plot for this data.",
    "options": [
      "(a) Table: 17cm: 3, 18cm: 6, 19cm: 7, 20cm: 5, 21cm: 2, 22cm: 1. (b) Shortest: 17 cm. (c) Longest: 22 cm. (d) Mode: 19 cm. (e) Tallest stack is 19 cm with 7 dots.",
      "(a) Table: 17cm: 2, 18cm: 6, 19cm: 8, 20cm: 5, 21cm: 2, 22cm: 1. (b) Shortest: 17 cm. (c) Longest: 22 cm. (d) Mode: 19 cm. (e) Tallest stack is 19 cm with 8 dots.",
      "(a) Table: 17cm: 3, 18cm: 5, 19cm: 7, 20cm: 6, 21cm: 2, 22cm: 1. (b) Shortest: 18 cm. (c) Longest: 22 cm. (d) Mode: 20 cm. (e) Tallest stack is 20 cm with 6 dots.",
      "(a) Table: 17cm: 3, 18cm: 6, 19cm: 6, 20cm: 6, 21cm: 2, 22cm: 1. (b) Shortest: 17 cm. (c) Longest: 21 cm. (d) Mode: 18 cm. (e) Tallest stack is 18 cm with 6 dots."
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>Let's evaluate each part step-by-step from the given handspan dataset:</p><ul><li><strong>Part (a) Frequency Table:</strong> Counting the frequencies:<br /><ul><li><strong>17 cm:</strong> 3 occurrences</li><li><strong>18 cm:</strong> 6 occurrences</li><li><strong>19 cm:</strong> 7 occurrences</li><li><strong>20 cm:</strong> 5 occurrences</li><li><strong>21 cm:</strong> 2 occurrences</li><li><strong>22 cm:</strong> 1 occurrence</li></ul></li><li><strong>Part (b) Shortest Length:</strong> The minimum value in the dataset is exactly <strong>17 cm</strong>.</li><li><strong>Part (c) Longest Length:</strong> The maximum value in the dataset is exactly <strong>22 cm</strong>.</li><li><strong>Part (d) Most Common Length:</strong> The value with the highest frequency is **19 cm** (occurs 7 times).</li><li><strong>Part (e) Tallest Stack on Dot Plot:</strong> The stack corresponding to the mode (19 cm) is the tallest, containing exactly <strong>7 dots</strong>.</li></ul></div>",
    "createdAt": "2026-05-18T07:46:49.155Z"
  }
];

export const importYear7Ch19A = async (forceReset = false) => {
  console.log('[Ch19A Year 7 Import] STARTING PHYSICAL SYNC...');
  let importedCount = 0;
  try {
    const qRef = collection(db, 'questions');
    
    if (forceReset) {
      console.log('Force reset enabled. Deleting existing Y7 Ch19 (19a to 19f) questions...');
      const topicsToDelete = ['y7-19a', 'y7-19b', 'y7-19c', 'y7-19d', 'y7-19e', 'y7-19f'];
      for (const tId of topicsToDelete) {
        const existingSnap = await getDocs(query(qRef, where('topicId', '==', tId)));
        for (const doc of existingSnap.docs) {
          await deleteDoc(doc.ref);
        }
      }
      console.log('Deleted existing Ch19 topic questions.');
    }

    const existingQuestions = new Set();
    const topicsToCheck = ['y7-19a', 'y7-19b', 'y7-19c', 'y7-19d', 'y7-19e', 'y7-19f'];
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
    console.log('[Ch19A Year 7 Import] SUCCESS! ' + importedCount + ' new questions imported.');
    return importedCount;
  } catch (error) {
    console.error('[Ch19A Year 7 Import] ERROR:', error);
    return 0;
  }
};
