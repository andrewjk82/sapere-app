import { useEffect, useState } from 'react';

// How a worksheet + notepad screen splits: 'side' (side by side), 'stack' (worksheet on top,
// notes below — a tablet held upright) or 'tabs' (phone: one pane at a time).
export const STACK_MIN_WIDTH = 600;

export const splitLayoutFor = (width, height, sideMin) => {
  if (height > width && width >= STACK_MIN_WIDTH) return 'stack';
  if (width >= sideMin) return 'side';
  return 'tabs';
};

const current = (sideMin) => (typeof window === 'undefined'
  ? 'side'
  : splitLayoutFor(window.innerWidth, window.innerHeight, sideMin));

export const useSplitLayout = (sideMin) => {
  const [layout, setLayout] = useState(() => current(sideMin));
  useEffect(() => {
    const update = () => setLayout(current(sideMin));
    update();
    window.addEventListener('resize', update);
    window.addEventListener('orientationchange', update);
    return () => {
      window.removeEventListener('resize', update);
      window.removeEventListener('orientationchange', update);
    };
  }, [sideMin]);
  return layout;
};

// Divider drag → the first pane's share (0.25–0.75) of the container, across or down.
export const splitFraction = (rect, point, layout) => {
  const raw = layout === 'stack'
    ? (point.y - rect.top) / rect.height
    : (point.x - rect.left) / rect.width;
  return Math.min(0.75, Math.max(0.25, raw));
};
