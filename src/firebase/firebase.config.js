// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_APIKEY,
    authDomain: import.meta.env.VITE_AUTHDOMAIN,
    projectId: import.meta.env.VITE_PROJECTID,
    storageBucket: import.meta.env.VITE_STORAGEBUCKET,
    messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
    appId: import.meta.env.VITE_APPID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);



// .env.local

// VITE_APIKEY=AIzaSyDDgF0nw2_o0tyRxjl1IFKqjsUhCQESDHg
// VITE_AUTHDOMAIN=finalpreparation-18986.firebaseapp.com
// VITE_PROJECTID=finalpreparation-18986
// VITE_STORAGEBUCKET=finalpreparation-18986.appspot.com
// VITE_MESSAGINGSENDERID=566692589657
// VITE_APPID=1:566692589657:web:8b0a17a9d182b82bf20148