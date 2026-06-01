const fs = require('fs');
const file = 'src/components/studentDetail/ChallengeDetailModal.jsx';
let content = fs.readFileSync(file, 'utf8');

const importAdd = `import { useState, useEffect } from "react";
import { collection, doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/config";`;
content = content.replace('import { useState } from "react";', importAdd);

const effectCode = `
  const hasQuestions =
    Array.isArray(selectedChallenge.questions) &&
    selectedChallenge.questions.length > 0;

  const [liveQuestions, setLiveQuestions] = useState(null);

  useEffect(() => {
    if (hasQuestions && !liveQuestions) {
      let isMounted = true;
      const fetchLive = async () => {
        const qRef = collection(db, "questions");
        const live = await Promise.all(
          selectedChallenge.questions.map(async (q) => {
            if (!q.id) return q;
            try {
              const snap = await getDoc(doc(qRef, q.id));
              if (snap.exists()) {
                const data = snap.data();
                return {
                  ...q,
                  solution: data.solution !== undefined ? data.solution : q.solution,
                  solutionSteps: data.solutionSteps !== undefined ? data.solutionSteps : q.solutionSteps,
                  hint: data.hint !== undefined ? data.hint : q.hint,
                  question: data.question !== undefined ? data.question : q.question,
                  answer: data.answer !== undefined ? data.answer : q.answer,
                  subQuestions: data.subQuestions !== undefined ? data.subQuestions : q.subQuestions,
                  graphData: data.graphData !== undefined ? data.graphData : q.graphData,
                };
              }
            } catch (err) {
              console.warn("Failed to fetch live question:", q.id, err);
            }
            return q;
          })
        );
        if (isMounted) setLiveQuestions(live);
      };
      fetchLive();
    }
  }, [hasQuestions, selectedChallenge.questions]);

  // Loading state — snapshot not yet fetched or live questions not yet fetched
  const isLoading =
    (selectedChallenge.hasDetailSnapshot &&
    !selectedChallenge.detailSnapshotLoaded &&
    !hasQuestions) || (hasQuestions && !liveQuestions);
`;

content = content.replace(/  \/\/ Loading state — snapshot not yet fetched[\s\S]*?selectedChallenge\.questions\.length > 0\n    \);/, effectCode);

content = content.replace(/const questions = selectedChallenge\.questions \|\| \[\];/, 'const questions = liveQuestions || selectedChallenge.questions || [];');

fs.writeFileSync(file, content);
