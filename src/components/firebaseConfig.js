// src/firebaseConfig.js

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBV",
    authDomain: "devdeakinloginpage.firebaseapp.com",
    projectId: "devdeakinloginpage",
    storageBucket: "devdeakinloginpage.appspot.com",
    messagingSenderId: "137780384577",
    appId: "1:137780384577:web:773227c444af547e4807c0",
    measurementId: "G-08N59WMQ8N"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Auth and Firestore
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
