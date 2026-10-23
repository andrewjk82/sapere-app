// Rejects with an Error('timeout') if `promise` has not settled within `ms`. The original promise keeps running (a
// late result is simply ignored by the caller). Used so a screen never waits forever on a Firestore read that gets no
// answer (offline / blocked network / a stuck local cache): it falls back to what it already has instead.
export const TIMEOUT_MESSAGE = 'timeout';

export const withTimeout = (promise, ms = 8000) => new Promise((resolve, reject) => {
  const timer = setTimeout(() => reject(new Error(TIMEOUT_MESSAGE)), ms);
  Promise.resolve(promise).then(
    (value) => { clearTimeout(timer); resolve(value); },
    (error) => { clearTimeout(timer); reject(error); },
  );
});
