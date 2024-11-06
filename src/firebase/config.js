import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCpfmfFfoFTz_w9DUwnktVOnq3uMUMgvjo",
  authDomain: "coderhouse-7190.firebaseapp.com",
  projectId: "coderhouse-7190",
  storageBucket: "coderhouse-7190.firebasestorage.app",
  messagingSenderId: "1096354483973",
  appId: "1:1096354483973:web:bba22ce3ba57a3e71c716c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);