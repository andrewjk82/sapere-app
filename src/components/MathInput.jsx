import React, { useEffect, useRef, useState, useImperativeHandle, forwardRef } from 'react';
import { MathfieldElement } from 'mathlive';

// Global one-time config so the virtual keyboard and fonts load correctly.
if (typeof window !== 'undefined' && MathfieldElement) {
  // Serve KaTeX/MathLive sounds+fonts from the CDN (no local asset copying).
  try {
    MathfieldElement.fontsDirectory = 'https://cdn.jsdelivr.net/npm/mathlive@0.110.0/dist/fonts';
    MathfieldElement.soundsDirectory = null; // silence keypress sounds
  } catch (_) { /* ignore */ }

  // Warm up the WHOLE math-input pipeline ONCE, shortly after load. The very
  // first time MathLive activates a field + virtual keyboard it lazily builds
  // the keyboard DOM, loads fonts and wires the keystroke pipeline; keystrokes
  // during that build are dropped — which is why the first open on Android used
  // to ignore taps until you closed and reopened.
  //
  // To exercise the full path (not just the keyboard panel), we create a hidden
  // throwaway <math-field>, focus it with a 'manual' policy (so NO keyboard is
  // visible), insert a character, then remove it. This pre-initialises the
  // shared MathLive machinery so the student's first real tap types immediately.
  const warmUpKeyboard = () => {
    if (window.__mathKbWarmedUp) return;
    window.__mathKbWarmedUp = true;
    try {
      const tmp = new MathfieldElement();
      tmp.mathVirtualKeyboardPolicy = 'manual';
      tmp.style.cssText = 'position:fixed;left:-9999px;top:0;width:10px;height:10px;opacity:0;pointer-events:none;';
      document.body.appendChild(tmp);
      tmp.focus();
      try { tmp.executeCommand(['insert', '1']); } catch (_) { /* ignore */ }
      // Build the keyboard panel DOM too. show() is what makes MathLive lazily
      // build the keyboard DOM + wire the keystroke pipeline — but it also pops
      // the REAL on-screen keyboard, which flashed visibly at the bottom of the
      // screen ~1s after every page load. opacity:0 lets the panel build fully
      // (layout/DOM are unaffected by opacity) while staying invisible, so the
      // priming still works but the student never sees a keyboard flash.
      const suppress = document.createElement('style');
      suppress.textContent = '.ML__keyboard{opacity:0 !important;pointer-events:none !important;transition:none !important;}';
      document.head.appendChild(suppress);
      const removeSuppress = () => { try { suppress.remove(); } catch (_) { /* ignore */ } };
      try {
        window.mathVirtualKeyboard?.show();
        requestAnimationFrame(() => requestAnimationFrame(() => {
          try { window.mathVirtualKeyboard?.hide(); } catch (_) { /* ignore */ }
          removeSuppress();
        }));
      } catch (_) { removeSuppress(); }
      setTimeout(() => {
        try { tmp.blur(); tmp.remove(); } catch (_) { /* ignore */ }
      }, 400);
    } catch (_) { /* ignore */ }
  };
  if (document.readyState === 'complete') {
    setTimeout(warmUpKeyboard, 1000);
  } else {
    window.addEventListener('load', () => setTimeout(warmUpKeyboard, 1000), { once: true });
  }
}

/**
 * A reusable math input field built on MathLive's <math-field> web component.
 *
 * Students type naturally:
 *   - "/"      → builds a stacked fraction
 *   - "sqrt"   → builds a square-root radical (or use the √ button → insert('\\sqrt{#0}'))
 *   - "^"      → exponent
 * The value is always clean LaTeX (e.g. "\\frac{1}{2}", "\\sqrt{26}", "x^2"),
 * which the existing answer-matching normaliser already understands.
 *
 * Keyboard behaviour:
 *   We use MathLive's built-in 'auto' virtual-keyboard policy and its built-in
 *   on-screen keyboard toggle button. MathLive then fully manages opening,
 *   closing, keystroke wiring and native-keyboard suppression itself — this is
 *   the path that works reliably across Android, iOS and desktop. We add NO
 *   custom focus/show/hide logic (it only created focus races). To avoid the
 *   keyboard popping open the instant a new question appears, we simply do not
 *   autofocus the field on touch devices — the student opens it by tapping the
 *   field or the keyboard toggle button.
 *
 * Props:
 *   value        controlled LaTeX string
 *   onChange     (latex) => void
 *   onEnter      () => void   — fired when the student presses Enter
 *   readOnly     bool
 *   placeholder  string
 *   autoFocus    bool
 *   style        inline styles for the field
 * Ref methods: insert(latex), focus(), getValue()
 */
const MathInput = forwardRef(({ value = '', onChange, onEnter, readOnly = false, placeholder = '', autoFocus = false, style }, ref) => {
  const mfRef = useRef(null);
  // Capture the initial value so we can seed mf.value on mount without
  // making it a reactive dependency (we do NOT want mount effect to re-run).
  const initialValueRef = useRef(value);
  // Keep callback refs so event listeners never need to be torn down and
  // re-attached on every render (avoids missing rapid-fire input events).
  const onChangeRef = useRef(onChange);
  const onEnterRef  = useRef(onEnter);
  useEffect(() => { onChangeRef.current = onChange; }, [onChange]);
  useEffect(() => { onEnterRef.current  = onEnter;  }, [onEnter]);

  // Fraction insertion. Host a/b buttons (and the virtual keyboard's own
  // fraction key) send templates containing '#?'. Empty double-placeholder
  // templates (\frac{#?}{#?}) froze some Android tablets because tap/caret
  // navigation inside placeholders is broken there — that's why a separate
  // builder panel used to exist. Instead, every fraction template is now
  // normalised to \frac{#@}{#?}: MathLive's '#@' token captures the
  // expression to the LEFT of the caret (or the selection) as the numerator,
  // and the caret lands directly in the denominator placeholder. Natural
  // flow: type "2x", tap a/b, type "3", tap ▶. No empty numerator box, no
  // tap navigation needed; the ◀ ▶ escape arrows cover caret movement on
  // devices where taps fail, and smart backspace removes empty structures.
  const insertFraction = () => {
    const mf = mfRef.current;
    if (!mf) return;
    mf.focus();
    try { mf.executeCommand(['switchMode', 'math']); } catch (_) { /* ignore */ }
    mf.insert('\\frac{#@}{#?}', { focus: true, format: 'latex', mode: 'math' });
  };
  const insertFractionRef = useRef(insertFraction);
  insertFractionRef.current = insertFraction;

  // Track whether the current mf.value change originated from the user
  // (input event) so the sync effect doesn't fight MathLive mid-keystroke.
  const userTypingRef = useRef(false);

  // Android-only: has THIS field primed its keyboard connection yet? Per-field
  // (not per-session) because every new question/test mounts a fresh field that
  // must reconnect, or its first keystroke is dropped again.
  const primedRef = useRef(false);

  // Drives our own ⌨/✕ toggle button's appearance.
  const [kbVisible, setKbVisible] = useState(false);

  // Open: focus the field (connects keystrokes under 'auto'), then explicitly
  // show the keyboard. iOS opens it from focus() alone, but Android does NOT
  // raise the keyboard on a programmatic focus() — so we must call show() too.
  const openKeyboard = () => {
    if (mfRef.current?.readOnly) return;
    try { mfRef.current?.focus(); } catch (_) { /* ignore */ }
    try { window.mathVirtualKeyboard?.show(); } catch (_) { /* ignore */ }
  };
  // Close: hide AND blur. Blurring is essential — under 'auto' the keyboard
  // reopens instantly if a focused field remains.
  const closeKeyboard = () => {
    try { window.mathVirtualKeyboard?.hide(); } catch (_) { /* ignore */ }
    try { mfRef.current?.blur(); } catch (_) { /* ignore */ }
  };
  const toggleKeyboard = () => {
    if (window.mathVirtualKeyboard?.visible) closeKeyboard();
    else openKeyboard();
  };

  useImperativeHandle(ref, () => ({
    insert: (latex, options) => {
      const mf = mfRef.current;
      if (!mf) return;
      // Fraction templates are normalised to the #@ form (numerator captured
      // from the expression left of the caret) — no empty double-placeholder.
      if (typeof latex === 'string' && latex.includes('\\frac') && latex.includes('#?')) {
        insertFractionRef.current?.();
        return;
      }
      mf.focus();
      // Force math mode before inserting. If the field is in text/latex mode
      // (smartMode can flip it), the template is inserted as literal characters
      // and the student sees raw "\frac{#?}{#?}" instead of a fraction.
      try { mf.executeCommand(['switchMode', 'math']); } catch (_) { /* ignore */ }
      mf.insert(latex, { focus: true, format: 'latex', mode: 'math', ...(options || {}) });
    },
    focus: () => mfRef.current?.focus(),
    getValue: () => mfRef.current?.value ?? '',
  }), []);

  // Wire up change + Enter handlers — runs ONCE on mount only.
  useEffect(() => {
    const mf = mfRef.current;
    if (!mf) return;

    // 'auto': MathLive shows/hides its own keyboard, wires keystrokes into the
    // field and suppresses the native OS keyboard on touch devices. Reliable
    // across Android, iOS and desktop. We let it manage everything.
    mf.mathVirtualKeyboardPolicy = 'auto';
    mf.smartMode = true;        // typing "sin" etc. becomes operators, "1/2" → fraction
    mf.smartFence = true;
    if (placeholder) mf.setAttribute('placeholder', placeholder);

    // Set initial value from the prop (child text is NOT updated after mount,
    // so we must seed the field here to avoid MathLive reinitialising on every
    // render when React updates the child text node).
    if (initialValueRef.current) mf.value = initialValueRef.current;

    const handleInput = () => {
      userTypingRef.current = true;   // suppress sync effect for this update
      onChangeRef.current?.(mf.value);
    };
    // Ensure a caret exists in the field as soon as it's focused. On touch
    // devices MathLive can focus the field without establishing an editable
    // caret position, so the FIRST virtual-keyboard keystroke has nowhere to
    // land and is dropped (it only works after you close & reopen). Placing the
    // caret at the end on focus fixes that first-keystroke loss. This touches
    // only the selection — never keyboard visibility — so there is no race.
    const isAndroid = typeof navigator !== 'undefined' && /android/i.test(navigator.userAgent);
    const handleFocusIn = () => {
      wrapInnerDelete();   // inner mathfield exists once focused — wrap its delete
      // NOTE: we deliberately do NOT touch the caret here. focusin also fires
      // when the student taps the field to position the caret (e.g. tapping
      // outside a √ to type after it), and any programmatic caret move here
      // overrides the tap and traps the student inside structures.
      // Android only: the first time the virtual keyboard opens in a session,
      // the field↔keyboard connection isn't ready yet, so the first keystroke
      // is dropped — and the student discovered that closing & reopening fixes
      // it. We automate exactly that hide→show cycle once, so the first real
      // keystroke registers. iOS works perfectly without this, so we skip it.
      if (isAndroid && !primedRef.current) {
        primedRef.current = true;
        const kb = window.mathVirtualKeyboard;
        try {
          kb?.hide();
          requestAnimationFrame(() => requestAnimationFrame(() => {
            try { mf.focus(); kb?.show(); } catch (_) { /* ignore */ }
          }));
        } catch (_) { /* ignore */ }
      }
    };
    // Holds the inner mathfield's ORIGINAL executeCommand so smartBackspace can
    // issue raw deletes without re-entering our wrapper (which would recurse).
    const rawExecRef = { current: null };
    const rawExec = (cmd) => {
      if (rawExecRef.current) {
        try { return rawExecRef.current(cmd); } catch (_) { /* ignore */ }
      }
      try { return mf.executeCommand(cmd); } catch (_) { /* ignore */ }
      return undefined;
    };
    // Smart backspace: an empty math structure (e.g. a fraction inserted via
    // the a/b button but left blank) keeps required placeholder boxes, so a
    // plain backspace can get "stuck" and never removes the structure. When a
    // delete doesn't change anything, select the whole enclosing element and
    // delete that; if still stuck, clear the field. Fixes "this won't delete".
    const smartBackspace = () => {
      const before = mf.value;
      rawExec('deleteBackward');
      if (mf.value !== before) return;
      rawExec('extendSelectionBackward');
      rawExec('deleteBackward');
      if (mf.value !== before) return;
      // Last resort — wipe the field so the student is never stuck.
      try { mf.value = ''; onChangeRef.current?.(''); } catch (_) { /* ignore */ }
    };
    // Route the on-screen keyboard's backspace (the ✕/⌫ key at the right edge)
    // through smartBackspace too. MathLive's virtual keyboard runs deleteBackward
    // straight on the inner mathfield, bypassing our keydown handler — so an
    // empty fraction/root would get "stuck" and the ✕ key appears to do nothing.
    // We wrap the inner mathfield's executeCommand so the keyboard key gets the
    // exact same smart-delete behaviour as the physical Backspace key.
    const wrapInnerDelete = () => {
      const inner = mf._mathfield;
      if (!inner || typeof inner.executeCommand !== 'function' || inner.__smartDeleteWrapped) return;
      const orig = inner.executeCommand.bind(inner);
      rawExecRef.current = orig;
      inner.executeCommand = (command) => {
        // Normalise the command shape: may be 'cmd', ['cmd', ...args] or
        // ['performWithFeedback', ['cmd', ...args]] / ['performWithFeedback', 'cmd', ...args].
        let arr = Array.isArray(command) ? command : [command];
        if (arr[0] === 'performWithFeedback') arr = arr.slice(1);
        if (Array.isArray(arr[0])) arr = arr[0];
        const sel = arr[0];
        if (sel === 'deleteBackward') { smartBackspace(); return true; }
        // Normalise the virtual keyboard's own fraction key to the #@ form:
        // the numerator is captured from the expression left of the caret and
        // the caret lands in the denominator — never an empty numerator
        // placeholder (the structure whose tap navigation froze Android).
        if (sel === 'insert' && typeof arr[1] === 'string'
            && arr[1].includes('\\frac') && arr[1].includes('#?')
            && !arr[1].includes('#@')) {
          return orig(['insert', '\\frac{#@}{#?}']);
        }
        return orig(command);
      };
      inner.__smartDeleteWrapped = true;
    };
    const handleKeydown = (e) => {
      if (e.key === ':') {
        // MathLive smartMode converts ':' → '\Colon' and treats the next digit
        // as a superscript. Override: insert a plain \colon (renders as ':')
        // which our answer normaliser converts back to ':' for grading.
        e.preventDefault();
        mf.insert('\\colon');
        return;
      }
      if (e.key === 'Backspace') {
        e.preventDefault();
        smartBackspace();
        return;
      }
      if (e.key === 'Enter') {
        e.preventDefault();
        closeKeyboard();   // submit also dismisses the keyboard
        onEnterRef.current?.();
      }
    };
    // Keep our ⌨/✕ button icon in sync with the keyboard's real visibility.
    const kb = typeof window !== 'undefined' ? window.mathVirtualKeyboard : null;
    const handleKbToggle = () => setKbVisible(!!kb?.visible);
    mf.addEventListener('input', handleInput);
    mf.addEventListener('keydown', handleKeydown);
    mf.addEventListener('focusin', handleFocusIn);
    kb?.addEventListener('virtual-keyboard-toggle', handleKbToggle);
    // Belt-and-suspenders: wrap the inner delete as soon as it materialises,
    // even if the field is never explicitly focused first.
    requestAnimationFrame(() => wrapInnerDelete());
    return () => {
      mf.removeEventListener('input', handleInput);
      mf.removeEventListener('keydown', handleKeydown);
      mf.removeEventListener('focusin', handleFocusIn);
      kb?.removeEventListener('virtual-keyboard-toggle', handleKbToggle);
    };
  }, []); // ← empty deps: register once, use refs for callbacks

  // Sync controlled value — only when the change came from the parent
  // (e.g. clearing the field on question change), not from user typing.
  useEffect(() => {
    const mf = mfRef.current;
    if (!mf || typeof value !== 'string') return;
    if (userTypingRef.current) {
      userTypingRef.current = false;
      // User just typed — MathLive already has the right value. Its own
      // serialisation can differ slightly from what onChange reported (e.g.
      // placeholder boxes inside a fraction), and reassigning mf.value here
      // rebuilds the field and destroys the caret, freezing all further
      // keystrokes. So while typing we NEVER write back; the only exception
      // is the parent intentionally clearing the field ('' on a new question).
      if (value !== '') return;
    }
    if (mf.value !== value) {
      mf.value = value;
    }
  }, [value]);

  // Placeholder sync.
  useEffect(() => {
    const mf = mfRef.current;
    if (mf && placeholder) mf.setAttribute('placeholder', placeholder);
  }, [placeholder]);

  // Read-only toggle.
  useEffect(() => {
    const mf = mfRef.current;
    if (mf) mf.readOnly = !!readOnly;
  }, [readOnly]);

  // Autofocus — only on non-touch (desktop) devices, so a new question never
  // auto-opens the on-screen keyboard. Touch students open it by tapping.
  useEffect(() => {
    if (!autoFocus) return undefined;
    const isTouch = typeof window !== 'undefined' &&
      (('ontouchstart' in window) || navigator.maxTouchPoints > 0 ||
       window.matchMedia?.('(pointer: coarse)')?.matches);
    if (isTouch) return undefined;
    const t = setTimeout(() => mfRef.current?.focus(), 60);
    return () => clearTimeout(t);
  }, [autoFocus]);

  return (
    <div style={{ position: 'relative', width: '100%' }}>
      <math-field
        ref={mfRef}
        style={{
          display: 'block',
          width: '100%',
          boxSizing: 'border-box',
          fontSize: '1.4rem',
          padding: '18px 52px 18px 20px',
          borderRadius: '16px',
          border: '2px solid #a78bfa',
          background: '#fff',
          ...style,
        }}
      />
      {!readOnly && kbVisible && (() => {
        // Caret escape hatch: on some Android devices MathLive's tap-to-place
        // caret does nothing, so once the caret is inside a √ or fraction the
        // student can never type after it. These arrows ALWAYS move the caret
        // through/out of structures, independent of tap handling.
        const navStyle = (right) => ({
          position: 'absolute', right, bottom: '10px', width: '40px', height: '34px',
          borderRadius: '9px', border: '1px solid #c7d2fe', background: '#eef2ff',
          color: '#4f46e5', cursor: 'pointer', display: 'flex', alignItems: 'center',
          justifyContent: 'center', fontSize: '16px', lineHeight: 1, padding: 0, fontWeight: 800,
        });
        const move = (cmd) => {
          const mf = mfRef.current;
          if (!mf) return;
          try { mf.focus(); mf.executeCommand(cmd); } catch (_) { /* ignore */ }
        };
        return (
          <>
            <button
              type="button"
              aria-label="Move cursor left"
              onPointerDown={(e) => { e.preventDefault(); move('moveToPreviousChar'); }}
              style={navStyle('100px')}
            >
              ◀
            </button>
            <button
              type="button"
              aria-label="Move cursor right"
              onPointerDown={(e) => { e.preventDefault(); move('moveToNextChar'); }}
              style={navStyle('54px')}
            >
              ▶
            </button>
          </>
        );
      })()}
      {!readOnly && (
        <button
          type="button"
          aria-label={kbVisible ? 'Close keyboard' : 'Open keyboard'}
          // pointerdown + preventDefault: this button lives OUTSIDE the field,
          // so without preventDefault tapping it would blur the field and let
          // 'auto' race us. preventDefault keeps focus stable; we then close
          // (hide + blur) or open (focus) explicitly.
          onPointerDown={(e) => { e.preventDefault(); toggleKeyboard(); }}
          style={{
            position: 'absolute',
            right: '10px',
            bottom: '10px',
            width: '34px',
            height: '34px',
            borderRadius: '9px',
            border: '1px solid #e2e8f0',
            background: kbVisible ? '#e0e7ff' : '#f8fafc',
            color: kbVisible ? '#4f46e5' : '#64748b',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '17px',
            lineHeight: 1,
            padding: 0,
          }}
        >
          {kbVisible ? '✕' : '⌨'}
        </button>
      )}
    </div>
  );
});

MathInput.displayName = 'MathInput';
export default MathInput;
