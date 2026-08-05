const fs = require('fs');

async function run() {
  const file = './src/constants/seedYear10Ch6KQuestions.js';
  const module = await import('file://' + require('path').resolve(file));
  const questions = module.Y10_CH6K_QUESTIONS;

  questions.forEach(q => {
    let optTexts = [];
    let correctText = "";
    
    switch(q.id) {
      case 'y10-6k-q1a':
        correctText = "3950";
        optTexts = ["3950", "3900", "4150", "15000"];
        break;
      case 'y10-6k-q1b':
        correctText = "15000";
        optTexts = ["1500", "3950", "15000", "30000"];
        break;
      case 'y10-6k-q2a':
        correctText = "8";
        optTexts = ["6", "8", "10", "12"];
        break;
      case 'y10-6k-q3a':
        correctText = "6";
        optTexts = ["6", "8", "10", "14"];
        break;
      case 'y10-6k-q4a':
        correctText = "128";
        optTexts = ["160", "128", "256", "320"];
        break;
      case 'y10-6k-q4b':
        correctText = "1556";
        optTexts = ["1300", "1428", "1556", "1812"];
        break;
      case 'y10-6k-q4c':
        correctText = "3200";
        optTexts = ["3200", "1600", "6400", "4800"];
        break;
      case 'y10-6k-q5a':
        correctText = "31416";
        optTexts = ["15708", "31416", "125664", "62832"];
        break;
      case 'y10-6k-q5b':
        correctText = "40";
        optTexts = ["10", "20", "40", "80"];
        break;
      case 'y10-6k-q6a':
        correctText = "896";
        optTexts = ["700", "896", "1092", "1960"];
        break;
      case 'y10-6k-q6b':
        correctText = "1568";
        optTexts = ["4704", "1568", "2352", "3136"];
        break;
      case 'y10-6k-q6c':
        correctText = "90\\pi";
        optTexts = ["65\\pi", "90\\pi", "115\\pi", "150\\pi"];
        break;
      case 'y10-6k-q6d':
        correctText = "100\\pi";
        optTexts = ["100\\pi", "300\\pi", "325\\pi", "130\\pi"];
        break;
      case 'y10-6k-q7a':
        correctText = "328.6";
        optTexts = ["208.6", "264.0", "328.6", "448.6"];
        break;
      case 'y10-6k-q7b':
        correctText = "240";
        optTexts = ["120", "240", "720", "480"];
        break;
      case 'y10-6k-q8a':
        correctText = "5";
        optTexts = ["5", "10", "13", "25"];
        break;
      case 'y10-6k-q8b':
        correctText = "12";
        optTexts = ["12", "13", "144", "169"];
        break;
      case 'y10-6k-q8c':
        correctText = "314";
        optTexts = ["314", "942", "1024", "157"];
        break;
      case 'y10-6k-q9a':
        correctText = "125.7";
        optTexts = ["100.5", "125.7", "150.8", "175.9"];
        break;
      case 'y10-6k-q9b':
        correctText = "108.9";
        optTexts = ["75.4", "108.9", "142.4", "326.7"];
        break;
      case 'y10-6k-q10a':
        correctText = "16, 64";
        optTexts = ["8, 12", "16, 64", "16, 32", "8, 64"];
        break;
      case 'y10-6k-q10b':
        correctText = "6.25, 15.625";
        optTexts = ["5, 7.5", "6.25, 12.5", "6.25, 15.625", "12.5, 31.25"];
        break;
      case 'y10-6k-q10c':
        correctText = "3, 27";
        optTexts = ["4.5, 13.5", "3, 27", "3, 9", "4.5, 27"];
        break;
      case 'y10-6k-q10d':
        correctText = "7, 343";
        optTexts = ["24.5, 73.5", "7, 343", "7, 49", "24.5, 343"];
        break;
      case 'y10-6k-q10e':
        correctText = "6, 36";
        optTexts = ["72, 144", "6, 36", "6, 216", "36, 6"];
        break;
      case 'y10-6k-q10f':
        correctText = "10, 100";
        optTexts = ["333, 666", "10, 100", "10, 1000", "100, 10"];
        break;
    }

    if (optTexts.length === 4) {
      q.options = optTexts.map(t => ({ text: `\\(${t}\\)`, imageUrl: "" }));
      q.answer = correctText;
      q.a = optTexts.indexOf(correctText);
    }
  });

  const output = 'export const Y10_CH6K_QUESTIONS = ' + JSON.stringify(questions, null, 2) + ';\n';
  fs.writeFileSync(file, output);
  console.log('Successfully updated options in seedYear10Ch6KQuestions.js');
}

run().catch(console.error);
