import { useCallback, useEffect, useRef, useState } from 'react';
import { PAGE_W, PAGE_H } from './padView';
import {
  MIN_LASSO_LENGTH, MIN_LASSO_POINTS, polylineLength, selectInLasso, boxOf, pointInBox, translateBox,
  translateStrokes, clampShift, bakeErasers, hasErasers, setLassoClipboard, getLassoClipboard, pasteStrokes,
} from './lassoSelect';

const HIT_PAD_PX = 14;          // grab area around the selection, in screen px

/**
 * The notepad's lasso tool (see WorkingOutCanvas). With the lasso active, drawing a loop with the pen selects
 * the strokes inside it; dragging inside the selection moves it; the menu / keys copy, cut, delete and paste.
 *
 * The strokes array stays the single source of truth: a selection is a list of stroke objects that are IN
 * that array, and every change (move, delete, cut, paste) is one undo step through `pushUndo`. While a
 * selection is being dragged its strokes are hidden from the background layer and shown, shifted, on the
 * live layer; nothing is committed until the pen lifts, so an interrupted drag loses nothing.
 */
export const useLassoTool = ({
  activeTool, strokes, strokesRef, setStrokes, pushUndo, isSubmittedRef,
  displayCanvasRef, getLiveCtx, getTipCtx, liveCanvasRef,
  redrawBackground, hiddenStrokesRef, forceRedrawRef, backScaleRef, cssScaleRef,
  drawStroke, pageKeyRef, noticeRef, canvasWrapperRef,
}) => {
  const [selection, setSelection] = useState(null);     // { items: stroke[], box } | null
  const [shift, setShift] = useState(null);             // { dx, dy } while a selection is being dragged
  const [clipboardTick, setClipboardTick] = useState(0); // re-render when something is copied
  const selectionRef = useRef(null);
  const gestureRef = useRef(null);                       // { kind: 'lasso' | 'move', pointerId, rect, ... }
  const rafRef = useRef(0);

  const showSelection = useCallback((next) => {
    selectionRef.current = next;
    setSelection(next);
  }, []);
  const clearSelection = useCallback(() => showSelection(null), [showSelection]);

  // The selection only means something while its strokes are on the page: undo, redo and page changes swap
  // the array, and a tool change ends the selection.
  useEffect(() => {
    const sel = selectionRef.current;
    if (!sel) return;
    const live = new Set(strokes);
    if (activeTool !== 'lasso' || !sel.items.every((s) => live.has(s))) clearSelection();
  }, [strokes, activeTool, clearSelection]);

  const notice = (label) => noticeRef.current?.(label);

  // ── drawing the loop / the dragged copy ────────────────────────────────────
  const paintLoop = () => {
    const g = gestureRef.current;
    const canvas = displayCanvasRef.current;
    const ctx = getTipCtx();
    if (!g || g.kind !== 'lasso' || !canvas || !ctx) return;
    const dpr = backScaleRef.current;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (g.pts.length < 2) return;
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(g.pts[0][0] * dpr, g.pts[0][1] * dpr);
    for (let i = 1; i < g.pts.length; i += 1) ctx.lineTo(g.pts[i][0] * dpr, g.pts[i][1] * dpr);
    ctx.closePath();
    ctx.fillStyle = 'rgba(79,70,229,0.07)';
    ctx.fill();
    ctx.setLineDash([7 * dpr, 5 * dpr]);
    ctx.lineWidth = Math.max(1.4, 1.6 * dpr);
    ctx.strokeStyle = '#4f46e5';
    ctx.lineJoin = 'round';
    ctx.stroke();
    ctx.restore();
  };

  const paintDrag = () => {
    const g = gestureRef.current;
    const ctx = getLiveCtx();
    const live = liveCanvasRef.current;
    if (!g || g.kind !== 'move' || !ctx || !live) return;
    ctx.clearRect(0, 0, live.width, live.height);
    const dpr = backScaleRef.current;
    translateStrokes(g.items, g.dx, g.dy).forEach((s) => drawStroke(ctx, s, dpr, true));
  };

  const schedule = (paint) => {
    if (rafRef.current) return;
    rafRef.current = requestAnimationFrame(() => { rafRef.current = 0; paint(); });
  };

  const endGesture = () => {
    cancelAnimationFrame(rafRef.current);
    rafRef.current = 0;
    gestureRef.current = null;
  };

  // ── pointer entry points (called by the canvas's own handlers) ─────────────
  const toPage = (e, rect) => ({ x: (e.clientX - rect.left) * rect.sx, y: (e.clientY - rect.top) * rect.sy });

  const begin = (e, rect) => {
    const pt = toPage(e, rect);
    const sel = selectionRef.current;
    const pad = HIT_PAD_PX / Math.max(0.3, cssScaleRef.current);
    if (sel && pointInBox(pt.x, pt.y, sel.box, pad)) {
      gestureRef.current = { kind: 'move', pointerId: e.pointerId, rect, start: pt, items: sel.items, box: sel.box, dx: 0, dy: 0, moved: false };
    } else {
      if (sel) clearSelection();
      gestureRef.current = { kind: 'lasso', pointerId: e.pointerId, rect, pts: [[pt.x, pt.y]] };
    }
  };

  const isActive = (pointerId) => Boolean(gestureRef.current) && (pointerId == null || gestureRef.current.pointerId === pointerId);

  const move = (e) => {
    const g = gestureRef.current;
    if (!g || e.pointerId !== g.pointerId) return;
    const events = (typeof e.getCoalescedEvents === 'function' && e.getCoalescedEvents().length) ? e.getCoalescedEvents() : [e];
    if (g.kind === 'lasso') {
      for (const ev of events) {
        const p = toPage(ev, g.rect);
        const last = g.pts[g.pts.length - 1];
        if ((p.x - last[0]) ** 2 + (p.y - last[1]) ** 2 >= 4) g.pts.push([p.x, p.y]);
      }
      schedule(paintLoop);
      return;
    }
    const p = toPage(events[events.length - 1], g.rect);
    const want = clampShift(g.box, p.x - g.start.x, p.y - g.start.y, PAGE_W, PAGE_H);
    if (!g.moved && Math.hypot(want.dx, want.dy) < 3) return;   // a tap, not a drag
    if (!g.moved) {
      g.moved = true;
      hiddenStrokesRef.current = new Set(g.items);
      redrawBackground();
    }
    g.dx = want.dx; g.dy = want.dy;
    setShift({ dx: want.dx, dy: want.dy });
    schedule(paintDrag);
  };

  const finishLoop = (g) => {
    const tip = displayCanvasRef.current;
    if (tip) getTipCtx()?.clearRect(0, 0, tip.width, tip.height);
    if (g.pts.length < MIN_LASSO_POINTS || polylineLength(g.pts) < MIN_LASSO_LENGTH) { clearSelection(); return; }
    // Apply the area eraser first (see bakeErasers); the selection is then made on the cut-up strokes.
    const current = strokesRef.current;
    const base = hasErasers(current) ? bakeErasers(current) : current;
    const items = selectInLasso(base, g.pts);
    if (items.length === 0) { clearSelection(); return; }
    if (base !== current) {
      strokesRef.current = base;
      forceRedrawRef.current = true;
      setStrokes(base);
    }
    showSelection({ items, box: boxOf(items) });
  };

  const finishMove = (g) => {
    hiddenStrokesRef.current = null;
    const live = liveCanvasRef.current;
    if (live) getLiveCtx()?.clearRect(0, 0, live.width, live.height);
    setShift(null);
    if (!g.moved || (g.dx === 0 && g.dy === 0)) { redrawBackground(); return; }
    const before = strokesRef.current;
    const moved = translateStrokes(g.items, g.dx, g.dy);
    const swap = new Map(g.items.map((s, i) => [s, moved[i]]));
    const after = before.map((s) => swap.get(s) || s);
    strokesRef.current = after;
    forceRedrawRef.current = true;
    pushUndo(before);
    setStrokes(after);
    redrawBackground();
    showSelection({ items: moved, box: translateBox(g.box, g.dx, g.dy) });
  };

  const end = (e) => {
    const g = gestureRef.current;
    if (!g || (e?.pointerId != null && e.pointerId !== g.pointerId)) return false;
    if (g.kind === 'move' && g.moved) {
      const p = toPage(e, g.rect);
      const want = clampShift(g.box, p.x - g.start.x, p.y - g.start.y, PAGE_W, PAGE_H);
      g.dx = want.dx; g.dy = want.dy;
    }
    endGesture();
    if (g.kind === 'lasso') finishLoop(g); else finishMove(g);
    return true;
  };

  // Interrupted (palm, system gesture): drop the gesture; a half-made drag changes nothing.
  const cancel = (e) => {
    const g = gestureRef.current;
    if (!g || (e?.pointerId != null && e.pointerId !== g.pointerId)) return false;
    endGesture();
    if (g.kind === 'lasso') {
      const tip = displayCanvasRef.current;
      if (tip) getTipCtx()?.clearRect(0, 0, tip.width, tip.height);
    } else {
      hiddenStrokesRef.current = null;
      const live = liveCanvasRef.current;
      if (live) getLiveCtx()?.clearRect(0, 0, live.width, live.height);
      setShift(null);
      redrawBackground();
    }
    return true;
  };

  // ── actions on the selection ───────────────────────────────────────────────
  const copy = useCallback(() => {
    const sel = selectionRef.current;
    if (!sel) return false;
    setLassoClipboard(sel.items, pageKeyRef.current);
    setClipboardTick((n) => n + 1);
    notice(sel.items.length === 1 ? 'Copied' : `Copied ${sel.items.length} strokes`);
    return true;
  }, []);   // eslint-disable-line react-hooks/exhaustive-deps

  const remove = useCallback((labelArg) => {
    const label = typeof labelArg === 'string' ? labelArg : 'Deleted';   // a click event may arrive here
    const sel = selectionRef.current;
    if (!sel || isSubmittedRef.current) return false;
    const before = strokesRef.current;
    const drop = new Set(sel.items);
    const after = before.filter((s) => !drop.has(s));
    strokesRef.current = after;
    forceRedrawRef.current = true;
    pushUndo(before);
    setStrokes(after);
    showSelection(null);
    notice(label);
    return true;
  }, []);   // eslint-disable-line react-hooks/exhaustive-deps

  const cut = useCallback(() => {
    const sel = selectionRef.current;
    if (!sel) return false;
    setLassoClipboard(sel.items, pageKeyRef.current);
    setClipboardTick((n) => n + 1);
    return remove('Cut');
  }, [remove]);   // eslint-disable-line react-hooks/exhaustive-deps

  const paste = useCallback(() => {
    if (isSubmittedRef.current) return false;
    const pasted = pasteStrokes(getLassoClipboard(), pageKeyRef.current, PAGE_W, PAGE_H);
    if (!pasted) return false;
    const before = strokesRef.current;
    const after = [...before, ...pasted.items];
    strokesRef.current = after;
    forceRedrawRef.current = true;
    pushUndo(before);
    setStrokes(after);
    showSelection({ items: pasted.items, box: pasted.box });
    notice('Pasted');
    return true;
  }, []);   // eslint-disable-line react-hooks/exhaustive-deps

  // Keyboard (iPad keyboard / laptop): Delete, ⌘C / ⌘X / ⌘V while the lasso is the active tool.
  const keysRef = useRef({});
  useEffect(() => { keysRef.current = { copy, cut, remove, paste }; }, [copy, cut, remove, paste]);
  useEffect(() => {
    if (activeTool !== 'lasso') return undefined;
    const onKey = (e) => {
      const wrapper = canvasWrapperRef.current;
      if (!wrapper || wrapper.offsetParent === null) return;             // this pad is not on screen
      if (e.target?.closest?.('input, textarea, select, [contenteditable="true"]')) return;
      const mod = (e.metaKey || e.ctrlKey) && !e.altKey;
      const key = String(e.key).toLowerCase();
      let handled = false;
      if (!mod && (key === 'delete' || key === 'backspace')) handled = keysRef.current.remove();
      else if (mod && key === 'c') handled = keysRef.current.copy();
      else if (mod && key === 'x') handled = keysRef.current.cut();
      else if (mod && key === 'v') handled = keysRef.current.paste();
      if (handled) e.preventDefault();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [activeTool, canvasWrapperRef]);

  useEffect(() => () => { cancelAnimationFrame(rafRef.current); }, []);

  return {
    selection, shift, moving: Boolean(shift),
    canPaste: Boolean(getLassoClipboard()) && clipboardTick >= 0,
    begin, isActive, move, end, cancel, clearSelection, copy, cut, remove, paste,
  };
};
