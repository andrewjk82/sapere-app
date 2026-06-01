import { CURRICULUM_DATA } from './src/constants/curriculumData.js';

function findInvalid(obj, path = "") {
  if (obj === undefined) return true;
  if (typeof obj === 'function') {
    console.log("Found function at", path);
    return true;
  }
  if (obj === null || typeof obj !== 'object') return false;
  let hasInvalid = false;
  for (let key in obj) {
    if (findInvalid(obj[key], path ? path + "." + key : key)) {
      hasInvalid = true;
    }
  }
  return hasInvalid;
}

console.log("Checking CURRICULUM_DATA...");
const hasInvalid = findInvalid(CURRICULUM_DATA);
if (!hasInvalid) console.log("No invalid values found.");
