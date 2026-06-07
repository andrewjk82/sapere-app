import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, query, where, getCountFromServer } from "firebase/firestore";

// I can't easily query the real firebase without the API key which is in the environment vars.
// But wait! Is there a locally cached count file?
