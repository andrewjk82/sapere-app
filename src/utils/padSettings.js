// The notepad's pen settings (tool, ink colour, highlighter colour, line width, eraser mode), remembered on this
// device so the next question / page / visit starts with what the student last chose. Values are validated on
// the way in: anything unknown falls back to the default.

const KEY = 'sapere:padSettings:v1';
export const INK_COLORS = ['#1e1b4b', '#4b5563', '#ef4444', '#2563eb', '#16a34a', '#7c3aed'];
export const HIGHLIGHTER_VALUES = [
  'rgba(255, 224, 130, 0.48)', 'rgba(255, 183, 197, 0.48)', 'rgba(166, 226, 190, 0.48)',
  'rgba(160, 210, 255, 0.48)', 'rgba(207, 180, 255, 0.48)',
];
// Only drawing tools come back: starting a new question on the eraser or the lasso would be a surprise.
export const REMEMBERED_TOOLS = ['pen', 'ballpoint', 'highlighter', 'line', 'rectangle', 'circle'];
export const WIDTHS = [1, 2, 3, 4, 5];

export const DEFAULT_PAD_SETTINGS = {
  tool: 'pen', eraserMode: 'area', color: INK_COLORS[0], highlighter: HIGHLIGHTER_VALUES[0], width: 3,
};

export const cleanPadSettings = (raw) => {
  const d = DEFAULT_PAD_SETTINGS;
  const s = raw && typeof raw === 'object' ? raw : {};
  return {
    tool: REMEMBERED_TOOLS.includes(s.tool) ? s.tool : d.tool,
    eraserMode: s.eraserMode === 'stroke' ? 'stroke' : 'area',
    color: INK_COLORS.includes(s.color) ? s.color : d.color,
    highlighter: HIGHLIGHTER_VALUES.includes(s.highlighter) ? s.highlighter : d.highlighter,
    width: WIDTHS.includes(Number(s.width)) ? Number(s.width) : d.width,
  };
};

export const loadPadSettings = (storage = globalThis.localStorage) => {
  try { return cleanPadSettings(JSON.parse(storage.getItem(KEY))); } catch { return { ...DEFAULT_PAD_SETTINGS }; }
};

// `tool` may be the eraser or the lasso right now: the last drawing tool stays remembered in that case.
export const savePadSettings = (settings, storage = globalThis.localStorage) => {
  try {
    const previous = cleanPadSettings(JSON.parse(storage.getItem(KEY)));
    const next = cleanPadSettings({ ...settings, tool: REMEMBERED_TOOLS.includes(settings?.tool) ? settings.tool : previous.tool });
    storage.setItem(KEY, JSON.stringify(next));
  } catch { /* private mode: not remembered */ }
};
