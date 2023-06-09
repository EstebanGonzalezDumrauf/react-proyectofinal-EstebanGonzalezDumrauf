import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// Import the functions you need from the SDKs you need
import {
    initializeApp
} from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBA4kiz89b9XUXQmsZpj4nZsnjPWc42epo",
    authDomain: "shining-life-gonzalezd.firebaseapp.com",
    projectId: "shining-life-gonzalezd",
    storageBucket: "shining-life-gonzalezd.appspot.com",
    messagingSenderId: "270320737621",
    appId: "1:270320737621:web:871e980103d6158659e3dc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);