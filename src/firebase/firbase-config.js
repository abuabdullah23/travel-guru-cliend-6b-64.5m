// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBsfXafZuLGV-NjrtcxHuYXhkqigtTkosE",
  authDomain: "travel-guru-client-6ba95.firebaseapp.com",
  projectId: "travel-guru-client-6ba95",
  storageBucket: "travel-guru-client-6ba95.appspot.com",
  messagingSenderId: "375274171556",
  appId: "1:375274171556:web:383a93a5b1bd3fc4b4ca31"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;npm install -D tailwindcss postcss autoprefixer