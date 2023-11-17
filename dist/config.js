import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-storage.js";

const firebaseConfig = {
    apiKey: "AIzaSyAW2OLMJ6zTR-tRIkO5hTr4PoxcQNGjZ10",
    authDomain: "fir-practice-33fef.firebaseapp.com",
    projectId: "fir-practice-33fef",
    storageBucket: "fir-practice-33fef.appspot.com",
    messagingSenderId: "305847027404",
    appId: "1:305847027404:web:a867e020a4f45d1b06e469",
    measurementId: "G-W0KNWSJNRF"
  };
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);