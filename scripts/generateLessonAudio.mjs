/**
 * Pre-generate lesson narration audio with Kokoro TTS (run on the dev machine,
 * NOT in the browser). Outputs small WAV files that ship with the app, so
 * students never download the ~80 MB TTS model.
 *
 * Usage:  node scripts/generateLessonAudio.mjs
 */
import { KokoroTTS } from 'kokoro-js';
import { buildPlaceValueLesson, buildAsymptotesLesson, buildPowersCubicsCirclesLesson, buildRadianLesson, buildTrigEquationsLesson, buildPolyhedraLesson } from '../src/lessons/registry.js';
import fs from 'node:fs';
import path from 'node:path';

const VOICE = 'bf_emma'; // British female, teacher-like

// To regenerate only one lesson, comment out the others.
const JOBS = [
  { id: 'y7-20a', steps: buildPolyhedraLesson().steps },
];

const main = async () => {
  console.log('Loading Kokoro model (one-time download on this machine)…');
  const tts = await KokoroTTS.from_pretrained('onnx-community/Kokoro-82M-v1.0-ONNX', {
    dtype: 'q8',
    device: 'cpu',
  });
  console.log('Model ready.');

  for (const job of JOBS) {
    const outDir = path.resolve(`public/lessons/audio/${job.id}`);
    fs.mkdirSync(outDir, { recursive: true });
    for (let i = 0; i < job.steps.length; i++) {
      const text = job.steps[i].speech;
      if (!text) continue;
      process.stdout.write(`  ${job.id} step ${i}… `);
      const audio = await tts.generate(text, { voice: VOICE });
      const file = path.join(outDir, `step-${i}.wav`);
      await audio.save(file);
      const kb = (fs.statSync(file).size / 1024).toFixed(0);
      console.log(`saved (${kb} KB)`);
    }
  }
  console.log('Done.');
};

main().catch((e) => { console.error(e); process.exit(1); });
