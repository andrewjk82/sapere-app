import { CURRICULUM_DATA } from './src/constants/curriculumData.js';

function findUndefined(obj, path = "") {
  if (obj === undefined) {
    console.log("Found undefined at", path);
    return true;
  }
  if (obj === null || typeof obj !== 'object') {
    return false;
  }
  let hasUndef = false;
  for (let key in obj) {
    if (findUndefined(obj[key], path ? path + "." + key : key)) {
      hasUndef = true;
    }
  }
  return hasUndef;
}

console.log("Checking CURRICULUM_DATA...");
const hasUndef = findUndefined(CURRICULUM_DATA);
if (!hasUndef) console.log("No undefined values found.");
