// Teacher-feedback cards (users/{uid}/saved_feedback) keep their text in Firestore but
// their photos (the student's handwritten answer, the teacher's markup) only on the
// device that first opened them: once delivered, the images are moved to IndexedDB and
// removed from the Firestore doc. Each photo was ~100KB and was stored twice.

// Fields that can hold an inline image (data:image/... string, or an array of them).
export const FEEDBACK_IMAGE_FIELDS = ['answerImages', 'answerImage', 'teacherAnnotation', 'questionImage'];

const isDataImage = (v) => typeof v === 'string' && v.startsWith('data:image/');

// Split a card into { text, images }. `images` holds only inline data-URL images
// (an http(s) URL stays in `text`); it is null when the card has none.
// answerImage is dropped when it only repeats answerImages (the page shows answerImages first).
export const splitFeedbackImages = (data = {}) => {
  const text = { ...data };
  const images = {};
  for (const field of FEEDBACK_IMAGE_FIELDS) {
    const value = data[field];
    if (Array.isArray(value)) {
      if (value.some(isDataImage)) {
        images[field] = value.filter(isDataImage);
        delete text[field];
      }
    } else if (isDataImage(value)) {
      images[field] = value;
      delete text[field];
    }
  }
  if (images.answerImage && Array.isArray(images.answerImages) && images.answerImages.includes(images.answerImage)) {
    delete images.answerImage;
  }
  return { text, images: Object.keys(images).length ? images : null };
};

// Firestore update that strips the moved images and records which fields now live on a device.
// `deleteField` is passed in so this stays testable without the Firebase SDK.
export const imageStripUpdate = (data, deleteField) => {
  const update = {};
  const moved = [];
  for (const field of FEEDBACK_IMAGE_FIELDS) {
    const value = data[field];
    const hasImage = Array.isArray(value) ? value.some(isDataImage) : isDataImage(value);
    if (hasImage) {
      update[field] = deleteField();
      moved.push(field);
    }
  }
  if (!moved.length) return null;
  update.deviceImageFields = [...new Set([...(data.deviceImageFields || []), ...moved])];
  return update;
};

// The card as the page renders it: text + whatever images this device has.
// `imagesMissing` is true when the photos were moved to another device (or this one lost them).
export const mergeFeedbackImages = (note, images) => {
  const merged = { ...note, ...(images || {}) };
  const expected = Array.isArray(note.deviceImageFields) && note.deviceImageFields.length > 0;
  merged.imagesMissing = expected && !images;
  return merged;
};
