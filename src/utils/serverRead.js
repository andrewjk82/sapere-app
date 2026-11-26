import { onSnapshot } from 'firebase/firestore';
import { TIMEOUT_MESSAGE } from './withTimeout';

// The server's answer to a query or document, read through a short-lived listener. On the iPad home-screen app
// one-off getDocs / getDocsFromServer can stay unanswered while listeners keep working.
export const serverRead = (target, { ms = 15_000 } = {}) => new Promise((resolve, reject) => {
  let unsubscribe = () => {};
  const timer = setTimeout(() => { unsubscribe(); reject(new Error(TIMEOUT_MESSAGE)); }, ms);
  const stop = () => { clearTimeout(timer); unsubscribe(); };
  unsubscribe = onSnapshot(target, { includeMetadataChanges: true }, (snapshot) => {
    if (snapshot.metadata.fromCache) return;
    stop();
    resolve(snapshot);
  }, (error) => { stop(); reject(error); });
});
