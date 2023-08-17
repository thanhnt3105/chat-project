// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyCmoBJoUh7_M_a92negIKQKS31qi00pM0E",
	authDomain: "chat-d4206.firebaseapp.com",
	projectId: "chat-d4206",
	storageBucket: "chat-d4206.appspot.com",
	messagingSenderId: "278665916897",
	appId: "1:278665916897:web:652d1cec2dd0e9b26d22a0",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
