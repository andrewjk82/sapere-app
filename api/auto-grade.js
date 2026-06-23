import admin from 'firebase-admin';

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const GEMINI_MODEL = process.env.GEMINI_MODEL || 'gemini-2.5-flash';

function getAdminApp() {
  if (admin.apps.length > 0) return admin.apps[0];
  const projectId = process.env.FIREBASE_PROJECT_ID;
  const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;
  const privateKey = process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n');
  if (!projectId || !clientEmail || !privateKey) throw new Error('Missing Firebase admin credentials');
  return admin.initializeApp({ credential: admin.credential.cert({ projectId, clientEmail, privateKey }) });
}

function stripDataUrl(dataUrl) {
  return dataUrl?.replace(/^data:image\/[a-z]+;base64,/, '') || null;
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function callGemini(parts) {
  // Gemini frequently returns 503 (UNAVAILABLE) / 429 (rate limit) under load.
  // These are transient — retry with exponential backoff instead of leaving the
  // submission permanently ungraded (the call is fire-and-forget at submit time).
  const RETRIABLE = new Set([429, 500, 502, 503, 504]);
  const MAX_ATTEMPTS = 4;
  let res;
  for (let attempt = 1; attempt <= MAX_ATTEMPTS; attempt++) {
    res = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent?key=${GEMINI_API_KEY}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts }],
          generationConfig: {
            temperature: 0.3,
            maxOutputTokens: 600,
            responseMimeType: 'application/json',
          },
        }),
      }
    );

    if (res.ok) break;
    if (!RETRIABLE.has(res.status) || attempt === MAX_ATTEMPTS) {
      const errText = await res.text();
      throw new Error(`Gemini API ${res.status}: ${errText.slice(0, 200)}`);
    }
    // 0.8s, 1.6s, 3.2s (+ jitter) — well within Vercel's function timeout.
    const backoff = 800 * 2 ** (attempt - 1) + Math.floor(Math.random() * 300);
    console.warn(`[auto-grade] Gemini ${res.status}, retry ${attempt}/${MAX_ATTEMPTS - 1} in ${backoff}ms`);
    await sleep(backoff);
  }

  const data = await res.json();
  const candidate = data.candidates?.[0];
  const finishReason = candidate?.finishReason;
  const text = candidate?.content?.parts?.[0]?.text;

  if (!text) {
    console.error('[auto-grade] Empty Gemini response. finishReason:', finishReason, 'raw:', JSON.stringify(data).slice(0, 400));
    throw new Error(`Empty Gemini response (finishReason: ${finishReason || 'none'})`);
  }

  try {
    return JSON.parse(text);
  } catch {
    // Try extracting JSON object from markdown fences or surrounding text
    const match = text.match(/\{[\s\S]*\}/);
    if (match) {
      try { return JSON.parse(match[0]); } catch { /* fall through */ }
    }
    console.error('[auto-grade] Could not parse Gemini JSON. finishReason:', finishReason, 'text:', text.slice(0, 400));
    throw new Error('Could not parse Gemini JSON response');
  }
}

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  if (!GEMINI_API_KEY) {
    return res.status(200).json({ success: false, message: 'Auto-grading not configured (GEMINI_API_KEY missing)' });
  }

  const { gradingItemId } = req.body || {};
  if (!gradingItemId) return res.status(400).json({ error: 'Missing gradingItemId' });

  try {
    const app = getAdminApp();
    const adminDb = admin.firestore(app);

    const itemSnap = await adminDb.collection('grading_queue').doc(gradingItemId).get();
    if (!itemSnap.exists) return res.status(404).json({ error: 'Grading item not found' });

    const item = itemSnap.data();

    // Build Gemini multimodal parts
    const parts = [];

    const hasDrawing = item.hasDrawing || (item.answerImage && item.answerImage.length > 100);
    const validImages = (item.answerImages || []).filter((u) => u && u.length > 100);
    const imagesToSend = validImages.length > 0
      ? validImages
      : (item.answerImage && item.answerImage.length > 100 ? [item.answerImage] : []);

    // Defense-in-depth: never spend a Gemini call on an empty submission (no
    // drawing and no typed answer). The client already skips these, but this
    // guards any other caller. Leave the item unassessed for manual grading.
    const hasContent = imagesToSend.length > 0 || (item.answerText && String(item.answerText).trim());
    if (!hasContent) {
      console.log(`[auto-grade] skipped — empty submission ${gradingItemId}`);
      return res.status(200).json({ success: false, skipped: true, message: 'Empty submission — nothing to grade' });
    }

    const promptText = [
      'You are an expert mathematics tutor grading a student\'s submitted work.',
      '',
      `Question: ${item.questionText || 'N/A'}`,
      `Correct Answer: ${item.correctAnswer || 'N/A'}`,
      item.solution ? `Solution / Working Guide: ${item.solution}` : '',
      item.answerText ? `Student\'s typed answer: ${item.answerText}` : '',
      '',
      hasDrawing && imagesToSend.length > 0
        ? 'The student\'s handwritten working-out or graph is attached as an image. Grade based on both their method and final answer.'
        : 'The student did not submit any drawing.',
      '',
      'Respond with JSON only (no markdown):',
      '{',
      '  "isCorrect": true or false,',
      '  "confidence": "high" | "medium" | "low",',
      '  "feedback": "2-3 sentences for the student — encouraging tone. If correct, praise their method. If incorrect, kindly explain the main mistake and what they should try instead.",',
      '  "teacherNote": "One sentence for the teacher summarising your assessment."',
      '}',
    ].filter(Boolean).join('\n');

    parts.push({ text: promptText });

    // Attach up to 4 images (Gemini 2.0 Flash supports multiple inline images)
    for (const imgUrl of imagesToSend.slice(0, 4)) {
      const b64 = stripDataUrl(imgUrl);
      if (b64) parts.push({ inlineData: { mimeType: 'image/png', data: b64 } });
    }

    const assessment = await callGemini(parts);

    await adminDb.collection('grading_queue').doc(gradingItemId).update({
      aiAssessment: {
        isCorrect: Boolean(assessment.isCorrect),
        confidence: assessment.confidence || 'medium',
        feedback: assessment.feedback || '',
        teacherNote: assessment.teacherNote || '',
        gradedAt: admin.firestore.FieldValue.serverTimestamp(),
      },
    });

    console.log(`[auto-grade] Graded ${gradingItemId}: ${assessment.isCorrect ? 'CORRECT' : 'INCORRECT'} (${assessment.confidence})`);
    return res.status(200).json({ success: true, assessment });
  } catch (err) {
    console.error('[auto-grade] Error:', err?.message || err);
    return res.status(500).json({ success: false, error: err?.message || 'Unknown error' });
  }
}
