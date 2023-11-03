// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore"; // <- needed for DB

import { getAuth } from "firebase/auth"; // <- needed for auth
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
 apiKey: "AIzaSyBhJoYpXigr8r2b3qDxS9sDLprGqtqXYw8",
  authDomain: "semester-project-2023-advjs.firebaseapp.com",
  projectId: "semester-project-2023-advjs",
  storageBucket: "semester-project-2023-advjs.appspot.com",
  messagingSenderId: "774086821061",
  appId: "1:774086821061:web:cb050eb152e0d40ba2dcac"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app); // <- needed for auth
export {auth}

export const db = getFirestore(app); // <- needed for DB