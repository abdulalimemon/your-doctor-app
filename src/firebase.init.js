// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCw3Aar3vVWvSQmDuFy1ZUIw9fZV_-ROQI",
  authDomain: "ur-dr1.firebaseapp.com",
  projectId: "ur-dr1",
  storageBucket: "ur-dr1.appspot.com",
  messagingSenderId: "22013875399",
  appId: "1:22013875399:web:5a435d7577903ca5325ae2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;