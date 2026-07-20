import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

const questionsToUpdate = [
  {
    "id": "fortst2020-q7",
    "type": "teacher_review",
    "question": "Two box-and-whisker plots show tree heights (m): Central Park and East Park. Compare and contrast the two data sets by shape/skewness, location and spread.",
    "opts": [],
    "options": [],
    "a": 0,
    "answer": "Central Park is symmetric with a higher median (approx 7.5 vs approx 4) and smaller range/spread; East Park is positively skewed with a much larger range, so its heights are more spread out and less consistent.",
    "solutionSteps": [
      {
        "explanation": "Compare the shape and skewness. Central Park's box and whiskers are balanced about the median (symmetric); East Park has a long right whisker (positively skewed).",
        "workingOut": "\\\\text{Central: symmetric}; \\\\quad \\\\text{East: positively skewed}"
      },
      {
        "explanation": "Compare location using the medians. Central Park's median is about \\\\(7.5\\\\) m, East Park's about \\\\(4\\\\) m, so Central Park's trees are typically taller.",
        "workingOut": "\\\\text{median}_C \\\\approx 7.5 > \\\\text{median}_E \\\\approx 4"
      },
      {
        "explanation": "Compare spread using the range (and IQR). East Park's range is much larger.",
        "workingOut": "\\\\text{range}_E \\\\approx 16 > \\\\text{range}_C \\\\approx 6"
      },
      {
        "explanation": "Interpret in context: East Park's heights are more spread out and less consistent; half of East Park's trees are shorter than the shortest tree in Central Park.",
        "workingOut": "\\\\text{East Park: more variable, generally shorter trees}"
      }
    ]
  },
  {
    "id": "fortst2020s-q7",
    "type": "teacher_review",
    "question": "Two box-and-whisker plots show fish lengths (cm): Riverside and Lakeside. Compare and contrast the two data sets by shape/skewness, location and spread.",
    "opts": [],
    "options": [],
    "a": 0,
    "answer": "Riverside is symmetric with a higher median (approx 8 vs approx 5) and smaller spread; Lakeside is positively skewed with a much larger range, so its lengths are more spread out and less consistent.",
    "solutionSteps": [
      {
        "explanation": "Compare shape and skewness.",
        "workingOut": "\\\\text{Riverside: symmetric}; \\\\quad \\\\text{Lakeside: positively skewed}"
      },
      {
        "explanation": "Compare location using the medians.",
        "workingOut": "\\\\text{median}_R \\\\approx 8 > \\\\text{median}_L \\\\approx 5"
      },
      {
        "explanation": "Compare spread using the range.",
        "workingOut": "\\\\text{range}_L \\\\approx 17 > \\\\text{range}_R \\\\approx 7"
      },
      {
        "explanation": "Interpret: Lakeside fish lengths are more variable and generally smaller.",
        "workingOut": "\\\\text{Lakeside: more spread out, less consistent}"
      }
    ]
  }
];

async function main() {
  console.log('Starting Firestore update for Year12 Advanced Ch9A teacher_review questions...');
  for (const q of questionsToUpdate) {
    const docRef = db.doc(`questions/${q.id}`);
    await docRef.update({
      type: q.type,
      question: q.question,
      opts: q.opts,
      options: q.opts,
      a: q.a,
      answer: q.answer,
      solutionSteps: q.solutionSteps,
      isNew: true
    });
    console.log(`Successfully updated ${q.id}`);
  }
  console.log('Update complete!');
  process.exit(0);
}

main().catch(err => {
  console.error('Update failed:', err);
  process.exit(1);
});
