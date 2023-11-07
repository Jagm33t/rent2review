// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY ,
  authDomain: "rentreviewhub-b942b.firebaseapp.com",
  projectId: "rentreviewhub-b942b",
  storageBucket: "rentreviewhub-b942b.appspot.com",
  messagingSenderId: "1070527956267",
  appId: "1:1070527956267:web:0c744e4a769d31d60db16e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);