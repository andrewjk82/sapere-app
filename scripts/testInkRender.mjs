import assert from 'node:assert/strict';
import { drawHighlighterStroke } from '../src/utils/inkRender.js';

let passed = 0;
const test = (name, fn) => {
  fn();
  passed += 1;
  console.log(`  ok ${name}`);
};

const recordingCtx = () => {
  const calls = { stroke: 0, fill: 0, beginPath: 0, moveTo: 0 };
  const state = {};
  return {
    calls,
    state,
    save() {}, restore() {},
    beginPath() { calls.beginPath += 1; },
    moveTo() { calls.moveTo += 1; },
    lineTo() {}, quadraticCurveTo() {}, arc() {},
    stroke() { calls.stroke += 1; state.compositeAtStroke = this.globalCompositeOperation; state.widthAtStroke = this.lineWidth; },
    fill() { calls.fill += 1; },
  };
};

const line = Array.from({ length: 200 }, (_, i) => [i * 1.5, 40, 9]);

// The bug: a stroke per segment stacks the translucent colour into near-solid paint over the writing.
test('a long highlighter stroke paints exactly once', () => {
  const ctx = recordingCtx();
  drawHighlighterStroke(ctx, line, 'rgba(255, 224, 130, 0.48)', 2);
  assert.deepEqual(ctx.calls, { stroke: 1, fill: 0, beginPath: 1, moveTo: 1 });
});

test('it multiplies, so writing already on the page stays readable', () => {
  const ctx = recordingCtx();
  drawHighlighterStroke(ctx, line, 'rgba(255, 224, 130, 0.48)', 2);
  assert.equal(ctx.state.compositeAtStroke, 'multiply');
  assert.equal(ctx.state.widthAtStroke, 18);
});

test('a tap leaves one dot', () => {
  const ctx = recordingCtx();
  drawHighlighterStroke(ctx, [[5, 5, 9]], 'rgba(255, 224, 130, 0.48)', 2);
  assert.equal(ctx.calls.fill, 1);
  assert.equal(ctx.calls.stroke, 0);
});

console.log(`inkRender: ${passed} passed`);
