import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
        apiKey: "AIzaSyBzhZZAtGuqGYNz2zK2kgSFQDVULNGxQs0",
        authDomain: "ful-shuttle.firebaseapp.com",
        projectId: "ful-shuttle",
        storageBucket: "ful-shuttle.appspot.com",
        messagingSenderId: "490841065739",
        appId: "1:490841065739:web:e70a7c076f1215173d3a0e",
        measurementId: "G-HSX0B101YT"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
export { app, auth, db };