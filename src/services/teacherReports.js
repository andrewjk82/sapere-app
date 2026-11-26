import { collection, limit, orderBy, query } from 'firebase/firestore';
import { db } from '../firebase/config';
import { subscribeLive, resetLive } from './liveQueries';

const KEY = 'reports:latest';
const LIMIT = 100;

/** The latest student reports (open and resolved), live. */
export const subscribeReports = (onData, onError) => subscribeLive(
  KEY, () => query(collection(db, 'reports'), orderBy('createdAt', 'desc'), limit(LIMIT)), onData, onError,
);

export const resetReports = () => resetLive(KEY);
