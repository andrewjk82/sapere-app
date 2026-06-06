/**
 * Kokoro TTS — high-quality, free, fully client-side neural voice.
 *
 * Loaded lazily from a CDN (esm.sh) so it never bloats the main app bundle and
 * never touches a server. The ~80 MB quantised model is downloaded once on
 * first use and then cached by the browser. Generated audio per sentence is
 * memoised so replays are instant.
 *
 * Everything is best-effort: if the device/browser can't run it, callers fall
 * back to the built-in Web Speech voice.
 */

let ttsPromise = null;             // singleton model loader
const audioCache = new Map();      // `${voice}|${text}` -> object URL

// Preferred narration voice: British female (teacher-like). Kokoro voice ids:
// bf_emma / bf_isabella (British F), bm_george (British M), af_heart (US F)…
export const DEFAULT_VOICE = 'bf_emma';

export const kokoroSupported = () =>
  typeof window !== 'undefined' && (typeof WebAssembly === 'object');

async function loadTTS() {
  if (ttsPromise) return ttsPromise;
  ttsPromise = (async () => {
    // CDN ESM import — kept out of the Vite bundle on purpose.
    const mod = await import(/* @vite-ignore */ 'https://esm.sh/kokoro-js@1.2.1');
    const KokoroTTS = mod.KokoroTTS || mod.default?.KokoroTTS || mod.default;
    // Prefer WebGPU when available (much faster); otherwise WASM. q8 keeps the
    // model ~80 MB with very good quality.
    let device = 'wasm';
    try {
      if (navigator.gpu && (await navigator.gpu.requestAdapter())) device = 'webgpu';
    } catch { /* no webgpu */ }
    return KokoroTTS.from_pretrained('onnx-community/Kokoro-82M-v1.0-ONNX', {
      dtype: 'q8',
      device,
    });
  })();
  ttsPromise.catch(() => { ttsPromise = null; }); // allow retry after failure
  return ttsPromise;
}

/** Kick off model download early (e.g. when the user enables HD voice). */
export const preloadKokoro = () => { loadTTS().catch(() => {}); };

/**
 * Synthesise `text` and return a playable object-URL (cached).
 * Throws if generation fails — callers should fall back to Web Speech.
 */
export async function synthKokoro(text, voice = DEFAULT_VOICE) {
  const key = `${voice}|${text}`;
  if (audioCache.has(key)) return audioCache.get(key);
  const tts = await loadTTS();
  const audio = await tts.generate(text, { voice });
  const blob = audio.toBlob ? audio.toBlob() : new Blob([audio.audio], { type: 'audio/wav' });
  const url = URL.createObjectURL(blob);
  audioCache.set(key, url);
  return url;
}
