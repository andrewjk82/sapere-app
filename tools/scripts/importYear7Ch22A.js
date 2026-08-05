import { db } from '../firebase/config.js';
import { collection, addDoc, getDocs, query, where, deleteDoc } from 'firebase/firestore';

export const allQuestions = [
  {
    "id": "7BGQVE7o8pj3MmMx83gS",
    "chapterId": "y7-22",
    "chapterTitle": "Sets and Venn diagrams",
    "topicId": "y7-22a",
    "topicCode": "22A",
    "topicTitle": "Describing and naming sets",
    "isManual": true,
    "title": "Question 4",
    "difficulty": "easy",
    "timeLimit": 60,
    "questionImage": "",
    "solution": "",
    "hint": "",
    "createdAt": {
      "_seconds": 1777982754,
      "_nanoseconds": 592000000
    },
    "answer": "3",
    "options": [
      {
        "text": "\\(-18.24.30.36\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(19.24.30.36\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(63.03.42.81\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(18.24.30.36\\)",
        "imageUrl": ""
      }
    ],
    "type": "multiple_choice",
    "requiresManualGrading": false,
    "updatedAt": {
      "_seconds": 1784357706,
      "_nanoseconds": 5000000
    },
    "solutionSteps": [
      {
        "explanation": "Read the question carefully. Focus on what is required (for example: evaluate, simplify, convert, or list). Relevant detail: List the elements {multiples of 6 between 10 and 40} in ascending order$\\\\$\nex) .",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "Apply the correct Year 7 method: substitute values, convert units or forms, expand or simplify algebra, or list set elements in order as asked.",
        "workingOut": "\\(18.24.30.36\\)",
        "graphData": null
      },
      {
        "explanation": "Check the result is simplified and matches one of the four options exactly.",
        "workingOut": "\\(18.24.30.36\\)",
        "graphData": null
      }
    ],
    "isNew": false,
    "question": "List the elements {multiples of 6 between 10 and 40} in ascending order<br />\nex) 1,2,3 without space."
  },
  {
    "id": "8LZ8gHkGd3moFrEQCZGN",
    "chapterId": "y7-22",
    "chapterTitle": "Sets and Venn diagrams",
    "topicId": "y7-22a",
    "topicCode": "22A",
    "topicTitle": "Describing and naming sets",
    "isManual": true,
    "title": "Question 1",
    "difficulty": "easy",
    "timeLimit": 60,
    "questionImage": "",
    "hint": "",
    "createdAt": {
      "_seconds": 1777982167,
      "_nanoseconds": 265000000
    },
    "answer": "2",
    "solution": "Odd number is 1,2,3...\\(\\\\\\)\nIn {0,1,2,3,4,5,6,7,8,9,10,11,12}\\(\\\\\\)\n{1,3,5,7,9.11} These number are only odd number.",
    "options": [
      {
        "text": "\\(-1,3,5,7,9,11\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(2,3,5,7,9,11\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(1,3,5,7,9,11\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(11,9,7,5,3,1\\)",
        "imageUrl": ""
      }
    ],
    "type": "multiple_choice",
    "requiresManualGrading": false,
    "updatedAt": {
      "_seconds": 1784357706,
      "_nanoseconds": 5000000
    },
    "isNew": false,
    "solutionSteps": [
      {
        "explanation": "Identify what the question is asking and note the given information. Choose the appropriate method (calculate, simplify, convert, or list elements).",
        "workingOut": "Odd number is 1,2,3...<br />\nIn {0,1,2,3,4,5,6,7,8,9,10,11,12}<br />\n{1,3,5,7,9.11} These number are only odd number.",
        "graphData": null
      },
      {
        "explanation": "Carry out the calculation or algebraic rearrangement step by step. Watch signs, place value, and order of operations.",
        "workingOut": "Odd number is 1,2,3...<br />\nIn {0,1,2,3,4,5,6,7,8,9,10,11,12}<br />\n{1,3,5,7,9.11} These number are only odd number.",
        "graphData": null
      },
      {
        "explanation": "State the final simplified answer and match it to the correct option.",
        "workingOut": "\\(1,3,5,7,9,11\\)",
        "graphData": null
      }
    ],
    "question": "List the elements of {odd whole numbers between 0 and 12} in ascending order<br />\nex) 1,2,3"
  },
  {
    "id": "AzFRPzaEQQsRpx6BWd3M",
    "chapterId": "y7-22",
    "chapterTitle": "Sets and Venn diagrams",
    "topicId": "y7-22a",
    "topicCode": "22A",
    "topicTitle": "Describing and naming sets",
    "isManual": true,
    "title": "Question 6",
    "difficulty": "easy",
    "timeLimit": 60,
    "questionImage": "",
    "solution": "",
    "createdAt": {
      "_seconds": 1777982949,
      "_nanoseconds": 583000000
    },
    "hint": "Square number is the number multiply by itself.",
    "answer": "1",
    "options": [
      {
        "text": "\\(-1,4,9,16,25,36,49\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(1,4,9,16,25,36,49\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(2,4,9,16,25,36,49\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(94,63,52,61,9,4,1\\)",
        "imageUrl": ""
      }
    ],
    "type": "multiple_choice",
    "requiresManualGrading": false,
    "updatedAt": {
      "_seconds": 1784357706,
      "_nanoseconds": 5000000
    },
    "solutionSteps": [
      {
        "explanation": "Read the question carefully. Focus on what is required (for example: evaluate, simplify, convert, or list). Relevant detail: List the elements {perfect squares less than 50} in ascending order$\\\\$\nex)1,2,3.",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "Apply the correct Year 7 method: substitute values, convert units or forms, expand or simplify algebra, or list set elements in order as asked.",
        "workingOut": "\\(1,4,9,16,25,36,49\\)",
        "graphData": null
      },
      {
        "explanation": "Check the result is simplified and matches one of the four options exactly.",
        "workingOut": "\\(1,4,9,16,25,36,49\\)",
        "graphData": null
      }
    ],
    "isNew": false,
    "question": "List the elements {perfect squares less than 50} in ascending order<br />\nex)1,2,3 without space."
  },
  {
    "id": "XDSBqLiQC431NkIxJFW2",
    "chapterId": "y7-22",
    "chapterTitle": "Sets and Venn diagrams",
    "topicId": "y7-22a",
    "topicCode": "22A",
    "topicTitle": "Describing and naming sets",
    "isManual": true,
    "title": "Question 5",
    "difficulty": "easy",
    "timeLimit": 60,
    "questionImage": "",
    "solution": "",
    "hint": "",
    "createdAt": {
      "_seconds": 1777982810,
      "_nanoseconds": 542000000
    },
    "answer": "0",
    "options": [
      {
        "text": "\\(14,21,28,35\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-14,21,28,35\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(15,21,28,35\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(53,82,12,41\\)",
        "imageUrl": ""
      }
    ],
    "isNew": true,
    "type": "multiple_choice",
    "requiresManualGrading": false,
    "updatedAt": {
      "_seconds": 1784357706,
      "_nanoseconds": 5000000
    },
    "solutionSteps": [
      {
        "explanation": "Read the question carefully. Focus on what is required (for example: evaluate, simplify, convert, or list). Relevant detail: List the elements {multiples of 7 between 10 and 40} in ascending order$\\\\$\nex)1.",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "Apply the correct Year 7 method: substitute values, convert units or forms, expand or simplify algebra, or list set elements in order as asked.",
        "workingOut": "\\(14,21,28,35\\)",
        "graphData": null
      },
      {
        "explanation": "Check the result is simplified and matches one of the four options exactly.",
        "workingOut": "\\(14,21,28,35\\)",
        "graphData": null
      }
    ],
    "question": "List the elements {multiples of 7 between 10 and 40} in ascending order<br />\nex)1,2,3 without space."
  },
  {
    "id": "i9KgZsTNFMWwSsfkU1qR",
    "chapterId": "y7-22",
    "chapterTitle": "Sets and Venn diagrams",
    "topicId": "y7-22a",
    "topicCode": "22A",
    "topicTitle": "Describing and naming sets",
    "isManual": true,
    "title": "Question 2",
    "difficulty": "easy",
    "timeLimit": 60,
    "questionImage": "",
    "solution": "N/A",
    "hint": "Try to write the numbers.",
    "createdAt": {
      "_seconds": 1777982307,
      "_nanoseconds": 390000000
    },
    "answer": "0",
    "options": [
      {
        "text": "\\(13,23,33,43,53,63,73,83,93\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-13,23,33,43,53,63,73,83,93\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(14,23,33,43,53,63,73,83,93\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(39,38,37,36,35,34,33,32,31\\)",
        "imageUrl": ""
      }
    ],
    "isNew": true,
    "type": "multiple_choice",
    "requiresManualGrading": false,
    "updatedAt": {
      "_seconds": 1784357706,
      "_nanoseconds": 5000000
    },
    "solutionSteps": [
      {
        "explanation": "Identify what the question is asking and note the given information. Choose the appropriate method (calculate, simplify, convert, or list elements).",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "Carry out the calculation or algebraic rearrangement step by step. Watch signs, place value, and order of operations.",
        "workingOut": "\\(N/A\\)",
        "graphData": null
      },
      {
        "explanation": "State the final simplified answer and match it to the correct option.",
        "workingOut": "\\(13,23,33,43,53,63,73,83,93\\)",
        "graphData": null
      }
    ],
    "question": "List the elements of {two digit numbers ending with 3} in ascending order<br />\nex) 1,2,3 i"
  },
  {
    "id": "mbHEpWsILBdaUorEyUiB",
    "chapterId": "y7-22",
    "chapterTitle": "Sets and Venn diagrams",
    "topicId": "y7-22a",
    "topicCode": "22A",
    "topicTitle": "Describing and naming sets",
    "isManual": true,
    "title": "Question 7",
    "difficulty": "easy",
    "timeLimit": 60,
    "questionImage": "",
    "solution": "",
    "hint": "",
    "createdAt": {
      "_seconds": 1777983171,
      "_nanoseconds": 399000000
    },
    "answer": "0",
    "options": [
      {
        "text": "\\(2,3,7,11,13,17,19,23,29\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-2,3,7,11,13,17,19,23,29\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(3,3,7,11,13,17,19,23,29\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(92,32,91,71,31,11,7,3,2\\)",
        "imageUrl": ""
      }
    ],
    "isNew": true,
    "type": "multiple_choice",
    "requiresManualGrading": false,
    "updatedAt": {
      "_seconds": 1784357706,
      "_nanoseconds": 5000000
    },
    "solutionSteps": [
      {
        "explanation": "Read the question carefully. Focus on what is required (for example: evaluate, simplify, convert, or list). Relevant detail: List the elements {prime numbers less than 30} in ascending order.$\\\\$\nex)1,2,3 .",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "Apply the correct Year 7 method: substitute values, convert units or forms, expand or simplify algebra, or list set elements in order as asked.",
        "workingOut": "\\(2,3,7,11,13,17,19,23,29\\)",
        "graphData": null
      },
      {
        "explanation": "Check the result is simplified and matches one of the four options exactly.",
        "workingOut": "\\(2,3,7,11,13,17,19,23,29\\)",
        "graphData": null
      }
    ],
    "question": "List the elements {prime numbers less than 30} in ascending order.<br />\nex)1,2,3 without space."
  },
  {
    "id": "sEtjIuBLYbi4GTcttU5S",
    "chapterId": "y7-22",
    "chapterTitle": "Sets and Venn diagrams",
    "topicId": "y7-22a",
    "topicCode": "22A",
    "topicTitle": "Describing and naming sets",
    "isManual": true,
    "title": "Question 3",
    "difficulty": "easy",
    "timeLimit": 60,
    "questionImage": "",
    "solution": "N/A",
    "hint": "",
    "createdAt": {
      "_seconds": 1777982474,
      "_nanoseconds": 578000000
    },
    "answer": "3",
    "options": [
      {
        "text": "\\(-January,Febuary,May,July,\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(,yluJ,yaM,yraubeF,yraunaJ\\)",
        "imageUrl": ""
      },
      {
        "text": "January, Febuary, May, July",
        "imageUrl": ""
      },
      {
        "text": "\\(January,Febuary,May,July,\\)",
        "imageUrl": ""
      }
    ],
    "isNew": true,
    "type": "multiple_choice",
    "requiresManualGrading": false,
    "updatedAt": {
      "_seconds": 1784357706,
      "_nanoseconds": 5000000
    },
    "solutionSteps": [
      {
        "explanation": "Identify what the question is asking and note the given information. Choose the appropriate method (calculate, simplify, convert, or list elements).",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "Carry out the calculation or algebraic rearrangement step by step. Watch signs, place value, and order of operations.",
        "workingOut": "\\(N/A\\)",
        "graphData": null
      },
      {
        "explanation": "State the final simplified answer and match it to the correct option.",
        "workingOut": "\\(January,Febuary,May,July,\\)",
        "graphData": null
      }
    ],
    "question": "List the elements {the set of months ending in y} in ascending order<br />\nex) May,June,July (without space.)"
  }
];

export const importYear7Ch22A = async (forceReset = false) => {
  console.log('[Ch22A Year 7 Import] STARTING PHYSICAL SYNC...');
  let importedCount = 0;
  try {
    const qRef = collection(db, 'questions');
    
    if (forceReset) {
      console.log('Force reset enabled. Deleting existing Y7 Ch22 (22a) questions...');
      const topicsToDelete = ['y7-22a'];
      for (const tId of topicsToDelete) {
        const existingSnap = await getDocs(query(qRef, where('topicId', '==', tId)));
        for (const doc of existingSnap.docs) {
          await deleteDoc(doc.ref);
        }
      }
      console.log('Deleted existing Ch22 topic questions.');
    }

    const existingQuestions = new Set();
    const topicsToCheck = ['y7-22a'];
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
    console.log('[Ch22A Year 7 Import] SUCCESS! ' + importedCount + ' new questions imported.');
    return importedCount;
  } catch (error) {
    console.error('[Ch22A Year 7 Import] ERROR:', error);
    return 0;
  }
};
