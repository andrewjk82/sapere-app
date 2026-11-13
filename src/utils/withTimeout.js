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

// Runs `start()` (which begins a fresh attempt each time) and, if an attempt gets no answer within `ms`, starts
// another — up to `tries` attempts. A Firestore read that stalls on weak Wi-Fi usually answers when asked again,
// whereas waiting on the stalled one never ends. Errors other than the timeout are passed straight through.
export const retryOnTimeout = async (start, { ms = 8000, tries = 2 } = {}) => {
  let lastError;
  for (let attempt = 0; attempt < tries; attempt += 1) {
    try {
      return await withTimeout(start(), ms);
    } catch (error) {
      if (error?.message !== TIMEOUT_MESSAGE) throw error;
      lastError = error;
    }
  }
  throw lastError;
};

// One run per key at a time: a second caller with the same key gets the run already under way instead of starting
// the same work again beside it. The entry is dropped as soon as the run settles, so a failed run can be retried.
export const shareInFlight = (map, key, run) => {
  if (map.has(key)) return map.get(key);
  const promise = Promise.resolve().then(run).finally(() => { if (map.get(key) === promise) map.delete(key); });
  map.set(key, promise);
  return promise;
};
