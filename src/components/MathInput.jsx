import React, { useEffect, useRef, useImperativeHandle, forwardRef } from 'react';
import { MathfieldElement } from 'mathlive';

// Global one-time config so the virtual keyboard and fonts load correctly.
if (typeof window !== 'undefined' && MathfieldElement) {
  // Serve KaTeX/MathLive sounds+fonts from the CDN (no local asset copying).
  try {
    MathfieldElement.fontsDirectory = 'https://cdn.jsdelivr.net/npm/mathlive@0.109.2/dist/fonts';
    MathfieldElement.soundsDirectory = null; // silence keypress sounds
  } catch (_) { /* ignore */ }
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

  useImperativeHandle(ref, () => ({
    insert: (latex, options) => {
      const mf = mfRef.current;
      if (!mf) return;
      mf.focus();
      mf.insert(latex, options || { focus: true });
    },
    focus: () => mfRef.current?.focus(),
    getValue: () => mfRef.current?.value ?? '',
  }), []);

  // Wire up change + Enter handlers.
  useEffect(() => {
    const mf = mfRef.current;
    if (!mf) return;

    // Configuration (set as properties on the element).
    mf.mathVirtualKeyboardPolicy = 'auto'; // virtual keyboard on touch devices; physical keyboard + buttons on desktop
    mf.smartMode = true;        // typing "sin" etc. becomes operators, "1/2" → fraction
    mf.smartFence = true;
    if (placeholder) mf.setAttribute('placeholder', placeholder);

    const handleInput = () => onChange?.(mf.value);
    const handleKeydown = (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        onEnter?.();
      }
    };
    mf.addEventListener('input', handleInput);
    mf.addEventListener('keydown', handleKeydown);
    return () => {
      mf.removeEventListener('input', handleInput);
      mf.removeEventListener('keydown', handleKeydown);
    };
  }, [onChange, onEnter, placeholder]);

  // Sync controlled value (guard against feedback loops).
  useEffect(() => {
    const mf = mfRef.current;
    if (mf && typeof value === 'string' && mf.value !== value) {
      mf.value = value;
    }
  }, [value]);

  // Read-only toggle.
  useEffect(() => {
    const mf = mfRef.current;
    if (mf) mf.readOnly = !!readOnly;
  }, [readOnly]);

  // Autofocus.
  useEffect(() => {
    if (autoFocus) {
      const t = setTimeout(() => mfRef.current?.focus(), 60);
      return () => clearTimeout(t);
    }
  }, [autoFocus]);

  return (
    <math-field
      ref={mfRef}
      style={{
        display: 'block',
        width: '100%',
        boxSizing: 'border-box',
        fontSize: '1.4rem',
        padding: '18px 20px',
        borderRadius: '16px',
        border: '2px solid #a78bfa',
        background: '#fff',
        ...style,
      }}
    >
      {value}
    </math-field>
  );
});

MathInput.displayName = 'MathInput';
export default MathInput;
