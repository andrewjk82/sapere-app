#!/usr/bin/env node

/**
 * Upload Killara 1995 Year 7 Questions to Firestore
 * Usage: node uploadKillara1995Questions.js
 */

const admin = require('firebase-admin');
const path = require('path');
const { Y7_KILLARA_1995_QUESTIONS, Y7_KILLARA_1995_SIMILAR } = require('../../src/constants/seedYear7Killara1995Questions.js');

// Initialize Firebase Admin with credentials or default auth
if (!admin.apps.length) {
  // Try to use service account key if available
  const serviceAccountPath = path.join(process.env.HOME, '.firebase', 'sapere-fe23e-adminsdk.json');

  try {
    const serviceAccount = require(serviceAccountPath);
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
      projectId: 'sapere-fe23e'
    });
    console.log('✅ Authenticated with service account key');
  } catch (err) {
    // Fallback to default credentials (GOOGLE_APPLICATION_CREDENTIALS or Firebase CLI auth)
    admin.initializeApp({
      projectId: 'sapere-fe23e'
    });
    console.log('✅ Authenticated with default credentials');
  }
}

const db = admin.firestore();

async function uploadQuestions() {
  console.log('📤 Uploading Killara 1995 Year 7 Questions to Firestore...\n');

  try {
    const allQuestions = [...Y7_KILLARA_1995_QUESTIONS, ...Y7_KILLARA_1995_SIMILAR];
    console.log(`Total questions to upload: ${allQuestions.length}`);

    let uploadedCount = 0;
    let errorCount = 0;

    // Upload each question
    for (const question of allQuestions) {
      try {
        const questionRef = db.collection('questions').doc(question.id);

        // Extract chapter from question id (e.g., 'y7-1-killara-q1' → 'y7-1')
        const chapterId = question.id.split('-').slice(0, 2).join('-');

        // Add metadata
        const questionData = {
          ...question,
          chapterId,
          origin: 'killara-1995',
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
          version: 1,
          membershipVersion: 1,
        };

        await questionRef.set(questionData);
        uploadedCount++;
        console.log(`✅ ${uploadedCount}. ${question.id} (${question.t})`);
      } catch (err) {
        errorCount++;
        console.error(`❌ Error uploading ${question.id}:`, err.message);
      }
    }

    console.log(`\n📊 Upload Summary:`);
    console.log(`   ✅ Uploaded: ${uploadedCount}`);
    console.log(`   ❌ Errors: ${errorCount}`);
    console.log(`   📈 Total: ${allQuestions.length}`);

    if (uploadedCount > 0) {
      console.log('\n✨ Questions uploaded successfully!');
      console.log('📍 Check Firestore at: https://console.firebase.google.com/project/sapere-fe23e/firestore');
    }

    process.exit(errorCount > 0 ? 1 : 0);
  } catch (error) {
    console.error('❌ Fatal error:', error);
    process.exit(1);
  }
}

uploadQuestions();
