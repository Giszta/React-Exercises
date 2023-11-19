// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCY950gTAxfux7D5cwBcxt_39V1rwEKqA4",
    authDomain: "react-course-233a0.firebaseapp.com",
    projectId: "react-course-233a0",
    storageBucket: "react-course-233a0.appspot.com",
    messagingSenderId: "473554332011",
    appId: "1:473554332011:web:fded8f465c2f4438a1042e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);