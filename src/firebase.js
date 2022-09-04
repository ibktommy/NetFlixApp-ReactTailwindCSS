// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyCur5U5QTCJF95W7207The1ZrKX9JnJfO0",
	authDomain: "netflix-rt-clone.firebaseapp.com",
	projectId: "netflix-rt-clone",
	storageBucket: "netflix-rt-clone.appspot.com",
	messagingSenderId: "707552922044",
	appId: "707552922044:web:aa3ca94a7742d6d5b243b9",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
