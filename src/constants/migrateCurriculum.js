import { db } from '../firebase/config';
import { doc, setDoc } from 'firebase/firestore';
import { CURRICULUM_DATA } from './curriculumData';

export const migrateCurriculumToFirestore = async () => {
  console.log("Starting curriculum migration...");
  try {
    for (const [year, data] of Object.entries(CURRICULUM_DATA)) {
      if (Array.isArray(data)) {
        // Direct year (Year 1-10)
        const docId = year.replace(' ', '_');
        await setDoc(doc(db, 'curriculum', docId), {
          year,
          chapters: data,
          updatedAt: new Date().toISOString()
        });
        console.log(`Migrated ${year}`);
      } else {
        // Nested courses (Year 11-12)
        for (const [course, chapters] of Object.entries(data)) {
          const docId = `${year.replace(' ', '_')}_${course}`;
          await setDoc(doc(db, 'curriculum', docId), {
            year,
            course,
            chapters,
            updatedAt: new Date().toISOString()
          });
          console.log(`Migrated ${year} ${course}`);
        }
      }
    }
    alert("Curriculum migration completed successfully!");
  } catch (error) {
    console.error("Migration error:", error);
    alert("Migration failed: " + error.message);
  }
};
