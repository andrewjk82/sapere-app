import {
  collection,
  doc,
  getDoc,
  getDocs,
  orderBy,
  query,
  setDoc,
  serverTimestamp,
  Timestamp,
  where,
} from "firebase/firestore";
import { db } from "../firebase/config";

const CACHE_VERSION = 1;

const getCacheKey = (collectionName, studentId) =>
  `sapere:hsc-results:v${CACHE_VERSION}:${collectionName}:${studentId}`;

const getMetaId = (collectionName, studentId) => `hsc_${collectionName}_${studentId}`;

const getMetaVersion = (data) =>
  Number(data?.version || data?.updatedAt?.toMillis?.() || 0);

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
    return { records: [], lastSyncMs: 0, metaVersion: 0 };
  }
  try {
    const raw = window.localStorage.getItem(getCacheKey(collectionName, studentId));
    if (!raw) return { records: [], lastSyncMs: 0, metaVersion: 0 };
    const parsed = JSON.parse(raw);
    return {
      records: Array.isArray(parsed.records) ? parsed.records.filter((r) => !r.isDeleted) : [],
      lastSyncMs: Number(parsed.lastSyncMs || 0),
      metaVersion: Number(parsed.metaVersion || 0),
    };
  } catch {
    return { records: [], lastSyncMs: 0, metaVersion: 0 };
  }
};

export const saveCachedHscResults = (collectionName, studentId, records, lastSyncMs, metaVersion = 0) => {
  if (typeof window === "undefined" || !studentId) return;
  try {
    window.localStorage.setItem(
      getCacheKey(collectionName, studentId),
      JSON.stringify({
        lastSyncMs,
        metaVersion,
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
  const metaSnap = await getDoc(doc(db, "sync_meta", getMetaId(collectionName, studentId)));
  const remoteVersion = getMetaVersion(metaSnap.data());
  if (cached.records.length > 0 && cached.metaVersion === remoteVersion && remoteVersion > 0) {
    return { records: cached.records, fromCache: true, fetchedCount: 0 };
  }
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
  const version = remoteVersion || Date.now();
  if (!remoteVersion) {
    await setDoc(doc(db, "sync_meta", getMetaId(collectionName, studentId)), {
      version,
      updatedAt: serverTimestamp(),
    }, { merge: true }).catch(() => {});
  }
  saveCachedHscResults(collectionName, studentId, merged, newestIncomingMs || Date.now(), version);
  return { records: merged, fromCache: cached.records.length > 0, fetchedCount: incoming.length };
};

export const touchHscResultsSyncMeta = async (collectionName, studentId) => {
  if (!collectionName || !studentId) return;
  await setDoc(doc(db, "sync_meta", getMetaId(collectionName, studentId)), {
    version: Date.now(),
    updatedAt: serverTimestamp(),
  }, { merge: true });
};
