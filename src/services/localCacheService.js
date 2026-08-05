const CACHE_PREFIX = "sapere-cache";

const safeStringify = (value) =>
  JSON.stringify(value, (_key, current) => {
    if (current && typeof current === "object" && typeof current.toMillis === "function") {
      return { __type: "timestamp", millis: current.toMillis() };
    }
    return current;
  });

const safeParse = (raw) => {
  if (!raw) return null;
  return JSON.parse(raw);
};

export const localCache = {
  get(key) {
    if (typeof window === "undefined") return null;
    try {
      return safeParse(window.localStorage.getItem(`${CACHE_PREFIX}:${key}`));
    } catch {
      return null;
    }
  },

  set(key, value) {
    if (typeof window === "undefined") return;
    const fullKey = `${CACHE_PREFIX}:${key}`;
    const serialized = safeStringify(value);
    try {
      window.localStorage.setItem(fullKey, serialized);
    } catch (err) {
      // QuotaExceededError: localStorage is full. This cache has no TTL/
      // eviction of its own and 40+ call sites write to it, so on a device
      // used for a long time it can fill the origin's whole quota — which
      // then makes Firestore's own persistentMultipleTabManager (also
      // localStorage-backed) throw an uncaught internal assertion elsewhere
      // (2026-08 iPad report: Challenge/SecretNote stuck, traced to this).
      // Drop every OTHER key this service owns and retry once. Safe to
      // drop — this is a cache only, Firebase remains the source of truth.
      if (err?.name === "QuotaExceededError" || err?.code === 22) {
        try {
          Object.keys(window.localStorage)
            .filter((k) => k.startsWith(`${CACHE_PREFIX}:`) && k !== fullKey)
            .forEach((k) => window.localStorage.removeItem(k));
          window.localStorage.setItem(fullKey, serialized);
        } catch {
          // Still failing (quota genuinely exhausted by other origins/data,
          // or storage unavailable) — give up silently, cache only.
        }
      }
    }
  },

  remove(key) {
    if (typeof window === "undefined") return;
    try {
      window.localStorage.removeItem(`${CACHE_PREFIX}:${key}`);
    } catch {
      // Cache only.
    }
  },
};
