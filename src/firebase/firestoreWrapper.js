import * as origFirestore from 'firebase/firestore';

const isTrafficLog = (arg) => {
  if (!arg) return false;
  const path = arg.path || (arg._query?.path?.segments?.join('/'));
  return path && path.includes('traffic_logs');
};

const getPageContext = () => {
  if (typeof window === 'undefined') return 'server';
  return window.location.pathname || 'root';
};

const getTracker = () => {
  if (typeof window !== 'undefined' && window.__sapereTrafficTracker) {
    return window.__sapereTrafficTracker;
  }
  return { trackRead: () => {}, trackWrite: () => {} };
};

// Re-export everything from the original firestore SDK
export * from 'firebase/firestore';

// Intercepted exports
export const getDoc = function (ref, ...args) {
  if (!isTrafficLog(ref)) {
    getTracker().trackRead(1, getPageContext());
  }
  return origFirestore.getDoc(ref, ...args);
};

export const getDocs = function (query, ...args) {
  if (!isTrafficLog(query)) {
    return origFirestore.getDocs(query, ...args).then((snap) => {
      const count = snap.size || 1;
      getTracker().trackRead(count, getPageContext());
      return snap;
    });
  }
  return origFirestore.getDocs(query, ...args);
};

export const setDoc = function (ref, data, ...args) {
  if (!isTrafficLog(ref)) {
    getTracker().trackWrite(1, getPageContext());
  }
  return origFirestore.setDoc(ref, data, ...args);
};

export const addDoc = function (ref, data, ...args) {
  if (!isTrafficLog(ref)) {
    getTracker().trackWrite(1, getPageContext());
  }
  return origFirestore.addDoc(ref, data, ...args);
};

export const updateDoc = function (ref, data, ...args) {
  if (!isTrafficLog(ref)) {
    getTracker().trackWrite(1, getPageContext());
  }
  return origFirestore.updateDoc(ref, data, ...args);
};

export const deleteDoc = function (ref, ...args) {
  if (!isTrafficLog(ref)) {
    getTracker().trackWrite(1, getPageContext());
  }
  return origFirestore.deleteDoc(ref, ...args);
};
