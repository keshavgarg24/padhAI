// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "process.env.NEXT_PUBLIC_FIREBASE_API_KEY",
  authDomain: "women-health-63fa0.firebaseapp.com",
  projectId: "women-health-63fa0",
  storageBucket: "women-health-63fa0.appspot.com",
  messagingSenderId: "120080140741",
  appId: "1:120080140741:web:f15bf092ceda92b75463ac",
  measurementId: "G-84LH99LVC9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
const db = getFirestore(app);

export { db };