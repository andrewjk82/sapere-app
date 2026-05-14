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
    try {
      window.localStorage.setItem(`${CACHE_PREFIX}:${key}`, safeStringify(value));
    } catch {
      // Cache only; Firebase remains the source of truth.
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
