// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB2hoVEiHH4JDZvMAvyo8KqvdkjuHBuqCo",
  authDomain: "qlts-event-new.firebaseapp.com",
  projectId: "qlts-event-new",
  storageBucket: "qlts-event-new.firebasestorage.app",
  messagingSenderId: "1085818529326",
  appId: "1:1085818529326:web:df43f3f621a405ed2ca1bf",
  measurementId: "G-PGB4B4FTGM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);