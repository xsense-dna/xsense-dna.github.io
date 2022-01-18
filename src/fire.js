// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCViH6bFdvc4uxnEBIPzlmPGCwL9i9Kaus",
  authDomain: "nanograb-landing-page.firebaseapp.com",
  projectId: "nanograb-landing-page",
  storageBucket: "nanograb-landing-page.appspot.com",
  messagingSenderId: "344703985176",
  appId: "1:344703985176:web:5fb4a3a05e264b133ec56d",
  measurementId: "G-M2MK5GHYG4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;