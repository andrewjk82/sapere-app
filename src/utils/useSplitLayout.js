import { useCallback, useEffect, useState } from 'react';

// How a worksheet + notepad screen splits: 'side' (side by side), 'stack' (worksheet on top,
// notes below) or 'tabs' (a phone: one pane at a time). The student picks side / stack with a
// button, remembered on this device separately for upright and sideways, and drags the divider
// to set the share, also remembered (per layout).
//
// Tabs are for phones only, upright or sideways. That is decided by the device's screen, not the window: a
// tablet in a small window (Split View, Stage Manager) is still a tablet. Phones top out around 480 on their
// short side and small tablets start around 533.
export const PHONE_MAX_SHORT_SIDE = 520;
const CHOICE_KEY = 'sapere:splitLayout:v1';
const RATIO_KEY = 'sapere:splitRatio:v1';
const DEFAULT_CHOICE = { portrait: 'stack', landscape: 'side' };

export const orientationOf = (width, height) => (height > width ? 'portrait' : 'landscape');

const isPhoneScreen = (screenSize) => Math.min(screenSize.w, screenSize.h) < PHONE_MAX_SHORT_SIDE;

// `choice` is { portrait, landscape } (missing → default). `screenSize` is the device's screen; it defaults to
// the window for callers without one.
export const splitLayoutFor = (width, height, choice = DEFAULT_CHOICE, screenSize = { w: width, h: height }) => {
  if (isPhoneScreen(screenSize)) return 'tabs';
  const picked = (choice || {})[orientationOf(width, height)];
  return picked === 'side' || picked === 'stack' ? picked : DEFAULT_CHOICE[orientationOf(width, height)];
};

export const clampSplit = (value) => (Number.isFinite(value) ? Math.min(0.8, Math.max(0.2, value)) : 0.5);

// Divider drag → the first pane's share of the container, across or down.
export const splitFraction = (rect, point, layout) => clampSplit(layout === 'stack'
  ? (point.y - rect.top) / rect.height
  : (point.x - rect.left) / rect.width);

const readJson = (key) => {
  try { const v = JSON.parse(globalThis.localStorage?.getItem(key)); return v && typeof v === 'object' ? v : {}; } catch { return {}; }
};
const writeJson = (key, value) => {
  try { globalThis.localStorage?.setItem(key, JSON.stringify(value)); } catch { /* private mode: not remembered */ }
};
const viewport = () => (typeof window === 'undefined' ? { w: 1200, h: 800 } : { w: window.innerWidth, h: window.innerHeight });
const deviceScreen = () => {
  const s = typeof window === 'undefined' ? null : window.screen;
  return s?.width > 0 && s?.height > 0 ? { w: s.width, h: s.height } : viewport();
};

export const useSplitLayout = () => {
  const [size, setSize] = useState(viewport);
  const [choice, setChoiceState] = useState(() => ({ ...DEFAULT_CHOICE, ...readJson(CHOICE_KEY) }));
  const [ratios, setRatios] = useState(() => readJson(RATIO_KEY));
  useEffect(() => {
    const update = () => setSize((prev) => { const next = viewport(); return prev.w === next.w && prev.h === next.h ? prev : next; });
    // Coming back to the app (iPad: from another app / the home screen) may not fire `resize`, which left the
    // layout on the old orientation: measure again whenever the page is shown or focused.
    const onVisible = () => { if (document.visibilityState === 'visible') update(); };
    window.addEventListener('resize', update);
    window.addEventListener('orientationchange', update);
    window.addEventListener('pageshow', update);
    window.addEventListener('focus', update);
    document.addEventListener('visibilitychange', onVisible);
    return () => {
      window.removeEventListener('resize', update);
      window.removeEventListener('orientationchange', update);
      window.removeEventListener('pageshow', update);
      window.removeEventListener('focus', update);
      document.removeEventListener('visibilitychange', onVisible);
    };
  }, []);
  const layout = splitLayoutFor(size.w, size.h, choice, deviceScreen());
  const setLayoutChoice = useCallback((next) => {
    // The orientation is read at the tap, not from state: a stale one would save the choice for the other
    // orientation and the button would seem to do nothing.
    const now = viewport();
    const current = orientationOf(now.w, now.h);
    setSize((prev) => (prev.w === now.w && prev.h === now.h ? prev : now));
    setChoiceState((prev) => {
      const merged = { ...prev, [current]: next };
      writeJson(CHOICE_KEY, merged);
      return merged;
    });
  }, []);
  const split = clampSplit(ratios[layout]);
  // `persist` false while dragging (state only), true on release (also saved).
  const setSplit = useCallback((value, persist = false) => {
    setRatios((prev) => {
      const next = { ...prev, [layout]: clampSplit(value) };
      if (persist) writeJson(RATIO_KEY, next);
      return next;
    });
  }, [layout]);
  return { layout, canChoose: layout !== 'tabs', setLayoutChoice, split, setSplit };
};
