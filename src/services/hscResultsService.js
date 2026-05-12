import {
  collection,
  getDocs,
  orderBy,
  query,
  Timestamp,
  where,
} from "firebase/firestore";
import { db } from "../firebase/config";

const CACHE_VERSION = 1;

const getCacheKey = (collectionName, studentId) =>
  `sapere:hsc-results:v${CACHE_VERSION}:${collectionName}:${studentId}`;

const normalizeRecord = (record) => ({
  ...record,
  updatedAtMs:
    typeof record.updatedAt?.toMillis === "function"
      ? record.updatedAt.toMillis()
      : Number(record.updatedAtMs || 0),
  createdAtMs:
    typeof record.createdAt?.toMillis === "function"
      ? record.createdAt.toMillis()
      : Number(record.createdAtMs || 0),
});

export const loadCachedHscResults = (collectionName, studentId) => {
  if (typeof window === "undefined" || !studentId) {
    return { records: [], lastSyncMs: 0 };
  }
  try {
    const raw = window.localStorage.getItem(getCacheKey(collectionName, studentId));
    if (!raw) return { records: [], lastSyncMs: 0 };
    const parsed = JSON.parse(raw);
    return {
      records: Array.isArray(parsed.records) ? parsed.records.filter((r) => !r.isDeleted) : [],
      lastSyncMs: Number(parsed.lastSyncMs || 0),
    };
  } catch {
    return { records: [], lastSyncMs: 0 };
  }
};

export const saveCachedHscResults = (collectionName, studentId, records, lastSyncMs) => {
  if (typeof window === "undefined" || !studentId) return;
  try {
    window.localStorage.setItem(
      getCacheKey(collectionName, studentId),
      JSON.stringify({
        lastSyncMs,
        records: records.map((record) => ({
          ...record,
          updatedAt: undefined,
          createdAt: undefined,
        })),
      }),
    );
  } catch {
    // Cache is an optimization only; ignore storage quota/private-mode failures.
  }
};

export const mergeHscResults = (cachedRecords, incomingRecords) => {
  const byId = new Map();
  cachedRecords.forEach((record) => byId.set(record.id, record));
  incomingRecords.forEach((record) => {
    if (record.isDeleted) byId.delete(record.id);
    else byId.set(record.id, normalizeRecord(record));
  });
  return [...byId.values()]
    .filter((record) => !record.isDeleted)
    .sort((a, b) => String(b.examDate || "").localeCompare(String(a.examDate || "")));
};

export const fetchHscResultsIncremental = async (collectionName, studentId) => {
  const cached = loadCachedHscResults(collectionName, studentId);
  const baseRef = collection(db, collectionName, studentId, "hsc_results");
  const q = cached.lastSyncMs > 0
    ? query(baseRef, where("updatedAt", ">", Timestamp.fromMillis(cached.lastSyncMs)), orderBy("updatedAt", "asc"))
    : query(baseRef, orderBy("updatedAt", "asc"));
  const snap = await getDocs(q);
  const incoming = snap.docs.map((docSnapshot) =>
    normalizeRecord({ id: docSnapshot.id, ...docSnapshot.data() }),
  );
  const merged = mergeHscResults(cached.records, incoming);
  const newestIncomingMs = incoming.reduce(
    (latest, record) => Math.max(latest, Number(record.updatedAtMs || 0)),
    cached.lastSyncMs,
  );
  saveCachedHscResults(collectionName, studentId, merged, newestIncomingMs || Date.now());
  return { records: merged, fromCache: cached.records.length > 0, fetchedCount: incoming.length };
};
