const fs = require('fs');
const file = 'src/components/challenge/SecretNoteView.jsx';
let content = fs.readFileSync(file, 'utf8');

const importAdd = `import { collection, doc, getDoc } from "firebase/firestore";`;
if (!content.includes('getDoc')) {
  content = content.replace('import { collection, addDoc, serverTimestamp, doc, setDoc, increment } from \'firebase/firestore\';', 'import { collection, addDoc, serverTimestamp, doc, setDoc, increment, getDoc } from \'firebase/firestore\';');
}

const effectCode = `
  const [liveQueue, setLiveQueue] = useState(null);

  useEffect(() => {
    if (queue.length > 0 && !liveQueue) {
      let isMounted = true;
      const fetchLive = async () => {
        const qRef = collection(db, "questions");
        const live = await Promise.all(
          queue.map(async (item) => {
            const q = item.question;
            if (!q || !q.id) return item;
            try {
              const snap = await getDoc(doc(qRef, q.id));
              if (snap.exists()) {
                const data = snap.data();
                return {
                  ...item,
                  question: {
                    ...q,
                    solution: data.solution !== undefined ? data.solution : q.solution,
                    solutionSteps: data.solutionSteps !== undefined ? data.solutionSteps : q.solutionSteps,
                    hint: data.hint !== undefined ? data.hint : q.hint,
                    question: data.question !== undefined ? data.question : q.question,
                    answer: data.answer !== undefined ? data.answer : q.answer,
                    subQuestions: data.subQuestions !== undefined ? data.subQuestions : q.subQuestions,
                    graphData: data.graphData !== undefined ? data.graphData : q.graphData,
                  }
                };
              }
            } catch (err) {
              console.warn("Failed to fetch live question:", q.id, err);
            }
            return item;
          })
        );
        if (isMounted) setLiveQueue(live);
      };
      fetchLive();
    }
  }, [queue]);

  const activeQueue = liveQueue || queue;
  const item = activeQueue[idx] || null;
`;

content = content.replace(/  const item = queue\[idx\] \|\| null;/, effectCode);
content = content.replace(/setPhase\(queue\.length === 0 \? 'empty' : 'solve'\);/g, "setPhase(queue.length === 0 ? 'empty' : 'solve');");

fs.writeFileSync(file, content);
