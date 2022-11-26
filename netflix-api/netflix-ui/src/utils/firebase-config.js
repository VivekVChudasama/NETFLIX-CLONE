
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBfwDPQ2Oeq8KIP9makhgairOWcLMwW8Io",
  authDomain: "react-netflix-clone-853d2.firebaseapp.com",
  projectId: "react-netflix-clone-853d2",
  storageBucket: "react-netflix-clone-853d2.appspot.com",
  messagingSenderId: "53798532222",
  appId: "1:53798532222:web:640f636e1f729c56c1d42f",
  measurementId: "G-KD9Z3LXB0C"
};

const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);