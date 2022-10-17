// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC2xdKgwYGf0ArcCwJ4tUPnXV93XJH_DWQ",
    authDomain: "red-onion-83599.firebaseapp.com",
    projectId: "red-onion-83599",
    storageBucket: "red-onion-83599.appspot.com",
    messagingSenderId: "687700040001",
    appId: "1:687700040001:web:45e6419849e1c6e1dea9c0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;