import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

const updates = {
  // Q1
  "06pY1NsSVeW4XUdWAlcZ": {
    opts: ["$2.50", "$2.00", "$3.00", "$4.00"],
    question: "A shop sells two types of pens. 3 of type A and 5 of type B cost $21. 6 of type A and 2 of type B cost $18. Find the cost of type B."
  },
  // Q4
  "8NEwwnDuTZEdFTLGQlxZ": {
    opts: ["$3.00", "$2.50", "$4.00", "$5.00"],
    question: "The total cost of 3 coffees and 2 muffins is $18. The cost of 2 coffees and 4 muffins is $20. Find the price of one coffee."
  },
  // Q8
  "lTJcPnhsovlRPajTNN01": {
    opts: ["12", "8", "10", "15"], // No dollar sign here
    question: "A piggy bank contains $5 and $10 notes. There are 20 notes in total, with a total value of $160. How many $10 notes are there?"
  },
  // Q13
  "VYQ3blOS2uUL71if0EJi": {
    opts: ["$3.00", "$2.50", "$4.00", "$5.00"],
    question: "The total cost of 3 coffees and 2 muffins is $18. The cost of 2 coffees and 4 muffins is $20. Find the price of one coffee."
  },
  // Q14
  "x7vWahsyVSiWDTlxLvHF": {
    opts: ["12", "8", "10", "15"], // No dollar sign here
    question: "A piggy bank contains $5 and $10 notes. There are 20 notes in total, with a total value of $160. How many $10 notes are there?"
  }
};

(async () => {
  try {
    console.log('[Dollar Escape Clean] Cleaning backslashes in options...');
    for (const [docId, update] of Object.entries(updates)) {
      const ref = db.collection('questions').doc(docId);
      await ref.update({
        opts: update.opts,
        options: update.opts,
        question: update.question
      });
      console.log(`  [CLEANED] ${docId}`);
    }
    console.log('\nAll dollar sign escapes successfully cleaned from Firestore.');
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();
