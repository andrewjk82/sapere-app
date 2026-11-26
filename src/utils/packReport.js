import { collectReportImages, fitReportImages } from './reportImages';
import { resizeDataUrlImage } from './imageResize';

// Prepares a question report for saving: each working-out picture is stored ONCE (top level, where Reports & Review
// reads it) as a 960px JPEG. Before, the same PNG was often kept three times (answerResult.workingOut,
// answerResult.workingOutPages and workingOutPages), which the teacher app downloaded on every open.
const IMAGE_KEYS = ['workingOut', 'workingOutPages', 'sketchDataUrl'];

const shrink = async (src) => {
  const out = await resizeDataUrlImage(src);
  return out && out.length < String(src).length ? out : src;
};

export const packReport = async (data, compress = shrink) => {
  const result = data.answerResult && typeof data.answerResult === 'object' ? data.answerResult : null;
  const list = (v) => (Array.isArray(v) ? v.filter(Boolean) : []);
  const pages = list(data.workingOutPages).length ? list(data.workingOutPages) : list(result?.workingOutPages);
  const single = data.sketchDataUrl || data.workingOut || result?.sketchDataUrl || result?.workingOut || null;

  const out = { ...data };
  delete out.workingOut;
  if (result) {
    const rest = { ...result };
    IMAGE_KEYS.forEach((k) => { delete rest[k]; });
    out.answerResult = rest;
  }
  const originals = collectReportImages(single, pages);
  let images = [];
  try {
    images = (await fitReportImages(await Promise.all(originals.map(compress)))).images;
  } catch {
    images = originals;
  }
  out.workingOutPages = pages.length ? images : [];
  out.sketchDataUrl = pages.length ? null : (images[0] || null);
  out.hasSketch = images.length > 0;
  return out;
};
