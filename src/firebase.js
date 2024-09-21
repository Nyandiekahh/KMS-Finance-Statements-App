// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // Make sure to import the auth module

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDidzCeeIdtGbzfAlQnXQrtfsmONlimwQI",
  authDomain: "sacco-11de8.firebaseapp.com",
  projectId: "sacco-11de8",
  storageBucket: "sacco-11de8.appspot.com",
  messagingSenderId: "903948547717",
  appId: "1:903948547717:web:81653306f78294dedddbec",
  measurementId: "G-56DW0EBMHY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // Initialize auth

export { auth }; // Export the auth object
