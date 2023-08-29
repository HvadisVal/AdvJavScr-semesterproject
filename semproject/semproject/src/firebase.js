// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore"; // <- needed for DB

//import { getAuth } from "firebase/auth"; // <- needed for auth
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDY0fK74gDFIKTUBVs4UpXqjMxN7VDJzx8",
  authDomain: "semproj-advjavscript-2023.firebaseapp.com",
  projectId: "semproj-advjavscript-2023",
  storageBucket: "semproj-advjavscript-2023.appspot.com",
  messagingSenderId: "221332456258",
  appId: "1:221332456258:web:dc1092b460cd26832d7edb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//const auth = getAuth(app); // <- needed for auth
// export {auth}

export const db = getFirestore(app); // <- needed for DB