/**
 * Pre-generate lesson narration audio with Kokoro TTS (run on the dev machine,
 * NOT in the browser). Outputs small WAV files that ship with the app, so
 * students never download the ~80 MB TTS model.
 *
 * Usage:  node scripts/generateLessonAudio.mjs
 */
import { KokoroTTS } from 'kokoro-js';
import { buildPlaceValueLesson, buildAsymptotesLesson, buildPowersCubicsCirclesLesson, buildRadianLesson, buildTrigEquationsLesson, buildPolyhedraLesson, buildNumberLineLesson, buildClockBasicsLesson, buildClockQuartersLesson, buildClockPreciseLesson, buildTranslationsLesson, buildPercentagesLesson, buildOneQuantityAsPercentLesson, buildPercentOfQuantityLesson, buildRatiosLesson } from '../src/lessons/registry.js';
import fs from 'node:fs';
import path from 'node:path';
import { execSync } from 'node:child_process';

const VOICE = 'bf_emma'; // British female, teacher-like

// To regenerate only one lesson, comment out the others.
const JOBS = [
  { id: 'y7-14c', steps: buildPercentOfQuantityLesson({ audioBase: '/lessons/audio/y7-14c' }).steps, only: [4] },
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
      if (job.only && !job.only.includes(i)) continue;
      const text = job.steps[i].speech;
      if (!text) continue;
      process.stdout.write(`  ${job.id} step ${i}… `);
      const audio = await tts.generate(text, { voice: VOICE });
      const wavFile = path.join(outDir, `step-${i}.wav`);
      const mp3File = path.join(outDir, `step-${i}.mp3`);
      await audio.save(wavFile);
      execSync(`ffmpeg -y -i "${wavFile}" -codec:a libmp3lame -qscale:a 4 "${mp3File}"`, { stdio: 'pipe' });
      fs.unlinkSync(wavFile);
      const kb = (fs.statSync(mp3File).size / 1024).toFixed(0);
      console.log(`saved (${kb} KB mp3)`);
    }
  }
  console.log('Done.');
};

main().catch((e) => { console.error(e); process.exit(1); });
