import { useCallback, useEffect, useRef, useState } from 'react';
import { PAGE_W, PAGE_H } from './padView';
import {
  MIN_LASSO_LENGTH, MIN_LASSO_POINTS, polylineLength, selectInLasso, boxOf, pointInBox, translateBox,
  translateStrokes, clampShift, bakeErasers, hasErasers, setLassoClipboard, getLassoClipboard, pasteStrokes,
  scaleStrokes, rotateStrokes, scaleFromDrag, maxScaleInPage, snapAngle, recolorStrokes,
} from './lassoSelect';

const HIT_PAD_PX = 14;          // grab area around the selection, in screen px

/**
 * The notepad's lasso tool (see WorkingOutCanvas). With the lasso active, drawing a loop with the pen selects
 * the strokes inside it; dragging inside the selection moves it, the corner handles resize it, the top handle
 * rotates it; the menu / keys copy, cut, delete, paste and recolour.
 *
 * The strokes array stays the single source of truth: a selection is a list of stroke objects that are IN
 * that array, and every change (move, delete, cut, paste) is one undo step through `pushUndo`. While a
 * selection is being dragged its strokes are hidden from the background layer and shown, shifted, on the
 * live layer; nothing is committed until the pen lifts, so an interrupted gesture loses nothing.
 */
export const useLassoTool = ({
  activeTool, strokes, strokesRef, setStrokes, pushUndo, isSubmittedRef,
  displayCanvasRef, getLiveCtx, getTipCtx, liveCanvasRef,
  redrawBackground, hiddenStrokesRef, forceRedrawRef, backScaleRef, cssScaleRef,
  drawStroke, pageKeyRef, noticeRef, canvasWrapperRef,
}) => {
  const [selection, setSelection] = useState(null);     // { items: stroke[], box } | null
  const [preview, setPreview] = useState(null);         // { box, angle } while a selection is being moved / resized / rotated
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

  const paintTransform = () => {
    const g = gestureRef.current;
    const ctx = getLiveCtx();
    const live = liveCanvasRef.current;
    if (!g || g.kind === 'lasso' || !ctx || !live) return;
    ctx.clearRect(0, 0, live.width, live.height);
    const dpr = backScaleRef.current;
    g.apply(g.items).forEach((st) => drawStroke(ctx, st, dpr, true));
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

  // The three ways to change a selection share one gesture: `apply(items)` gives the changed strokes for the
  // current pointer position, `previewBox` / `angle` how the selection frame should look meanwhile.
  const transformGesture = (kind, e, rect, start, sel, extra = {}) => ({
    kind, pointerId: e.pointerId, rect, start, items: sel.items, box: sel.box, moved: false,
    apply: (items) => items, previewBox: sel.box, angle: 0, ...extra,
  });

  const update = (g, p) => {
    if (g.kind === 'move') {
      const want = clampShift(g.box, p.x - g.start.x, p.y - g.start.y, PAGE_W, PAGE_H);
      g.moved = Math.hypot(want.dx, want.dy) >= 0.5;
      g.apply = (items) => translateStrokes(items, want.dx, want.dy);
      g.previewBox = translateBox(g.box, want.dx, want.dy);
    } else if (g.kind === 'resize') {
      const k = Math.min(scaleFromDrag(g.anchor, g.start, p), maxScaleInPage(g.box, g.anchor.x, g.anchor.y, PAGE_W, PAGE_H));
      g.moved = Math.abs(k - 1) > 0.004;
      g.apply = (items) => scaleStrokes(items, g.anchor.x, g.anchor.y, k);
      const sx = (v) => g.anchor.x + (v - g.anchor.x) * k;
      const sy = (v) => g.anchor.y + (v - g.anchor.y) * k;
      g.previewBox = { minX: Math.min(sx(g.box.minX), sx(g.box.maxX)), maxX: Math.max(sx(g.box.minX), sx(g.box.maxX)), minY: Math.min(sy(g.box.minY), sy(g.box.maxY)), maxY: Math.max(sy(g.box.minY), sy(g.box.maxY)) };
    } else {
      const turn = snapAngle(Math.atan2(p.y - g.center.y, p.x - g.center.x) - Math.atan2(g.start.y - g.center.y, g.start.x - g.center.x));
      g.moved = Math.abs(turn) > 0.003;
      g.angle = turn;
      g.apply = (items) => {
        const turned = rotateStrokes(items, g.center.x, g.center.y, turn);
        // the turned ink may poke out of the page: nudge it back in
        const fit = clampShift(boxOf(turned) || g.box, 0, 0, PAGE_W, PAGE_H);
        return fit.dx || fit.dy ? translateStrokes(turned, fit.dx, fit.dy) : turned;
      };
    }
  };

  const begin = (e, rect) => {
    const pt = toPage(e, rect);
    const sel = selectionRef.current;
    const pad = HIT_PAD_PX / Math.max(0.3, cssScaleRef.current);
    if (sel && pointInBox(pt.x, pt.y, sel.box, pad)) {
      gestureRef.current = transformGesture('move', e, rect, pt, sel);
    } else {
      if (sel) clearSelection();
      gestureRef.current = { kind: 'lasso', pointerId: e.pointerId, rect, pts: [[pt.x, pt.y]] };
    }
  };

  // Pointer down on a selection handle (rendered by LassoOverlay, not the canvas): 0-3 = corners (tl, tr, br, bl)
  // resize, 'rotate' = the top handle.
  const beginHandle = (e, kind, corner = 0) => {
    const sel = selectionRef.current;
    const canvas = displayCanvasRef.current;
    if (!sel || !canvas || isSubmittedRef.current) return;
    const r = canvas.getBoundingClientRect();
    const rect = { left: r.left, top: r.top, sx: r.width > 0 ? PAGE_W / r.width : 1, sy: r.height > 0 ? PAGE_H / r.height : 1 };
    const start = toPage(e, rect);
    const b = sel.box;
    if (kind === 'rotate') {
      gestureRef.current = transformGesture('rotate', e, rect, start, sel, { center: { x: (b.minX + b.maxX) / 2, y: (b.minY + b.maxY) / 2 } });
    } else {
      const corners = [[b.minX, b.minY], [b.maxX, b.minY], [b.maxX, b.maxY], [b.minX, b.maxY]];
      const [ax, ay] = corners[(corner + 2) % 4];
      gestureRef.current = transformGesture('resize', e, rect, start, sel, { anchor: { x: ax, y: ay } });
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
    update(g, p);
    if (!g.moved && !hiddenStrokesRef.current) return;       // not a drag yet (a tap on the selection)
    if (!hiddenStrokesRef.current) {
      hiddenStrokesRef.current = new Set(g.items);
      redrawBackground();
    }
    setPreview({ box: g.previewBox, angle: g.angle });
    schedule(paintTransform);
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

  const finishTransform = (g) => {
    hiddenStrokesRef.current = null;
    const live = liveCanvasRef.current;
    if (live) getLiveCtx()?.clearRect(0, 0, live.width, live.height);
    setPreview(null);
    if (!g.moved) { redrawBackground(); return; }
    const before = strokesRef.current;
    const changed = g.apply(g.items);
    const swap = new Map(g.items.map((st, i) => [st, changed[i]]));
    const after = before.map((st) => swap.get(st) || st);
    strokesRef.current = after;
    forceRedrawRef.current = true;
    pushUndo(before);
    setStrokes(after);
    redrawBackground();
    showSelection({ items: changed, box: boxOf(changed) });
  };

  const end = (e) => {
    const g = gestureRef.current;
    if (!g || (e?.pointerId != null && e.pointerId !== g.pointerId)) return false;
    if (g.kind !== 'lasso' && g.moved && typeof e?.clientX === 'number') update(g, toPage(e, g.rect));
    endGesture();
    if (g.kind === 'lasso') finishLoop(g); else finishTransform(g);
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
      setPreview(null);
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

  const recolor = useCallback((color, highlighter = false) => {
    const sel = selectionRef.current;
    if (!sel || isSubmittedRef.current) return false;
    const changed = recolorStrokes(sel.items, color, highlighter);
    if (changed.every((st, i) => st === sel.items[i])) return false;
    const before = strokesRef.current;
    const swap = new Map(sel.items.map((st, i) => [st, changed[i]]));
    const after = before.map((st) => swap.get(st) || st);
    strokesRef.current = after;
    forceRedrawRef.current = true;
    pushUndo(before);
    setStrokes(after);
    showSelection({ items: changed, box: sel.box });
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
    selection, preview,
    canPaste: Boolean(getLassoClipboard()) && clipboardTick >= 0,
    begin, beginHandle, isActive, move, end, cancel, clearSelection, copy, cut, remove, paste, recolor,
  };
};
