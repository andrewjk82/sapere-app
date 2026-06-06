import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, X, RotateCcw, Play, Pause, Volume2, VolumeX } from 'lucide-react';
import MathView from '../MathView';

// ── Board primitives ───────────────────────────────────────────────────────
const fmt = (n) => n.toLocaleString('en-US').replace(/,/g, ' ');

const PlaceValueTable = ({ columns }) => (
  <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', flexWrap: 'wrap' }}>
    {columns.map((c, i) => (
      <div key={i} style={{
        minWidth: '92px', borderRadius: '14px', overflow: 'hidden',
        border: `2px solid ${c.active ? '#7c3aed' : '#e6e1fb'}`,
        boxShadow: c.active ? '0 10px 24px rgba(124,58,237,0.22)' : 'none',
        transform: c.active ? 'translateY(-3px)' : 'none', transition: 'all 0.3s',
      }}>
        <div style={{
          fontWeight: 800, fontSize: '0.72rem', textAlign: 'center', padding: '7px 4px',
          background: c.active ? 'linear-gradient(135deg,#a78bfa,#7c3aed)' : '#ece9fb',
          color: c.active ? '#fff' : '#5b21b6',
        }}>{c.name}</div>
        <div style={{ fontSize: '2rem', fontWeight: 900, textAlign: 'center', padding: '12px 4px 4px', color: '#1e1b4b' }}>
          {c.showDigit ? c.digit : ''}
        </div>
        <div style={{ textAlign: 'center', fontSize: '0.72rem', fontWeight: 800, color: '#7c3aed', padding: '0 4px 8px', minHeight: '18px' }}>
          {c.showValue ? (c.digit ? fmt(c.value) : '0') : ''}
        </div>
        <div style={{ textAlign: 'center', fontSize: '0.66rem', fontWeight: 700, color: '#94a3b8', padding: '0 4px 9px', minHeight: '14px' }}>
          {c.showPower ? (c.power > 0 ? `${c.digit}×10^${c.power}` : `${c.digit}`) : ''}
        </div>
      </div>
    ))}
  </div>
);

const BoardItem = ({ item }) => {
  if (item.type === 'placeValueTable') return <PlaceValueTable columns={item.columns} />;
  if (item.type === 'math') {
    return (
      <div style={{
        padding: item.emphasis ? '16px 18px' : '8px', borderRadius: '14px',
        background: item.emphasis ? '#fbfaff' : 'transparent',
        border: item.emphasis ? '1px dashed #ddd6fe' : 'none', textAlign: 'center',
      }}>
        <MathView content={item.content} style={{ fontSize: '1.2rem', fontWeight: 800, color: '#1e1b4b' }} />
      </div>
    );
  }
  if (item.type === 'text') {
    return <div style={{ fontSize: '0.95rem', fontWeight: 600, color: '#475569', textAlign: 'center' }}>{item.content}</div>;
  }
  return null;
};

// ── Voice (Web Speech API) — free, client-side, no storage ──────────────────
// Prefer the highest-quality voices the device offers: modern OSes ship
// "Natural"/"Neural" neural voices (Edge/Windows, recent macOS/iOS) and Chrome
// ships "Google" voices — all far better than the legacy robotic default.
const pickVoice = () => {
  const vs = window.speechSynthesis ? speechSynthesis.getVoices() : [];
  const en = vs.filter(v => /^en/i.test(v.lang));
  const score = (v) => {
    let s = 0;
    if (/natural|neural/i.test(v.name)) s += 100;       // MS/Apple neural
    if (/google/i.test(v.name)) s += 60;                // Chrome online voices
    if (/(en[-_]?GB|en[-_]?AU)/i.test(v.lang)) s += 20; // UK/AU accent
    if (/female|samantha|karen|libby|sonia|aria|jenny|natasha/i.test(v.name)) s += 15;
    if (!v.localService) s += 10;                       // online voices usually better
    return s;
  };
  return en.sort((a, b) => score(b) - score(a))[0] || vs[0] || null;
};

/**
 * LessonPlayer — renders a lesson spec (from the registry) as a full-screen
 * step-by-step lesson with optional voice narration.
 *
 * Props: lesson (spec), onClose()
 */
const LessonPlayer = ({ lesson, onClose }) => {
  const [idx, setIdx] = useState(0);
  const [voiceOn, setVoiceOn] = useState(true);
  const [auto, setAuto] = useState(false);
  const [speaking, setSpeaking] = useState(false);
  const steps = lesson?.steps || [];
  const step = steps[idx];

  // Refs so the speech callbacks read fresh values without re-subscribing.
  const autoRef = useRef(auto); useEffect(() => { autoRef.current = auto; }, [auto]);
  const voiceRef = useRef(voiceOn); useEffect(() => { voiceRef.current = voiceOn; }, [voiceOn]);
  const advTimer = useRef(null);

  const clearAdvance = () => { if (advTimer.current) { clearTimeout(advTimer.current); advTimer.current = null; } };
  const stopSpeak = useCallback(() => {
    if (window.speechSynthesis) speechSynthesis.cancel();
    clearAdvance();
    setSpeaking(false);
  }, []);

  const nextOrStop = useCallback(() => {
    setIdx((i) => { if (i >= steps.length - 1) { setAuto(false); return i; } return i + 1; });
  }, [steps.length]);

  // Speak the current step. In auto-play, advance to the NEXT step only AFTER
  // the narration finishes (so voices never overlap). Without voice, fall back
  // to a readable fixed delay.
  const speakStep = useCallback((text) => {
    if (window.speechSynthesis) speechSynthesis.cancel();
    clearAdvance();
    const proceed = () => { if (autoRef.current) advTimer.current = setTimeout(nextOrStop, 650); };

    if (voiceRef.current && window.speechSynthesis && text) {
      const u = new SpeechSynthesisUtterance(text);
      u.lang = 'en-GB'; u.rate = 0.95; u.pitch = 1.0;
      const v = pickVoice(); if (v) { u.voice = v; u.lang = v.lang; }
      u.onstart = () => setSpeaking(true);
      u.onend = () => { setSpeaking(false); proceed(); };
      u.onerror = () => { setSpeaking(false); proceed(); };
      speechSynthesis.speak(u);
    } else {
      setSpeaking(false);
      if (autoRef.current) advTimer.current = setTimeout(nextOrStop, 3600);
    }
  }, [nextOrStop]);

  // Re-run whenever the step, auto, or voice toggle changes.
  useEffect(() => { speakStep(step?.speech); return clearAdvance;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [idx, auto, voiceOn]);

  // Clean up on unmount.
  useEffect(() => () => stopSpeak(), [stopSpeak]);

  if (!lesson || !step) return null;

  const go = (n) => { setAuto(false); stopSpeak(); setIdx(Math.max(0, Math.min(steps.length - 1, n))); };

  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 1300, background: 'linear-gradient(135deg,#f5f3ff,#eef2ff)', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 18px', background: '#fff', borderBottom: '1px solid #ece9fb', flexShrink: 0 }}>
        <div style={{ fontWeight: 900, color: '#1e1b4b', fontSize: '1.05rem' }}>🔢 {lesson.title}</div>
        <div style={{ fontSize: '0.8rem', fontWeight: 800, color: '#64748b' }}>{idx + 1} / {steps.length}</div>
        <button onClick={() => { stopSpeak(); onClose?.(); }} style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '8px 14px', borderRadius: '12px', border: '1px solid #fee2e2', background: '#fff1f2', color: '#e11d48', fontWeight: 800, fontSize: '0.82rem', cursor: 'pointer' }}>
          <X size={15} /> Close
        </button>
      </div>

      {/* Body */}
      <div style={{ flex: 1, minHeight: 0, overflowY: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '20px', padding: '24px 16px' }}>
        <div style={{ width: '100%', maxWidth: '860px', display: 'flex', flexDirection: 'column', gap: '18px' }}>
          {/* Board */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {(step.board || []).map((item, i) => <BoardItem key={i} item={item} />)}
          </div>

          {/* Narration */}
          <div style={{ background: 'linear-gradient(135deg,#faf5ff,#eef2ff)', border: '1px solid #e0d9fb', borderRadius: '16px', padding: '18px 20px', display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
            <div style={{ position: 'relative', flexShrink: 0, width: '38px', height: '38px', borderRadius: '12px', background: 'linear-gradient(135deg,#a78bfa,#7c3aed)', color: '#fff', display: 'grid', placeItems: 'center', fontWeight: 900 }}>
              {idx + 1}
              {speaking && <span style={{ position: 'absolute', inset: '-4px', borderRadius: '14px', border: '2px solid #a78bfa', animation: 'lp-pulse 1s ease-out infinite' }} />}
            </div>
            <div style={{ fontSize: '1rem', lineHeight: 1.65, fontWeight: 600, color: '#3b2b68' }}
                 dangerouslySetInnerHTML={{ __html: step.narration || '' }} />
          </div>

          {/* Dots */}
          <div style={{ display: 'flex', gap: '6px', justifyContent: 'center' }}>
            {steps.map((_, k) => (
              <span key={k} style={{ width: k === idx ? '22px' : '9px', height: '9px', borderRadius: k === idx ? '6px' : '50%', background: k === idx ? '#7c3aed' : '#ddd6fe', transition: 'all 0.2s' }} />
            ))}
          </div>
        </div>
      </div>

      {/* Controls */}
      <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap', padding: '16px', background: '#fff', borderTop: '1px solid #ece9fb', flexShrink: 0 }}>
        <button onClick={() => go(idx - 1)} disabled={idx === 0} style={btn('ghost', idx === 0)}><ArrowLeft size={15} /> Back</button>
        <button onClick={() => { if (idx >= steps.length - 1) setIdx(0); setAuto(a => !a); }} style={btn('ghost')}>
          {auto ? <><Pause size={15} /> Pause</> : <><Play size={15} /> Auto-play</>}
        </button>
        <button onClick={() => go(idx + 1)} disabled={idx === steps.length - 1} style={btn('primary', idx === steps.length - 1)}>Next <ArrowRight size={15} /></button>
        <button onClick={() => go(0)} style={btn('ghost')}><RotateCcw size={15} /> Restart</button>
        <button onClick={() => setVoiceOn(v => !v)} style={btn(voiceOn ? 'on' : 'off')}>
          {voiceOn ? <><Volume2 size={15} /> Voice on</> : <><VolumeX size={15} /> Voice off</>}
        </button>
      </div>

      <style>{`@keyframes lp-pulse{0%{opacity:.7;transform:scale(1)}100%{opacity:0;transform:scale(1.25)}}`}</style>
    </div>
  );
};

const btn = (variant, disabled) => {
  const base = { display: 'inline-flex', alignItems: 'center', gap: '7px', padding: '11px 16px', borderRadius: '12px', fontWeight: 800, fontSize: '0.86rem', cursor: disabled ? 'default' : 'pointer', border: 'none', opacity: disabled ? 0.4 : 1 };
  if (variant === 'primary') return { ...base, background: 'linear-gradient(135deg,#a78bfa,#7c3aed)', color: '#fff' };
  if (variant === 'on') return { ...base, background: '#ecfdf5', color: '#059669', border: '1px solid #a7f3d0' };
  if (variant === 'off') return { ...base, background: '#f1f5f9', color: '#94a3b8', border: '1px solid #e2e8f0' };
  return { ...base, background: '#f5f3ff', color: '#7c3aed', border: '1px solid #ddd6fe' };
};

export default LessonPlayer;
