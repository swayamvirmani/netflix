// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyArZ2ngvP4wFQhXxWidwk-cvUigBf_zg_0",
  authDomain: "netflixgpt-1d661.firebaseapp.com",
  projectId: "netflixgpt-1d661",
  storageBucket: "netflixgpt-1d661.firebasestorage.app",
  messagingSenderId: "789147620882",
  appId: "1:789147620882:web:4b1f6ecededb1eac526acb",
  measurementId: "G-QQP1RS7GYE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth()